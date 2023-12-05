import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';



export default function Initial({navigation}) {

  function handleNavigation(){
    navigation.navigate("HomeTab")
  }

  return (
    <View style={styles.container}>
    <Image
 style={styles.logo}
 source={require('../../assets/images/post-coffee.jpeg')}
/>
<Text style={styles.title}>Coffee so good, your taste buds will love it.</Text>
<Text style={styles.subTitle}>The best grain, the finest roast, the powerful flavo</Text>
<TouchableOpacity onPress={handleNavigation} style={styles.button} >
   <Text style={styles.textButton}>Get Started</Text>
 </TouchableOpacity>

</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
alignItems: 'center',

margin: 0,
padding: 0,
},
logo: {
width: '100%',

},

title: {
color: '#fff',
textAlign: 'center', 
fontSize: 34, 
marginBottom: 8,    
},

subTitle: {
color: '#A9A9A9',
textAlign: 'center',
fontFamily: 'Sora',
fontSize: 14,
marginBottom: 24,

},

button:{
color: '#fff',
backgroundColor: '#C67C4E',
paddingHorizontal: 109,
paddingVertical: 21,
borderRadius: 16,
marginBottom: 9,
},
textButton: {
color: "#FFF",
fontFamily: "Sora",
fontSize: 16, 
}

});