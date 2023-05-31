import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';

import ModalFiche from './scripts/ModalFiche';
import ModalComputingAI from './scripts/ModalComputingAI';
import ModalResultAI from './scripts/ModalResultAI';
import Encyclopédie from './scripts/Encyclopédie';
import champi_data from './assets/champignons'


export default function() {
  
  const [modalFicheVisible, setModalFicheVisible] = useState(false);
  const [modalFicheID, setModalFicheID] = useState(1);

  const [modalComputingAIVisible, setModalComputingAIVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg');

  const [modalResultAIVisible, setModalResultAIVisible] = useState(false);
  const [mostRessemblantChampis, setMostRessemblantChampi] = useState([[58, 0.1362760365009308, {"Comestibilité": "Comestible", "ID": 58, "Lames": "/", "Liste": "C", "couleur_chapeau": "Brun", "couleur_pied": "Rouge", "especes_voisines_toxiques": "Boletus satanas", "image": 58, "nom_anglais": "Scarletina bolete", "nom_francais": "Bolet à pied rouge", "nom_latin": "Boletus erythropus", "taille_max_chapeau_cm": 20, "taille_max_pied_cm": "15"}], [28, 0.0872984379529953, {"Comestibilité": "Comestible", "ID": 28, "Lames": "Blanches", "Liste": "A", "couleur_chapeau": "Blanc", "couleur_pied": "Blanc", "especes_voisines_toxiques": "Entoloma lividum", "image": 28, "nom_anglais": "St. George’s mushroom", "nom_francais": "Tricholome de la saint-georges", "nom_latin": "Calocybe gambosa", "taille_max_chapeau_cm": 10, "taille_max_pied_cm": "10"}], [29, 0.07782444357872009, {"Comestibilité": "Comestible", "ID": 29, "Lames": "Blanches", "Liste": "A", "couleur_chapeau": "Gris", "couleur_pied": "Blanc", "especes_voisines_toxiques": "Entoloma vernum", "image": 29, "nom_anglais": "Shield pinkgill", "nom_francais": "Entolome en bouclier", "nom_latin": "Entoloma clypeatum", "taille_max_chapeau_cm": 10, "taille_max_pied_cm": "10"}], [43, 0.06708066165447235, {"Comestibilité": "A jeter", "ID": 43, "Lames": "Blanches", "Liste": "B", "couleur_chapeau": "Blanc", "couleur_pied": "Blanc", "especes_voisines_toxiques": "Amanites blanches ;", "image": 43, "nom_anglais": "Bearded amanita", "nom_francais": "Amanite ovoïde", "nom_latin": "Amanita ovoidea", "taille_max_chapeau_cm": 30, "taille_max_pied_cm": "15"}], [96, 0.05371919646859169, {"Comestibilité": "A jeter", "ID": 96, "Lames": "Jaunes", "Liste": "D", "couleur_chapeau": "Jaune", "couleur_pied": "Blanc", "especes_voisines_toxiques": "/", "image": 96, "nom_anglais": "Spotted Milkcap mushroom", "nom_francais": "Lactaire Scrobiculé", "nom_latin": "Lactarius scrobiculatus", "taille_max_chapeau_cm": 20, "taille_max_pied_cm": "7"}], [48, 0.05096321552991867, {"Comestibilité": "Comestible", "ID": 48, "Lames": "Roses", "Liste": "B", "couleur_chapeau": "Brun", "couleur_pied": "Blanc", "especes_voisines_toxiques": "Agaricus romagnesii", "image": 48, "nom_anglais": "Scaly wood mushroom", "nom_francais": "Agaric sanguinolent", "nom_latin": "Agaricus haemorrhoidarius", "taille_max_chapeau_cm": 12, "taille_max_pied_cm": "15"}], [7, 0.04456136375665665, {"Comestibilité": "Mortel", "ID": 7, "Lames": "Brunes", "Liste": "A", "couleur_chapeau": "Brun", "couleur_pied": "Brun", "especes_voisines_toxiques": "/", "image": 7, "nom_anglais": "Brown roll-rim", "nom_francais": "Paxille enroulé", "nom_latin": "Paxillus involutus", "taille_max_chapeau_cm": 15, "taille_max_pied_cm": "8"}], [67, 0.043517082929611206, {"Comestibilité": "Toxique", "ID": 67, "Lames": "Blanches", "Liste": "C", "couleur_chapeau": "Rouge", "couleur_pied": "Blanc", "especes_voisines_toxiques": "/", "image": 67, "nom_anglais": "Fly agaric", "nom_francais": "Amanite tue-mouches", "nom_latin": "Amanita muscaria", "taille_max_chapeau_cm": 20, "taille_max_pied_cm": "20"}], [45, 0.039358340203762054, {"Comestibilité": "Comestible", "ID": 45, "Lames": "Blanches", "Liste": "B", "couleur_chapeau": "Brun", "couleur_pied": "Blanc", "especes_voisines_toxiques": "Autres lépiotes", "image": 45, "nom_anglais": "Shaggy parasol", "nom_francais": "Lepiote déguenillé", "nom_latin": "Macrolepiota rhacodes", "taille_max_chapeau_cm": 15, "taille_max_pied_cm": "15"}], [40, 0.036218322813510895, {"Comestibilité": "Toxique", "ID": 40, "Lames": "Blanches", "Liste": "B", "couleur_chapeau": "Blanc", "couleur_pied": "Blanc", "especes_voisines_toxiques": "/", "image": 40, "nom_anglais": "Near Neighbor Amidella", "nom_francais": "Amanite ovoïde", "nom_latin": "Var. proxima", "taille_max_chapeau_cm": 30, "taille_max_pied_cm": "15"}]]);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require("./assets/fond.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
      
      <ModalResultAI
        modalResultAIVisible={modalResultAIVisible}
        setModalResultAIVisible={setModalResultAIVisible}
        setModalFicheVisible={setModalFicheVisible}
        setModalFicheID={setModalFicheID}
        mostRessemblantChampis={mostRessemblantChampis}
      ></ModalResultAI>
      <ModalComputingAI
        modalComputingAIVisible={modalComputingAIVisible}
        setModalComputingAIVisible={setModalComputingAIVisible}
        selectedImage={selectedImage}
      ></ModalComputingAI>
      <ModalFiche
       champi_data={champi_data}
        modalFicheVisible={modalFicheVisible}
        setModalFicheVisible={setModalFicheVisible}
        modalFicheID={modalFicheID}
      ></ModalFiche>
      <Encyclopédie
        champi_data={champi_data}
        setModalFicheVisible={setModalFicheVisible}
        setModalFicheID={setModalFicheID}
        setModalComputingAIVisible={setModalComputingAIVisible}
        setSelectedImage={setSelectedImage}
        setModalResultAIVisible={setModalResultAIVisible}
        setMostRessemblantChampi={setMostRessemblantChampi}
      ></Encyclopédie>

      </ImageBackground>
    </View>
  );
};
