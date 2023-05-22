import React, { useState } from 'react'
import { View, Text, Modal, Button, Image } from 'react-native'

import styles from './stylesModalFiche'



export default function(params) {

let champi_info = params.champi_data[params.modalFicheID-1];

return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={params.modalFicheVisible}
    onRequestClose={() => {
        params.setModalFicheVisible(!params.modalFicheVisible);
    }}>
        <View style={styles.modalView}>
            <Text style={styles.titre}>{champi_info.nom_francais}</Text>

            <Image
                source={champi_info.image}
                style={styles.image_champi}
                resizeMode='contain'/>
            <Button
                onPress={() => params.setModalFicheVisible(!params.modalFicheVisible)}
                title="Fermer"
                color="#841584"
                style={styles.bouton_close}
            ></Button>
        </View>
    </Modal>
)
}