
import React, { useState } from 'react'
import { View, Text, Pressable, Button, TextInput, FlatList, Image } from 'react-native'

import styles from './stylesEncyclopédie'

import * as ImagePicker from 'expo-image-picker';



export default function(params) {

    const [shown_champi_data, setShownChampiData] = useState(params.champi_data);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({});
    
        if (!result.canceled) {
            params.setSelectedImage(result.assets[0].uri);
            params.setModalComputingAIVisible(true);
        } else {
            alert('Tu n\'as pas choisi d\'image.');
        }

        /*let a = await ImagePicker.useCameraPermissions();
        let result = await ImagePicker.launchCameraAsync({
    
        });*/
        /*let resultb = await launchCamera(options, (response)  => {
        // Response data
        });*/
    };

    const changeSearch = (search_text)  => {
        let new_shown_champi_data = [];

        for(let i=0; i<params.champi_data.length; i++) {
            if(params.champi_data[i].nom_francais.includes(search_text) || search_text == "") {
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
        
        <TextInput
            style={styles.search_bar}
            placeholder= "Chercher un champignon"
            onChangeText={changeSearch}>
        </TextInput>

        <FlatList
            style={styles.encyclopedie}
            data={shown_champi_data}
            renderItem={({item}) =>

                <Pressable onPress={() => afficherFiche(item.ID)} style={styles.pressable_item}>
                    <Image
                        source={item.image} //item.pic}}
                        style={styles.image_item}
                        resizeMode='cover'/>
                    <Text style={styles.text_item}>
                        {item.nom_francais}
                    </Text>
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