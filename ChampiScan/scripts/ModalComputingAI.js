import React from 'react'
import { View, Modal, Button, Image, Text } from 'react-native'

import styles from './stylesModalComputingAI'


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
            <Text style={styles.traitement_text}>Traitement de l'image en cours...</Text>
            <Image source={{uri: params.selectedImage}} style={styles.selectedImage} resizeMode='contain'/>
            <Button
                onPress={() => params.setModalComputingAIVisible(!params.modalComputingAIVisible)}
                title="Annuler"
                color="#841584"
                style={styles.bouton_close}
            ></Button>
        </View>
    </Modal>
)
}