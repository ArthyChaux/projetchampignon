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
    selectedImage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    traitement_text: {
        textAlign: 'center',
        padding: 10
    },
    bouton_close: {
        padding: 10
    }
});