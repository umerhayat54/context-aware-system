import React,{useState,useEffect} from 'react'
import { StyleSheet, Image,Text,Platform, ToastAndroid, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Location({navigation}) {
         
          const [Address, setAddress] = useState('')
          const [fromAddressLat, setFromAddressLat] =useState(null) 
          const [fromAddressLong, setFromAddressLong] =useState(null) 
          const [toAddressLat, setToAddressLat] =useState(null) 
          const [toAddressLong, setToAddressLong] =useState(null) 
          const mapView = React.useRef()
          


          return (
              <View style={{flex:1}}>
            <Header name="Location"/>
                    <View style={styles.container}>
                    
                        
                          <GooglePlacesAutocomplete
                                        placeholder='Find Location'
                                        fetchDetails={true}
                                        value={Address}
                                    
                                        onPress={(data, details = null) => {
                                           
                                        setToAddressLat(details.geometry.location.lat)
                                        setToAddressLong(details.geometry.location.lng)
                                            setAddress(details.name)
                                            console.log(details.geometry.location.lat)
                                           
                                           
                                        }}
                                        query={{
                                            key: 'Api',
                                            language: 'en',
                                        }}
                                        />
                                        <TouchableOpacity 
                                        style={{ alignItems:'center',backgroundColor:'#00aaff'
                                        ,height:50}}
                                        onPress={()=>{
                                            if(Address==''){
                                            if (Platform.OS === 'android') {
                                                        ToastAndroid.show("Enter Location", ToastAndroid.SHORT)
                                                    }
                                        }
                                            else{
                                             navigation.navigate("LocationMarker",{
                                                 toAddressLat:toAddressLat,
                                                 toAddressLong:toAddressLong,
                                                 Address:Address
                                             })
                                            }
                                        }}>
                                        


                                        
                                                  <Text style={{ alignItems:'center',
                                                  justifyContent:'center',
                                                 alignContent:'center',
                                                 top:20,
                                                 fontWeight:"300"
                                                  }}>Enter</Text>
                                        </TouchableOpacity>
                                        </View>
                  
                    
                    
           
           
                    </View>
          )
}

const styles = StyleSheet.create({
          container:{
                    flex:1,
                    justifyContent:'center',
                    alignContent:'center',
                   
          }

})
