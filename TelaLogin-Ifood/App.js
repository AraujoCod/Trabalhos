import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Image style={styles.Image} source={require('./vagas-ifood-1200x900-removebg-preview.png')}/>
      <Text style={styles.paragraph}>
       Gestor de Pedidos
      </Text>
      <Text style={styles.Insira}>Insira seu usuário e senha para se conectar</Text>
   <Text>ㅤ</Text>
      <Text style={styles.Us} >
       Usuário
      </Text>
      <TextInput style={styles.TextInput1}
        placeholder="Usuário"
      />

      <Text style={styles.Us} >
       Senha
      </Text>
      <TextInput style={styles.TextInput1}
        placeholder="Senha"
        keyboardType="numeric"
      />
      <Button style={styles.Button}
        title="Entrar"
        color= 'red'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text>ㅤ</Text>
      <Button style={styles.Button}
        title="Estou com problemas para acessar"
        color= 'red'
        
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextInput1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },

  Us: {
    fontWeight: 'Bold'
  },
   
  Insira: {
  fontWeight: 'BOLD',
  fontSize: 13, 
  textAlign: 'center' 
  },
  Image:{
    resizeMode: 'contain',
    width: 140,
    height: 70,
    marginLeft: 75,
  },
});
