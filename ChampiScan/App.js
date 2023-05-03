import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, TextInput } from 'react-native';

import * as ImagePicker from 'expo-image-picker';


/* ################ APP ################ */

export default function App() {


/* ################ VARIABLES ################ */

const [champi_data, setChampiData] = useState([
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
]);

/* ################ STYLES ################ */

const styles = StyleSheet.create({
  background_image: {
    flex: 1,
    justifyContent: 'center',
  },
});


/* ################ FUNCTIONS ################ */

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  /*let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  }).then(image => {
    //Your image
    console.log(image);
  });

  console.log(result);*/

  /*let a = await ImagePicker.useCameraPermissions();
  let result = await ImagePicker.launchCameraAsync({

  });*/

  /*let resultb = await launchCamera(options, (response)  => {
    // Response data
  });*/
};

const onChangeText = ()  => {
  setChampiData([
    {name: 'Devin', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
    {name: 'Dan', pic: 'https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg'},
  ]);
};

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
          backgroundColor: "#fff"
        }}
      onChangeText={onChangeText}>

      </TextInput>
      <FlatList
        data={champi_data}
        renderItem={({item}) =>
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
        }
      />
      <Button 
        onPress={pickImage}
        title="Prendre une photo"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        style={{
          backgroundColor: '#fff0'
        }}>
        </Button>
    </View>
    </ImageBackground>
  </View>
);
};