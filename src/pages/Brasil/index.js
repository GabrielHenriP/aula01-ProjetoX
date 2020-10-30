import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';

import api from '../../services/api';

export default function Brasil() {
  const [dadosCovid, setDadosCovid] = useState([]);
 
  useEffect(() => { 
      getDadosCovid()
      console.log(dadosCovid);
  }, []);

  function getDadosCovid(){
    api.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
            .then(response => { 
                setDadosCovid(response.data.infectedByRegion);
            });
  }

  return (
    
    <View style={styles.back}>
      <View style={styles.card} >
        <Text style={styles.titulo} > Dados de Covid-19 - Brasil</Text>
        <Text style={styles.subTitulo} > Casos Por Estado </Text>
        <ScrollView>
        {
          dadosCovid.map(dado => (
            <Text
            key={dado.state}
            style={styles.dados}
            >
              {dado.state} - {dado.count}
            </Text>
          ))
        } 
        </ScrollView>
      </View>
    </View>
  );
  }

  const styles = StyleSheet.create({
    titulo:{
      borderColor: '#e6e6e6',
      borderBottomWidth: 2,
      marginBottom:10,
      padding:5,
      fontSize: 18,
    },
    subTitulo:{
      borderColor: '#e6e6e6',
      borderBottomWidth: 2,
      marginBottom:10,
      padding:5,
      fontSize: 15,
    },
    back:{
     alignItems:'center',
     justifyContent:'center', 
     flex:1,
     backgroundColor: '#e6e6e6',
     padding: 10,
    },
    card:{
      backgroundColor:'white',
      padding:10,
      height:450,
      width:280
    },
    dados:{
      paddingTop: 7
    }

 })