import React from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, FlatList, Image, ImageBackground, TextInput, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 


const location = ["Egito", "Canada", "Australia", "Irlanda", "Brasil"]


const category  = ['Cappuccino', 'Latte', 'Machiato', 'Café', 'Mate' , 'cappuccino', 'Latte', 'Machiato']

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    category: 'Cappuccino',
    image: require('../../assets/images/cappucino.png') ,
    name: 'Capputino',
    description: 'with Chocolate',
    value: '4.90',
    evaluated: '4.5',
    delivery: '2.00',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    category: 'Latte',
    image: require('../../assets/images/cappucino_02.png'),
    name: 'Latte',
    description: 'with Oat Milk',
    value: '3.70',
    evaluated: '4.0',
    delivery: '2.00',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    category: 'Machiato',
    image: require('../../assets/images/cappucino_03.png') ,
    name: 'Machiato',
    description: 'with Chocolate',
    value: '4.00',
    evaluated: '3.5',
    delivery: '2.00',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    category: 'Cappuccino',
    image: require('../../assets/images/cappucino.png') ,
    name: 'Capputinoo',
    description: 'with Chocolate',
    value: '4.50',
    evaluated: '4.5',
    delivery: '2.00',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63a',
    category: 'Lattee',
    image: require('../../assets/images/cappucino_02.png'),
    name: 'Lattee',
    description: 'with Oat Milk',
    value: '3.90',
    evaluated: '4.5',
    delivery: '2.00',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72a',
    category: 'Machiatoo',
    image: require('../../assets/images/cappucino_03.png') ,
    name: 'Machiatoo',
    description: 'with Chocolate',
    value: '4.53',
    evaluated: '4.5',
    delivery: '2.00',
  },
];

export default function Home({navigation}) {

  const [selectedItem, setSelectedItem] = useState(null);

  const [text, onChangeText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('transparent');
 const [selectdId, setSelectdId] =useState(null);

function changeColor(id) {

    // setBackgroundColor('#C67C4E')
    setSelectedItem(id)    
}

function handleDetail(item) {
  navigation.navigate("Detail", item)
  console.log(navigation);
}

  return (
    <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/backgroundBlack.png')} resizeMode="cover" style={styles.image}>
      
      <View>
        <View>
          <View style={styles.headerContent}>
            <View style={styles.locationContent}>
            <Text style={styles.textLocation}>Location</Text>
            <SelectDropdown
              style={styles.textSelect}
              data={location}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}    
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#fff'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              selectedRowStyle={styles.dropdown1SelectedRowStyle}
              search
              searchInputStyle={styles.dropdown1searchInputStyleStyle}
              searchPlaceHolder={'Search here'}
              searchPlaceHolderColor={'darkgrey'}
              renderSearchInputLeftIcon={() => {
                return <FontAwesome name={'search'} color={'#444'} size={18} />;
              }} 
              />
            </View>
          <Image
             style={styles.perfil}
             source={require('../../assets/images/foto-perfil.png')}
          />
          
          </View>
        </View>
        <View style={styles.iconSearch}>

        <FontAwesome name={'search'} color={'#fff'} size={20} />
        </View>
        <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search coffee"
                keyboardType="numeric"
                placeholderTextColor='#989898'
        /> 
      </View>
   
     <View style={styles.bannerContainer}>
    <Image
             style={styles.cafe}
             source={require('../../assets/images/foto-cafe.png')}
          />      
      </View>  
      </ImageBackground>  
     <View style={styles.containerInfo}>
         <View>

       
         <FlatList
        data={category}
        horizontal={true}
        style={styles.listCategory}
        renderItem={({item, index}) => <TouchableOpacity style={styles.list} keyExtractor={item => item+index} onPress={() => changeColor(index)}> 
          <Text style={selectedItem === index ? [styles.selectedItem, styles.category] : [styles.item, styles.category]} >{item}</Text>
          </TouchableOpacity> }        
      />
       </View>
    <FlatList
        style={styles.coffeeContainer}
        data={DATA}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.coffeeCard} onPress={() => handleDetail(item)}> 
            <View>           
        <Image
        source={item.image}
        keyExtractor={item => item.id}
        />
        <Text style={styles.name} >{item.category}</Text>
        <Text style={styles.description} >{item.description}</Text>
        <Text style={styles.value} >{item.value}</Text>
        </View>
        </TouchableOpacity>
        )}
      /> 
 </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
container: {
  flex:1,
  
},


containerInfo: {
flex:0.6,
},


listCategory: {
  marginTop: 83,
  // backgroundColor:'red',
  marginBottom: 28,
},


headerContent: {
flexDirection: 'row',
alignItems: 'center',
gap:-41,
// backgroundColor: 'green',
},

locationContent: {
marginLeft: 16,
},

image: {
  flex:0.4,
}, 

perfil: {

},

textLocation: {
color: '#B7B7B7',
marginTop: 19,
marginLeft: 15,

},

input: {
  // position: 'absolute',
  width: 315,
  height: 52,
  borderRadius: 16,
  color:'#989898',
  backgroundColor: '#313131',
  paddingLeft: 48, 
  marginLeft: 36,
  
  },

iconSearch: {
zIndex:1,
position: 'relative',
top: 35,
left: 52,
},



textSelect: {
    fontStyle: 'normal',
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#DDD',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal',
},

dropdown1BtnStyle: {
  width: '50%',
  height: 50,
  backgroundColor: 'transparent',
  
  
},
dropdown1BtnTxtStyle: {color: '#fff', textAlign: 'left'},
dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
dropdown1searchInputStyleStyle: {
  backgroundColor: '#EFEFEF',
  borderRadius: 8,
  borderBottomWidth: 1,
  borderBottomColor: '#444',
},

list: {
  
  marginLeft: 30,
  height: 50, 
  },


  bannerContainer: {
    position: 'relative',
    top: 20,
    width: '100%',
    // backgroundColor: 'blue',
    alignItems: 'center',
  },



coffeeContainer: {
  flexWrap: 'wrap',
  // backgroundColor: 'red',
},



coffeeCard: {
  width: 141,
  height: 132,
  flexShrink: 0,
  borderRadius: 16,
  // borderRadius: 16,
  // borderColor: '#DEDEDE',
  // borderStyle: 'solid',
  // borderWidth: 1,
  backgroundColor: 'red'
},

// cappucino_01: {
//   
// },

containerList: {
  flexDirection: 'row',
  flexWrap:  'nowrap',
  marginBottom: 24,
  marginTop: -10,
  backgroundColor: 'red',
  gap: 10,
},




category: {
 
  borderRadius: 12,
  fontSize: 14,
  fontStyle: 'normal',
  paddingHorizontal:16,
  paddingVertical:10,
  alignItems: 'center',
  // backgroundColor: 'red'
},

coffeeCard:{
  marginLeft: 34,
  marginRight: 24,
},

selectedItem: {
  backgroundColor: '#C67C4E',
  color: '#fff',
  fontWeight: '600',
},

item: {
  backgroundColor: '#fff',
  color: '#2F4B4E',
},

name: {
marginTop:10,
color: '#2F2D2C',
fontFamily: 'Sora',
fontSize: 16,
fontWeight: 'bold',

},


description: {
  marginTop: 8,
  marginBottom:12,
},


value: {
marginBottom: 37,
color: '#2F2D2C',
fontFamily: 'Sora',
fontSize: 18,
fontWeight: 'bold',
},
})