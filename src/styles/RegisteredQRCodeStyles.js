import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    containerItems: {
      height: 80,
      margin: 10,
      marginLeft: 20,
      marginRight: 20,
      paddingStart: 10,
      paddingTop: 10,
      backgroundColor: 'white',
      borderRadius: 10
    },
    cardData: {
      fontWeight: 'bold'
    },
    cardDate: {
      fontStyle: 'italic',
      paddingTop: 15,
    },
    buttonRegister: {
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#593C8F",
      width: 70,
      height: 50,

      borderRadius: 10
    },
    clearText: {
      fontSize: 20,
      color: 'white'

    },
    viewNoItems: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    noItems: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  })