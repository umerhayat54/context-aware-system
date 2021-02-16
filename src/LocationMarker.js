import React from 'react'
import { StyleSheet,SafeAreaView,StatusBar,Image, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
export default function LocationMarker({route,navigation}) {
          const mapView = React.useRef()
          let {    
                    toAddressLat,
                    toAddressLong,
                    Address
                   
                } = route.params;


                function renderMap() {
         
                    const destinationMarker = () => (
                        <Marker
                      
                      coordinate={{ latitude: toAddressLat, longitude: toAddressLong }}
                        > 
                       
                            <View
                                style={{
                                    height: 50,
                                    width: 100,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: "#fff"
                                }}
                            >  
                                <View
                                    style={{
                                        height: 50,
                                        width: 100,
                                        borderRadius: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: "#fff"
                                    }}
                                >
                              <Text>{Address}</Text>
                              
                                    <Image
                                        source={require('./assets/red.png')}
                                        style={{
                                           
                                            width: 25,
                                            height: 25,
                                            tintColor: "red"
                                        }}
                                    />
                                </View>
                            </View>
                            
                        </Marker>
                    )
            
                    
                    return (
                         
                        <View style={{ flex: 1, }}>
                        
                            <MapView
                                ref={mapView}
                                provider={PROVIDER_GOOGLE}
                                initialRegion={{
                              latitude: (25.3858 + 25.3960 ) / 2,
                              longitude: (68.3675 + 68.3578 ) / 2,
                              latitudeDelta: Math.abs(25.3858- 25.3960) * 2,
                              longitudeDelta: Math.abs(68.3675 - 68.3578) * 2
                    }}
                                style={{ flex: 1}}
                            >
                            
                               
                                
                                {destinationMarker()}
                               
                                
                            </MapView>
        
        
                                
                           </View>
                    )
                }
          return (
                    <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar barStyle = "dark-content" hidden = {true}
                     backgroundColor = "#fff" />
                      <View style={{ flex: 1, }}>
                                {renderMap()}
                      </View>
                     </SafeAreaView>
          )
}

const styles = StyleSheet.create({})
