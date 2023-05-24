import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    search_bar: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    encyclopedie: {
        backgroundColor: "#aaa4"
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
    bouton_prendre_photo: {
        padding: 10,
    }
});