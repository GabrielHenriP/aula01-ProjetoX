import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet} from 'react-native';
import { CommonActions } from '@react-navigation/native';

import api from '../../services/api';


export default function SignIn({navigation}) {
    var flag = 1 // voltar pra zero
    
    const [text, setText] = useState('');

    function handleSubmit(){
        /*
        api.get(`users/${text}`)
        .then((response) => {
            
            if( response.data.node_id === "MDQ6VXNlcjYyMTE2OTg4"){
                flag = 1;
            }
            console.log(response.data)
        })
        .catch((err) => {
            console.log("ops! ocorreu um erro" + err);
        });
        */
        if(flag == 1){
            navigation.dispatch(
                CommonActions.reset({
                    index:1,
                    routes: [{name: 'Tabs'}],
                })
            )
            flag = 1 // voltar pra zero
        }
        
    }
    
    const styles = StyleSheet.create({
       view:{
        alignItems:'center',
        justifyContent:'center', 
        flex:1
       }

    })
    return (
        <View 
        style={styles.view} 
        >
            <Text>Entrar com GitHub</Text> 
           
            <View style={{padding: 10}}>
                <TextInput
                style={{width: 200,borderColor:"#000", borderWidth:2, borderRadius:5, padding: 10}}
                placeholder="Digite seu usuario"
                onChangeText={text => setText(text)}
                defaultValue={text}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    
                </Text>
            </View>
                
            <TouchableHighlight 
            onPress={handleSubmit} 
            style={{
                backgroundColor:'blue', 
                marginTop: 30, 
                alignItems:'center',
                justifyContent:'center',
                padding: 20,
                width:200,
                borderRadius:8
                }}>
                <View >
                    <Text style={{fontSize:25}}>Entrar</Text>
                </View>
            </TouchableHighlight>
            

        </View>
    )
}