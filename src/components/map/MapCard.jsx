import * as React from 'react';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet,  View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';

 
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width/height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 20.6330537, 
  longitude: -100.4087113,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}; 





export default function MapCard() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        provider={ PROVIDER_GOOGLE }
        initialRegion={ INITIAL_POSITION } 
      > 

      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },


});
