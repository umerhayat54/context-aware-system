import React ,{useState}from 'react'
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Header from '../srcweather/Header';
export default function Time() {

          const [date, setDate] = useState(new Date());
          const [mode, setMode] = useState('date');
          const [show, setShow] = useState(false);
          const [time, setTime] = useState(new Date());
         
          let  day= date.getDate()
          let month = date.getMonth()+1
          let year = date.getFullYear()
          let hrs = time.getHours()
          let  mint = time.getMinutes()
      
        const onChange = (event, selectedValue) => {
          setShow(Platform.OS === 'ios');
          if (mode == 'date') {
            const currentDate = selectedValue || new Date();
            setDate(currentDate);
            setMode('time');
            setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
          } else {
            const selectedTime = selectedValue || new Date();
            setTime(selectedTime);
            setShow(Platform.OS === 'ios');
            setMode('date');
          }
        };
        const showMode = currentMode => {
          setShow(true);
          setMode(currentMode);
        };
      
        const showDatepicker = () => {
          showMode('date');
        };
      
        const showTimepicker = () => {
          showMode('time');
        };
         
          
        const formatDate = (date, time) => {
          return `${date.getDate()}/${date.getMonth() +
            1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()} `;
             
        };
         
        function TimeAndDate() {
          return (
              <View
                  style={{
                      position:'relative',
                      top: "80%",
                      left: 40,
                      alignItems:'center',
                      right: 0,
                      height:'50%',
                      
  
                      
                  }}
              >
              
                 
                  
                
              <View style={{flexDirection:'row',top:10,marginLeft:0,alignSelf:'flex-start'}}>
              
              <View style={{width:'64%',borderColor:"#000",borderWidth:1
                   ,marginLeft:20,height:40,alignSelf:'center',
                   borderRadius:5
              }}>
                  <TouchableOpacity style={{top:5}}
                  onPress={showDatepicker}    
                  >
                  
                      <View style={{flexDirection:'row',marginLeft:5,}}> 
                      <FontAwesome5
                       name="calendar-day"
                       size={26}
                       
                      
                       ></FontAwesome5>
                    
                                  {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
  
                          <Text style={{alignSelf:'center',marginLeft:10}} >
                          {formatDate(date, time)}</Text>
                      </View>
                  </TouchableOpacity>
              </View>
  
           
  
        
              </View>
             
              </View>
          )
      }
  
      

          return (
                    <View>
                    <Header name="Time"/>
                               {TimeAndDate()}
            
                    </View>
          )
}

const styles = StyleSheet.create({})
