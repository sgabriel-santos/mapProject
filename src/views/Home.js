import React, {useState, useEffect, userRef} from 'react';
import {Pressable, Text, View } from 'react-native';
import {styles} from '../styles/HomeStyles'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.homeButton} onPress={() => navigation.navigate('Maps')}>
        <Text style={styles.text}>Maps</Text>
      </Pressable>

      <Pressable style={styles.homeButton} onPress={() => navigation.navigate('QRCode')}>
        <Text style={styles.text}>QRCode</Text>
      </Pressable>
      
      <Pressable style={styles.homeButton} onPress={() => navigation.navigate('RegisteredQRCode')}>
        <Text style={styles.text}>Registered QR Code</Text>
      </Pressable>
      
      <Pressable style={styles.homeButton} onPress={() => navigation.navigate('Information')}>
        <Text style={styles.text}>Information</Text>
      </Pressable>
    </View>
  );
}
