import React , {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Order({route, navigation}) {

  const [contador, setContador] = useState(0)
  const item = route.params;

  function handleDecrement(){
    if( contador <= 0) return
setContador(contador -1)
  }

  function handleIncrement(){
    if( contador >= 5) return
    setContador(contador +1)
  }

  function handleNavigation(){
    navigation.navigate("Home")  
  }

  return (
    <View>

      <View style={styles.TextContainer}>
        <Text style={styles.TextDevivery}>Delivery Address</Text>
        <Text style={styles.TextName}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.TextAddress}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>
      </View>
      <View>
        <Image
          style={styles.line}
          source={require("../../assets/icons/line1.svg")}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <View>
          <Image
            style={styles.image}
            source={item.image}
          />
          </View>
          <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.countContainer}>
          <TouchableOpacity onPress={handleDecrement}>
            <Text style={styles.decrement}>-</Text>            
          </TouchableOpacity>
          <Text style={styles.contador} >{contador}</Text>
          <TouchableOpacity onPress={handleIncrement}>
            <Text style={styles.increment}>+</Text>            
          </TouchableOpacity>
        </View>
        <View>
          <Image
                    style={styles.line2}
                    source={require("../../assets/icons/line1.svg")}
          />
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.paymentSummary} >
          <Text >Payment Summary</Text>
        </View>
        <View style={styles.price}>
          <Text>Price</Text>
          <Text>$ {item.value}</Text>
        </View>
        <View style={styles.delivery}>
          <Text>Delivery</Text>
          <Text>$ {item.delivery}</Text>
        </View>
        <View style={styles.total}>
          <Text>Total Payment</Text>
          <Text>$ {+(item.value) + +(item.delivery) } </Text>
        </View>        
      </View>

      <TouchableOpacity onPress={handleNavigation} style={styles.button}>
        <Text style={styles.textButton}>Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    width: 153,
    color: "#fff",
    backgroundColor: "#C67C4E",
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",

    // marginLeft: 128,
    // marginRight: 30,
    // marginBottom: 9,
  },

  textButton: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "bold",
  },

  TextContainer: {
    // backgroundColor:'gray',
    top: 40,
    marginLeft: 31,
  },

  TextDevivery: {
    color: "#2F2D2C",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },

  TextName: {
    color: "#2F2D2C",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  TextAddress: {
    color: "#2F2D2C",
    fontSize: 14,
    fontWeight: "400",
    // marginBottom: 16,
  },

   line: {
    position: 'relative',
    marginLeft:28,
    top:90,
    width: 320,
    height: 2,
    marginBottom:20,
    backgroundColor:'black',
   },



   line2: {
    position: 'absolute',
    marginLeft:-300,
    top:80,
    width: 320,
    height: 2,
    marginBottom:20,
    backgroundColor:'black',
   },


  infoContainer: {
    flexDirection: "row",
    marginLeft: 30,
    top: 83,
    // backgroundColor: "blue",
    marginBottom: 120,
  },



  image: {
    width: 54,
    height: 54,
    borderRadius: 12,
    marginRight: 12,
  },

  info: {
    flexDirection: "row",
    // backgroundColor: 'blue',
  },


  name: {
  color: '#2F2D2C',
  fontSize: 16,
  fontWeight: '600',

  },


  description: {
    color: '#9B9B9B',
    fontSize: 12,
    fontWeight: '400',
    },



  countContainer: {
    flexDirection:'row',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    
  },




decrement: {
  padding: 0,
  textAlign:'center',
  width: 28,
  height: 28,
  borderRadius: 28 / 2,
  backgroundColor: '#e3b0b0',
  // color:'#aaadb8',
  marginRight:14,
  marginLeft:66,
  fontSize: 20,
  fontWeight:'500',

},



increment: {
  padding: 2,
  textAlign:'center',
  width: 28,
  height: 28,
  borderRadius: 28 / 2,
  backgroundColor: '#e3b0b0',
  fontSize:16,
  fontWeight:'500',
},





contador: {
  marginRight:14,
  fontSize:16,
  fontWeight:'500',
},


summaryContainer: {
  top:45,
marginLeft: 30,
marginRight:30,
// backgroundColor: 'red',
},



  paymentSummary: {
    color: '#2F2D2C',
    fontSize: 40,
    fontWeight: '800',
    // backgroundColor:'red',
    
  },

  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    color: '#2F2D2C',
    fontSize: 14,
    fontWeight: '400',
  },

  delivery: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    color: '#2F2D2C',
    fontSize: 14,
    fontWeight: '400',
  },

  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    color: '#2F2D2C',
    fontSize: 32,
    fontWeight: '400',
  },

  button: {
    paddingHorizontal:109,
    paddingVertical: 21,
    marginLeft:30,
    marginRight:30,
    color: "#fff",
    backgroundColor: "#C67C4E",
    marginTop: 150,
    paddingVertical: 21,
    borderRadius: 16,
  },


});
