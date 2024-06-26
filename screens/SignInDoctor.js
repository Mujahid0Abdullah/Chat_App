import React, { Component, useContext, useState } from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import  Context  from '../context/Context';
import { signIn, signUp } from '../firebase';
import { useNavigation } from "@react-navigation/native";
export default function SignInDoctor (){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mode, setMode] =useState("signUp")
  const{ theme:{colors}} = useContext(Context)
  async function handlePress(){
    if (mode ==="signUp"){
      await signUp(email, password)
    }
    if (mode ==="signIn"){
      await signIn(email,password)
    }
  }
  const navigation = useNavigation();
    return (
      <View style={{justifyContent:'flex-end',alignItems:'center'
      ,flex:1
        ,color:"blue" ,backgroundColor:colors.white,
         textAlign : "center", fontFamily:"Roboto"}}>

           <TouchableOpacity title="doktor"
      onPress={() => navigation.navigate("sign In")}
      style={{
        position: "absolute",
        right: 20,
        top: 10,
        borderRadius: 14,
        color:"white",
        width: 80,
        height: 46,
        backgroundColor: colors.button,
        alignItems: "center",
        padding:3,
        justifyContent: "center",
      }}
    ><Text style={{ textAlign : "center",color:"white"}}>Kullanıcı Girişi </Text></TouchableOpacity>
        <Text style={{color:"black",fontSize:24, marginBottom:20,verticalAlign:'top'}}>    {mode !== "signUp" ? "Merhaba, Buradan Giriş yapabilirsiniz...": "Merhaba, Buradan Kayıt yapabilirsiniz..."} </Text>
          
      <View style={styles.view}>
        <TextInput style={styles.container} 
        value={email}
        onChangeText={setEmail}
        placeholder='Email'/>
        <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry style={styles.container } placeholder='Password'/>
        </View>
        <View style={styles.view2}>
          <Button
          onPress={handlePress}
          disabled={!password || !email}
          style={{width:200 }} width={"50%"} color={colors.button} title={mode === "signUp"?'       Kayıt Ol       ':"       Giriş      "}/>
        </View>
        <TouchableOpacity style= {{padding:10, verticalAlign:'bottom'}} onPress={() => mode === "signUp" ? setMode("signIn"): setMode("signUp")}>
          <Text>
            {mode === "signUp" ? "hesapiniz varsa ,Giriş yapailirsiniz.": "hesapiniz yok ise , Kayıt olun."}
          </Text>
        </TouchableOpacity>
      </View>
   
    );
  }
  const styles = StyleSheet.create({
 // const {  theme: {colors}} =useContext(Context)
    
    container: {
      borderBottomColor : "#128c7e",
      marginBottom:20,
      marginTop:10,
      //backgroundColor: URL("../asset/kayıtol.jpg"),
     backgroundColor:"white",
      textAlign: 'center',
      borderRadius:9,
      borderWidth:2,
     width:234
      ,height:55,
      borderColor: "#e5e5e5",
      borderCurve : 'circular'      
    },
    view:{
      alignItems: 'center',
      marginTop: 20 ,backgroundColor: "#128c7e",
      width: "100%",
      borderTopLeftRadius:19,
      borderTopRightRadius:19,
      borderRadius:19,
      verticalAlign:'bottom'
    },
    view2:{
      alignItems: 'center',
      
      width: "100%",
      padding:10,
      marginBottom:0,
      verticalAlign:'bottom'
    }
  });

