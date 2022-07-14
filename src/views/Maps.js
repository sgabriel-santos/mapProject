import React, {useState, useEffect, userRef} from 'react';
import {Text, View, Pressable } from 'react-native';
import {styles} from '../styles/MapsStyles'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import MapsConfig from "../config/MapsConfig"

export default function Maps(props) {
  const [map, setMap] = useState(null);
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: MapsConfig.latitudeDelta,
        longitudeDelta: MapsConfig.longitudeDelta,
      })
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={el => setMap(el)}
        style={styles.map}
        region={origin}
        showsUserLocation={true}
      >
        <Marker
          coordinate={MapsConfig.UEAInformation.coordinate}
          title={MapsConfig.UEAInformation.title}
          description={MapsConfig.UEAInformation.description}
        />
      </MapView>

      <View style={styles.search}>
        <Pressable style={styles.mapsButton} onPress={() => map.animateCamera({center: origin})}>
          <Text style={styles.text_button}>Sua Localização</Text>
        </Pressable>

        <Pressable style={styles.mapsButton} onPress={() => map.animateCamera({center: MapsConfig.UEAInformation.coordinate})}>
          <Text style={styles.text_button}>Localicação da UEA-EST</Text>
        </Pressable>
      </View>
    </View>
  );
}
