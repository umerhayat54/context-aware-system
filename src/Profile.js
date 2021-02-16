
// import React, {useState,useContext} from 'react';
// import { View, Text, Button,Image,TouchableOpacity ,StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'


// const Profile = ({navigation}) => {
  
  
  
  
//   return (
    
    

//     <View style={styles.container}>
       
//        <View style={{position:'absolute',top:40,alignItems:'center',width:'100%',}}>
                  
                  

//                     <Image style={styles.avatarPlaceholder}
//                     source={{}} 
                    
                    
//                          >
                    
//                     </Image>
//                     </View>
//         <View style={{backgroundColor:'#E1E2E6',width:'90%' ,marginLeft:20,marginRight:0}}>
//         <View style={styles.NameView}
        
//         >
//         <Ionicons
//                      name="person-outline"
//                      size={28}
                     
//                      style={{marginTop:0,marginLeft:20}} 
//                      ></Ionicons>
         
//           <Text style={styles.NameText}
           
//           >muhammad umer hayyat</Text>
//         </View>

//         <View style={styles.NameView}>
//         <Ionicons
//                      name="mail-outline"
//                      size={28}
                     
//                      style={{marginTop:0,marginLeft:20}} 
//                      ></Ionicons>
//           <Text style={styles.NameText}
          
//           >example@gmail.com</Text>
//         </View>
        
//         <View style={styles.NameView}>
//         <Ionicons
//                      name="phone-portrait-sharp"
//                      size={28}
                     
//                      style={{marginTop:0,marginLeft:20}} 
//                      ></Ionicons>
//           <Text style={styles.NameText}>+92 302 1234567</Text>
//         </View>
        

// </View>
//         <View style={{backgroundColor:'#E1E2E6',width:'90%',height:10 ,marginLeft:20,marginRight:0}}/>

//            <View style={styles.button1}>
//                 <TouchableOpacity style={{flexDirection:'row',alignItems:'center',
//                 marginTop:30
//                 }}
              
//                 >
//                 <Ionicons
//                      name="log-out-outline"
//                      size={38}
                     
//                      style={{marginTop:0,marginLeft:20}} 
//                      ></Ionicons>
//                        <Text style={styles.NameText}>LogOut</Text>
//                 </TouchableOpacity>
             
             
//             </View>    

        

    
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor:'#fff',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
    
//   },
//   button1:{
//     backgroundColor:"#E1E2E6",
//     height:150,
   
    
//     position: 'absolute',
//     bottom: 5,
//     borderRadius:5,
//     padding:15,
//     width: '95%',                
// },
//   text: {
//     fontSize: 20,
//     color: '#333333'
//   },
//   avatarPlaceholder:{
//     width:100,
//     height: 100,
//     backgroundColor:'#E1E2E6',
//     borderRadius:50,
//     marginBottom:0,
//     justifyContent:'center',
//     alignItems:'center',
           

// },
// NameText:{
//        alignItems:'center',
//        marginLeft:30,
      
//        alignSelf:'center'


// },
// NameView:{
//   flexDirection:'row',
  
//   width:'100%',
//   height:50,
//   padding:10,
//   marginTop:10,
//   backgroundColor:"#fff",

// }
// });


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class Profile extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.linkedin.com/in/umer-hayyat-01558b134/' }} />;
  }
}

export default Profile;