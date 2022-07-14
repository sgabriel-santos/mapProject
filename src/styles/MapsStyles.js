import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    map: {
        height: '85%',
        backgroundColor: 'gray'
    },
    search: {
        height: "15%",
        alignItems: 'center'
    },
    mapsButton: {
        backgroundColor: '#593C8F',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 400,
        margin: 5,
        height: 45
    },
    text_button: {
        color: 'white'
    }
  });

export {styles};