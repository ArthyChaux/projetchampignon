import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';

import ModalFiche from './scripts/ModalFiche';
import ModalComputingAI from './scripts/ModalComputingAI';
import Encyclopédie from './scripts/Encyclopédie';
import champi_data from './assets/champignons'


export default function() {
  
  const [modalFicheVisible, setModalFicheVisible] = useState(false);
  const [modalFicheID, setModalFicheID] = useState(1);
  const [modalComputingAIVisible, setModalComputingAIVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('https://i.pinimg.com/736x/41/50/46/41504656649d0ca99eef8c87e4fa9d10.jpg');

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require("./assets/fond.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
      
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
      ></Encyclopédie>

      </ImageBackground>
    </View>
  );
};
