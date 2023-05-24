import React, { useState } from 'react'
import { View, Text, Modal, Button, Image, ScrollView } from 'react-native'

import styles from './stylesModalFiche'



export default function(params) {

let champi_info = params.champi_data[params.modalFicheID-1];

/*
   "Liste": "A",
   "nom_latin": "Cortinarius orellanus",
   "nom_francais": "Cortinaire couleur de rocou",
   "nom_anglais": "Fool’s webcap",
   "image": require("./photos/cortinarius_orellanus.png"),
   "Comestibilité": "Mortel",
   "couleur_chapeau": "Brun",
   "taille_max_chapeau_cm": 10,
   "couleur_pied": "Jaune",
   "taille_max_pied_cm": "10",
   "Lames": "Orangées",
   "especes_voisines_toxiques": "/"
*/

return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={params.modalFicheVisible}
    onRequestClose={() => {
        params.setModalFicheVisible(!params.modalFicheVisible);
    }}
    >
        <View style={styles.modalView}>
            <Text style={styles.titre}>{champi_info.nom_francais}</Text>
            <Image
                source={champi_info.image}
                style={styles.image_champi}
                resizeMode='contain'/>
            <Text style={styles.infos}>
                <Text style={{textDecorationLine: "underline"}}>Comestibilité :</Text> {champi_info.Comestibilité}{"\n"}
                <Text style={{textDecorationLine: "underline"}}>Couleur du chapeau :</Text> {champi_info.couleur_chapeau}{"\n"}
                <Text style={{textDecorationLine: "underline"}}>Taille maximale du chapeau :</Text> {champi_info.taille_max_chapeau_cm}cm{"\n"}
                <Text style={{textDecorationLine: "underline"}}>Couleur du pied :</Text> {champi_info.couleur_pied}{"\n"}
                <Text style={{textDecorationLine: "underline"}}>Taille maximale du pied :</Text> {champi_info.taille_max_pied_cm}cm{"\n"}
                <Text style={{textDecorationLine: "underline"}}>Lames :</Text> {champi_info.Lames}{"\n"}
                <Text style={{textDecorationLine: "underline"}}>Espèces voisines toxiques :</Text> {champi_info.especes_voisines_toxiques}
            </Text>

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