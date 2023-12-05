import React from "react";
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const sizes = ["S", "M", "L"];

export default function Detail({ route, navigation }) {

  const [selectedItem, setSelectedItem] = useState(null);

  const item = route.params;
  console.log(item);



  function changeColor(id) {
    // setBackgroundColor('#C67C4E')
    setSelectedItem(id)    
}


function handleNavigation(item){
  navigation.navigate("Order", item)  
}

  return (
    <View>
      <View>
        <View style={styles.imageContent}>
          <Image source={item.image} style={styles.imagePrincipal} />
        </View>
        <View style={styles.container}>
        <View style={styles.informe}>
          <Text style={styles.informeName}>{item.name}</Text>
          <Text style={styles.informeDescriptiom}>{item.description}</Text>
          <View>
            <View style={styles.star}>
              <Image source={require("../../assets/icons/star.png")} />
              <Text style={styles.evaluated}>{item.evaluated}</Text>
            </View>
          </View>
        </View>
        <View style={styles.icons}>
          <Image style={styles.iconsCoffee} source={require("../../assets/icons/coffe.png")} />
          <Image style={styles.iconsMilk} source={require("../../assets/icons/milk.png")} />
        </View>
        <View>
          <Image style={styles.line}  source={require("../../assets/icons/Line.png")}/>
        </View>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.textSize} >Size</Text>
          <View>
          <FlatList 
          data={sizes}
          numColumns={3}
          renderItem={({item, index}) => <TouchableOpacity style={styles.sizes} 
          keyExtractor={item => item+index} onPress={() => changeColor(index)}>
            <Text style={selectedItem === index ? [styles.selectedItem, ] : [styles.item, ]} >{item}</Text>
          </TouchableOpacity>
        }  
      
            />
          </View>
        </View>
        <View style={styles.infoButtonContainer}>
          <View style={styles.priceValueContainer}>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.value}>$ {item.value}</Text>
          </View>
          <TouchableOpacity onPress={() => handleNavigation(item)} style={styles.button} >
   <Text style={styles.textButton}>Buy Now</Text>
 </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContent: {
    marginTop: 64,
    justifyContent: "center",
    alignItems: "center",
  },

  imagePrincipal: {
    backgroundColor: "blue",
    height: 226,
    width: 315,
    borderRadius: 16,
  },



  container: {
    top:40,
    flexDirection: 'row',
  // backgroundColor:'gray',
  },


  informe: {
    marginLeft: 40,
    // backgroundColor:'gray',
  },

  informeName: {
    color: "#2F2D2C",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '600',    
  },


  informeDescriptiom: {
    color: "#9B9B9B",
    fontSize: 12,
    marginBottom: 16,
    fontWeight: '400',
  },

  star: {
    flexDirection: "row",
    marginRight: 4,
  },

  evaluated: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft:4,
    marginBottom:40,
  },



  icons: {
    width: 20,
    height: 20,
    flexDirection: "row",
    marginLeft: 139,
    marginTop: 80,
    justifyContent: 'space-between',
    // backgroundColor: 'yellow'

  },

  iconsCoffee: {
    marginRight: 34,
  },

  textSize: {
    marginLeft: 40,
    color: '#2F2D2C',
    fontSize: 14,
    fontWeight:'400',
    marginBottom: 12,
  },


  // line: {
  //   width: 315,
  //   height: 11,
  //   color: '#0d0d0d',
  //   backgroundColor: 'black',
  // },

  sizeContainer: {
    top: 30,
    justifyContent: 'center',
    // backgroundColor:'gray',
    // alignItems: 'center',
    
  },


  sizes: {  
    textAlign: 'center',
    color: '#2F4B4E',    
    fontSize: 14,
    fontStyle: 'normal',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 33,
    // marginRight: 10,
   
  },

  selectedItem: {
    paddingHorizontal: 41.5,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FFF5EE', 
    borderColor: '#C67C4E',
    color:'#C67C4E',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  
  item: {
    backgroundColor: 'transparent',
    paddingHorizontal: 41.5,
    paddingVertical: 10,
    borderRadius: 12,
    borderColor: '#DEDEDE',
    borderStyle: 'solid',
    borderWidth: 1,
    
  },


  infoButtonContainer: {
    top: 40,
    flexDirection: 'row',
    marginTop:  33,
    gap: 42,
    // backgroundColor:'gray',
  },



  button:{
   width: 217,
    color: '#fff',
    backgroundColor: '#C67C4E',
    // marginTop:  33,
    paddingVertical: 21,
    borderRadius: 16,
   
    // marginLeft: 128,
    // marginRight: 30,
    // marginBottom: 9,
    },


    textButton: {
    textAlign: 'center',
    color: "#FFF",
    fontFamily: "Sora",
    fontSize: 16, 
    fontWeight: 'bold',
    },


    priceValueContainer: {
      top:10,
      // backgroundColor:'gray',
    },


    price: {
      color: '#9B9B9B',
      fontSize: 14,
      fontWeight:'500',
      marginLeft:30,
      
    },

    value: {
      color: '#C67C4E',
      fontSize: 18,
      fontWeight: '700',
      marginLeft:30,
    },

});
