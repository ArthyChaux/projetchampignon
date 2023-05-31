
import React, { useState } from 'react'
import { View, Text, Pressable, Button, TextInput, FlatList, Image } from 'react-native'

import { Platform } from "react-native";

import styles from './stylesEncyclopédie'

import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import { manipulateAsync } from 'expo-image-manipulator';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native'

import {bundleResourceIO, decodeJpeg} from '@tensorflow/tfjs-react-native'
import * as FileSystem from 'expo-file-system';



export default function(params) {

    const [shown_champi_data, setShownChampiData] = useState(params.champi_data);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({allowsEditing: true, aspect: [1, 1],});
    
        if (!result.cancelled) {
            console.log(result);
            params.setSelectedImage(result.uri);
            params.setModalComputingAIVisible(true);

            getPredictions(result.uri);
        }

        // Ask the user for the permission to access the camera
        /*let permissionResult = await ImagePicker.getCameraPermissionsAsync();

        if(permissionResult.status !== 'granted') {
            permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        }

        await Camera.useCameraPermissions();
        
        if(permissionResult.status !== 'granted') {
            alert("You must turn on camera permissions to record a video.");
            return;
        }
        
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });*/

        //slet a = await ImagePicker.useCameraPermissions();
        /*let result = await ImagePicker.launchCameraAsync({});*/
        /*let resultb = await launchCamera(options, (response)  => {
        // Response data
        });*/
    };


    const modelJSON = require('../assets/model_converted/model.json');
    const modelWeights = require('../assets/model_converted/group1-shard1of1.bin');

    const loadModel = async()=>{
    //.ts: const loadModel = async ():Promise<void|tf.LayersModel>=>{
        const model = await tf.loadLayersModel(
            bundleResourceIO(modelJSON, modelWeights)
        ).catch((e)=>{
            console.log("[LOADING ERROR] info:",e);
        })
        return model;
    }

    const transformImageToTensor = async (uri)=>{
        //.ts: const transformImageToTensor = async (uri:string):Promise<tf.Tensor>=>{
        //read the image as base64
        
        //Dummy fix for reading uri        
        const manipResult = await manipulateAsync(uri, [], {});
  
        const img64 = await FileSystem.readAsStringAsync(manipResult.uri, {encoding:FileSystem.EncodingType.Base64});
        const imgBuffer =  tf.util.encodeString(img64, 'base64').buffer;
        const raw = new Uint8Array(imgBuffer);
        let imgTensor = decodeJpeg(raw);
        const scalar = tf.scalar(255);
        //resize the image
        imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [224, 224]);
        //normalize; if a normalization layer is in the model, this step can be skipped
        const tensorScaled = imgTensor.div(scalar);
        //final shape of the rensor
        const img = tf.reshape(tensorScaled, [1,224,224,3]);
        return img;
    }

    const makePredictions = async ( batch, model, imagesTensor )=>{
        //.ts: const makePredictions = async (batch:number, model:tf.LayersModel,imagesTensor:tf.Tensor<tf.Rank>):Promise<tf.Tensor<tf.Rank>[]>=>{
        //cast output prediction to tensor
        const predictionsdata= model.predict(imagesTensor).data();
        //.ts: const predictionsdata:tf.Tensor = model.predict(imagesTensor) as tf.Tensor
        //let pred = predictionsdata.split(batch); //split by batch size
        //return predictions 
        return predictionsdata;
    }

    const getPredictions = async (image)=>{
        console.log("Starting prediction");
        await tf.ready();

        console.log("Loading model");
        const model = await loadModel();

        console.log("Transforming image");
        const tensor_image = await transformImageToTensor(image);

        console.log("Calculating prediction");
        const predictions = await makePredictions(1, model, tensor_image);

        console.log("Got prediction :  ")
        console.log(predictions);

        openBestChampiFiche(predictions)
    }

    const openBestChampiFiche = async (predictions)=>{
        var mostRessemblantChampi = [[1, 0, {}], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0]];

        for (var j = 0; j < 10; j++) {
            var max = predictions[0];
            var maxIndex = 0;

            for (var i = 1; i < predictions.length; i++) {
                if (predictions[i] > max) {
                    maxIndex = i;
                    max = predictions[i];
                }
            }

            mostRessemblantChampi[j][0] = maxIndex + 1;
            mostRessemblantChampi[j][1] = predictions[maxIndex];
            mostRessemblantChampi[j][2] = params.champi_data[maxIndex];

            console.log(j.toString() + "eme plus grand est " + (maxIndex + 1).toString() + " with value " + predictions[maxIndex].toString());
            predictions[maxIndex] = 0;
        }

        params.setMostRessemblantChampi(mostRessemblantChampi);
        console.log(mostRessemblantChampi);
        params.setModalResultAIVisible(true);
        params.setModalComputingAIVisible(false);
    }

    const changeSearch = (search_text)  => {
        let new_shown_champi_data = [];

        for(let i=0; i<params.champi_data.length; i++) {
            if(params.champi_data[i].nom_francais.toLowerCase().includes(search_text.toLowerCase()) ||
                params.champi_data[i].nom_latin.toLowerCase().includes(search_text.toLowerCase()) ||
                search_text == ""
                ) {
                new_shown_champi_data.push(params.champi_data[i]);
            }
        }

        setShownChampiData(new_shown_champi_data);
    };

    const afficherFiche = (id_fiche) => {
        params.setModalFicheID(id_fiche);
        params.setModalFicheVisible(true);
    }

    return (
        <View style={styles.view}>
        
        <View style={{flexDirection: "row"}}>
            <TextInput
                style={styles.search_bar}
                placeholder= "Chercher un champignon"
                onChangeText={changeSearch}>
            </TextInput>
            <Button 
                style={{justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'black',
                color: 'white'}}
                onPress={pickImage}
                title="+">
                </Button>
        </View>

        <FlatList
            style={styles.encyclopedie}
            data={shown_champi_data}
            renderItem={({item}) =>

                <Pressable onPress={() => afficherFiche(item.ID)} style={styles.pressable_item}>
                    <Image
                        source={item.image} //item.pic}}
                        style={styles.image_item}
                        resizeMode='cover'/>
                    
                    <View style={styles.description_item}>
                        <Text style={styles.nom_francais_item}>
                            {item.nom_francais}
                        </Text>
                        <Text style={styles.nom_latin_item}>
                            {item.nom_latin}
                        </Text>
                        {item.Comestibilité == "Mortel" && 
                            <Text style={styles.comestibilite_mortel_item}>
                                {item.Comestibilité}
                            </Text>
                        }
                        {item.Comestibilité == "Toxique" && 
                            <Text style={styles.comestibilite_toxique_item}>
                                {item.Comestibilité}
                            </Text>
                        }
                        {item.Comestibilité == "Comestible" && 
                            <Text style={styles.comestibilite_comestible_item}>
                                {item.Comestibilité}
                            </Text>
                        }
                        {item.Comestibilité == "A jeter" && 
                            <Text style={styles.comestibilite_a_jeter_item}>
                                À jeter
                            </Text>
                        }
                    </View>
                </Pressable>

            }
        />

        <View style={styles.bouton_prendre_photo}>
            <Button 
                style={styles.bouton_prendre_photo}
                onPress={pickImage}
                title="Prendre une photo"
                color="#841584"
                ></Button>
        </View>
        
        </View>
    )
}