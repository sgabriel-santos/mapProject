import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    title: {
      textAlign: 'center',
      marginTop: 35,
      marginBottom: 50,
      fontWeight: 'bold',
      fontSize: 20
    },
    text:{
      marginStart: 25,
      marginTop: 20,
      textAlign: 'left',
      fontSize: 15
    },
    bold:{
      fontWeight: 'bold'
    },
    image_view: {
      alignItems: 'center'
    },
    image: {
      justifyContent: 'center',
      borderRadius: 100,
      width: 150,
      height: 150,
    },
    text_image: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 50,
    }
  });

export {styles};