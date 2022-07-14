import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {styles} from '../styles/QRCodeStyles'
import {addItem} from '../services/LocalMemoryData'

export default function QRCode() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
    
    function formatDate(date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('-');
    }
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

      Alert.alert(
        "QRCode Scanned",
        `Bar code with type ${type} and data ${data} has been scanned!`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
          },
          { text: "Go to website", onPress: () => Linking.openURL(data) }
        ]
      );

      addItem(data, formatDate(new Date()))
        
      const openLink = false
      if(openLink){
        Linking.openURL(data)
      }

    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    );
}