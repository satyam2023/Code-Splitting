import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './Style/Style';
interface FIrstProps{
setLoader:any
}

const FirstView:React.FC<FIrstProps>=({setLoader}:FIrstProps)=> {
    const [click,setClick] = useState(false);
    const [username,setUsername]=  useState<any>("");
    const [password,setPassword]=  useState<any>("");
  return (
    <SafeAreaView style={styles.container}>
        
       
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </View>
        <View style={styles.rememberView}>
            <View style={styles.switch}>
                <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
                <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <View>
                <Pressable onPress={() => Alert.alert("Forget Password!")}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </Pressable>
            </View>
        </View>

        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!")}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
            <Text style={styles.optionsText}>OR LOGIN WITH</Text>
        </View>
        
       <TouchableOpacity onPress={()=>{setLoader(true)}}>

        <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>
        </TouchableOpacity>
        
    </SafeAreaView>
  )
};

export default FirstView;


