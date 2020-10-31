import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';

import Brasil from '../pages/Brasil';
import EUA from '../pages/EUA';


function Sair({navigation}){
  function handleSubmit(){
      navigation.dispatch(
          CommonActions.reset({
              index:1,
              routes: [{name: 'SignIn'}],
          })
      )
  }

  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TouchableHighlight 
          onPress={handleSubmit} 
          style={{
              backgroundColor:'#80bdb7', 
              marginTop: 30, 
              alignItems:'center',
              justifyContent:'center',
              padding: 20,
              width:200,
              borderRadius:8
              }}>
              <View >
                  <Text style={{fontSize:25}}>Logout</Text>
              </View>
          </TouchableHighlight>
  </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    
    <Tab.Navigator initialRouteName="Init">
    <Tab.Screen name="Brasil" component={Brasil} />
    <Tab.Screen name="EUA" component={EUA} />
    <Tab.Screen name="Sair" component={Sair} />
    </Tab.Navigator>
    
  );
}