import React from 'react'
import { View, Modal, Button, Image, Text } from 'react-native'

import styles from './stylesModalComputingAI'

//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native'

export default function(params) {


return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={params.modalComputingAIVisible}
    onRequestClose={() => {
        params.setModalComputingAIVisible(!params.modalComputingAIVisible);
    }}>
        <View style={styles.modalView}>
            <Image source={{uri: params.selectedImage}} style={styles.selectedImage} resizeMode='contain'/>
            <Text style={styles.traitement_text}>Traitement de l'image en cours...</Text>
            <Button
                onPress={() => params.setModalComputingAIVisible(!params.modalComputingAIVisible)}
                title="Fermer"
                color="#841584"
                style={styles.bouton_close}
            ></Button>
        </View>
    </Modal>
)
}