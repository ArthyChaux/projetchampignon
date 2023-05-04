import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, TextInput, Pressable } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { readString } from 'react-native-csv'

import champi_csv from './assets/champignons.csv';

/* ################ APP ################ */

export default function App() {


/* ################ VARIABLES ################ */

fetch(champi_csv)
 .then(r => r.text())
 .then(text => {
  console.log('text decoded:', text);
});

const base_data = readString(text);
console.log(base_data);

/*const base_data = [
  {name: 'Devin', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'Dan', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'Dominic', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'Jackson', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'James', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'Joel', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'John', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'Jillian', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'Jimmy', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  {name: 'Julie', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
];*/

const [champi_data, setChampiData] = useState(base_data);
const [selectedImage, setSelectedImage] = useState('https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg');

/* ################ STYLES ################ */

const styles = StyleSheet.create({
  background_image: {
    flex: 1,
    justifyContent: 'center',
  },
});


/* ################ FUNCTIONS ################ */

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
  } else {
    alert('You did not select any image.');
  }

  /*let a = await ImagePicker.useCameraPermissions();
  let result = await ImagePicker.launchCameraAsync({

  });*/
  /*let resultb = await launchCamera(options, (response)  => {
    // Response data
  });*/
};

const onChangeText = (message)  => {
  let new_champi_data = [];

  for(let i=0; i<base_data.length; i++) {
    if(base_data[i].name.includes(message) || message == "") {
      new_champi_data.push(base_data[i]);
    }
  }

  setChampiData(new_champi_data);
};

const afficherFiche = () => {
  alert("");
}



return (
  <View style={{flex: 1}}>
    <ImageBackground
      source={require("./assets/fond.jpg")}
      resizeMode="cover"
      style={styles.background_image}>
    <View style={{
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20
        }}>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: "#fff",
        }}
        placeholder= "Chercher un champignon"
        onChangeText={onChangeText}>

      </TextInput>
      <FlatList
        data={champi_data}
        renderItem={({item}) =>
          <Pressable
            onPressOut={afficherFiche}>
            <Text style={{
              backgroundColor: '#fff',
              margin: 5
              }}>
              <Image
                source={{uri : item.pic}}
                style={{
                  width: 100,
                  height: 100,
                  margin: 10}}/>
                {item.name}
            </Text>
          </Pressable>
        }
      />

      <Image
          source={{uri: selectedImage}}
          style={{
            width: 100,
            height: 100,
            margin: 10}}
        />

      <Button 
        onPress={pickImage}
        title="Prendre une photo"
        color="#841584"
        style={{
        }}>
        </Button>
    </View>
    </ImageBackground>
  </View>
);
};
