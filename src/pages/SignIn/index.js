import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet} from 'react-native';
import { CommonActions } from '@react-navigation/native';

import api from '../../services/api';


export default function SignIn({navigation}) {
    const [text, setText] = useState('');

    function handleSubmit(){
        /*api.get(`users/${text}`)
        .then((response) => {
            if( response.data.node_id === "MDQ6VXNlcjYyMTE2OTg4"){
                //flag = 1;
                navigation.dispatch(
                    CommonActions.reset({
                        index:1,
                        routes: [{name: 'Tabs'}],
                    })
                )
            }
            console.log(response.data)
        })
        .catch((err) => {
            console.log("ops! ocorreu um erro" + err);
        });*/
        navigation.dispatch(
            CommonActions.reset({
                index:1,
                routes: [{name: 'Tabs'}],
            })
        )

    }
    
    
    return (
        <View 
        style={styles.view} 
        >
            <Text style={{fontSize:18}} >Entrar com GitHub</Text> 
           
            <View style={{padding: 10}}>
                <TextInput
                style={styles.input}
                placeholder="Digite seu usuario"
                onChangeText={text => setText(text)}
                defaultValue={text}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    
                </Text>
            </View>
                
            <TouchableHighlight 
            onPress={handleSubmit} 
            style={styles.bottom}>
                <View >
                    <Text style={{fontSize:25}}>Entrar</Text>
                </View>
            </TouchableHighlight>
            

        </View>
    )
}

const styles = StyleSheet.create({
    view:{
     alignItems:'center',
     justifyContent:'center', 
     flex:1
    },
    input:{
        width: 200,
        borderColor:"#000", 
        borderWidth:2, 
        borderRadius:5, 
        padding: 10, 
        backgroundColor: '#90e0c5'
    },
    bottom:{
        backgroundColor:'#6ed0d4', 
        marginTop: 30, 
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        width:200,
        borderRadius:8
        }

 })