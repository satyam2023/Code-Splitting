import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
interface SecondProps{
  setLoader:any
}

const SecondView:React.FC<SecondProps> = ({setLoader}:SecondProps) => {
  return (
    <View>
      <Text style={{color:'blue',fontSize:18,fontWeight:'700',marginTop:90}}>
       This Is the UI of Our Second chunk
      </Text>
      <TouchableOpacity onPress={()=>{setLoader(false)}} style={{marginTop:40,borderRadius:2,borderWidth:2,alignSelf:'center'}}>
         <Text style={{color:'red'}}>  Go to First Screen</Text> 
      </TouchableOpacity>
    </View>
  )
}

export default SecondView;