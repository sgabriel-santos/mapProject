import React from 'react';
import {Text, View, Linking, Image } from 'react-native';
import {styles} from '../styles/InformationStyles'
import InfoConfig from '../config/InformationConfig'

export default function Information(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>

      <View style={styles.image_view}>
        <Image source={require('../../assets/profile_image.jpeg')} style={styles.image}/>
        <Text style={styles.text_image}>{InfoConfig.name}</Text>
      </View>
      
      <Text style={styles.text} 
        onPress={() => Linking.openURL(`whatsapp://send?text=${InfoConfig.phone.whatsapp_text}&phone=${InfoConfig.phone.phone}`)}
      >
        <Text style={styles.bold}>Telefone: </Text>
        {InfoConfig.phone.description}
      </Text>

      <Text style={styles.text} 
        onPress={() => Linking.openURL(`mailto:${InfoConfig.email.email}?subject=${InfoConfig.email.email_sub}&body=${InfoConfig.email.email_desc}`)}
      >
        <Text style={styles.bold}>Email: </Text>
        {InfoConfig.email.email}
      </Text>

      <Text style={styles.text} onPress={() => Linking.openURL(InfoConfig.github.link)}>
        <Text style={styles.bold}>GitHub: </Text>
        {InfoConfig.github.description}
        </Text>
      <Text style={styles.text} onPress={() => Linking.openURL(InfoConfig.linkedin.link)}>
        <Text style={styles.bold}>LinkedIn: </Text>
          {InfoConfig.linkedin.description}
        </Text>
    </View>
  );
}
