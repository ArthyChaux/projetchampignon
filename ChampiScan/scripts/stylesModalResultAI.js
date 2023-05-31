import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flex: 1
    },
    titre: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    },
    pressable_item: {
        flexDirection: 'row'
    },
    image_item: {
        width: 100,
        height: 100,
        margin: 10
    },
    description_item: {
        flex: 1,
        margin: 5,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    nom_francais_item: {
        fontWeight: "bold",
        fontSize: 14,
    },
    nom_latin_item: {
        color: "#aaa"
    },
    comestibilite_mortel_item: {
        padding: 15,
        fontWeight: 'bold',
        color: "#d33"
    },
    comestibilite_toxique_item: {
        padding: 15,
        fontWeight: 'bold',
        color: "#F4DC00"
    },
    comestibilite_comestible_item: {
        padding: 15,
        fontWeight: 'bold',
        color: "#3d3"
    },
    comestibilite_a_jeter_item: {
        padding: 15,
        fontWeight: 'bold',
        color: "#5D7D92"
    },
    bouton_close: {
        padding: 10
    }
});