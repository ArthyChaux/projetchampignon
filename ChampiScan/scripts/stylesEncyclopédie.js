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
    text_item: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 5,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    bouton_prendre_photo: {
        padding: 10,
    }
});