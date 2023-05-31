import React from 'react'
import { View, Modal, Button, Image, Text, FlatList, Pressable } from 'react-native'

import styles from './stylesModalResultAI'


export default function(params) {
    
    const afficherFiche = (id_fiche) => {
        params.setModalFicheID(id_fiche);
        params.setModalFicheVisible(true);
    }

return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={params.modalResultAIVisible}
    onRequestClose={() => {
        params.setModalResultAIVisible(!params.modalResultAIVisible);
    }}>
        <View style={styles.modalView}>
            <Text style={styles.titre}>Résultat de l'analyse</Text>

            <FlatList
                style={{flex: 1}}
                data={params.mostRessemblantChampis}
                renderItem={({item}) =>

                    <Pressable onPress={() => afficherFiche(item[2].ID)} style={styles.pressable_item}>
                        <Image
                            source={item[2].image} //item.pic}}
                            style={styles.image_item}
                            resizeMode='cover'/>
                        
                        <View style={styles.description_item}>
                            <Text style={styles.nom_francais_item}>
                                {item[2].nom_francais}
                            </Text>
                            <Text style={styles.nom_latin_item}>
                                {item[2].nom_latin}
                            </Text>
                            {item[2].Comestibilité == "Mortel" && 
                                <Text style={styles.comestibilite_mortel_item}>
                                    {item[2].Comestibilité}
                                </Text>
                            }
                            {item[2].Comestibilité == "Toxique" && 
                                <Text style={styles.comestibilite_toxique_item}>
                                    {item[2].Comestibilité}
                                </Text>
                            }
                            {item[2].Comestibilité == "Comestible" && 
                                <Text style={styles.comestibilite_comestible_item}>
                                    {item[2].Comestibilité}
                                </Text>
                            }
                            {item[2].Comestibilité == "A jeter" && 
                                <Text style={styles.comestibilite_a_jeter_item}>
                                    À jeter
                                </Text>
                            }
                        </View>
                        <Text>{(item[1]*100).toPrecision(2)}%</Text>
                    </Pressable>

                }
            />

            <Button
                onPress={() => params.setModalResultAIVisible(!params.modalResultAIVisible)}
                title="Fermer"
                color="#841584"
                style={styles.bouton_close}
            ></Button>
        </View>
    </Modal>
)
}