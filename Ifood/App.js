import * as React from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Styles, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function LoadingScreen() {
  return (
     <View style={styles.container}>
      <Card styles={styles.card}>
      <Image style={styles.Image1} source={require('./ifood-removebg-preview.png')}/>
      <Image style={styles.Image2} source={require('./capacete.png')}/>
      <Text style={styles.cardinicial}>iFood para Entragadores</Text>
      <Text style={styles.texta}> Arraste para conhecer </Text>
      </Card>

       <Button style={styles.Button}
        title="Entrar"
        color= 'red'
        
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        <Text>ㅤ</Text>
          <Text>ㅤ</Text>
       <Button style={styles.Button}
        title="Cadastro"
        color= 'red'
        
        onPress={() => Alert.alert('Simple Button pressed')}
      />
            <Text style={styles.footer}>
            Versão 2.0.9
      </Text>
       <Text style={styles.footer}>
     
            essa é a tela de cadastro para entregadores!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f=',
    padding: 8,
   
  },
  footer: {
    margin: 9,
    fontSize: 12,
    textAlign: 'center',
  },

  cardinicial: {
    fontSize: 24,
     margin: 50,
     textAlign: 'center',
     fontWeight: 'bold',
  },

  card: {
    color: 'red'
  },

  texta: {
    textAlign: 'center',
    fontSize: 12,
    margin: 9,
  },

  Image1: {
    resizeMode: 'contain',
    width: 140,
    height: 70,
    marginLeft: 90,
  
  },
   Image2: {
    resizeMode: 'contain',
    width: 150,
    height: 300,
    marginLeft: 80,
  
  },


});

function LoginScreen() {
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

function RecScreen() {
  return (
   <View style={styles.container}>
      <Text style={styles.portal}>
       Preencha com os dados do seu estabelecimento para que possamos recuperar o seu acesso ao portal
      </Text>
      <Text>ㅤ</Text>
       <Text>ㅤ</Text>
       
      <Text style={styles.campo}>*Campos obrogatórios </Text>
      <Text style={styles.paragraph}>
       Qual o CNPJ usado no cadastro do estabelecimento? 
      </Text>
       <Text style={styles.Use}>Use apenas números, sem espaços</Text>
       <TextInput style={styles.TextInput1}
        placeholder="1234567891001"
        keyboardType="numeric"
      />

      <Text style={styles.paragraph}>
       Qual o telefone usado no cadastro do estabelecimento ? 
      </Text>

      <Text  style={styles.Use}>Use apenas números, sem espaços</Text>
       <TextInput style={styles.TextInput1}
        placeholder="1234567891001"
        keyboardType="numeric"
      />
    

      <Button style={styles.Button}
        title="Continuar"
        color= 'red'
        
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        <Text>ㅤ</Text>
          <Text>ㅤ</Text>
       <Button style={styles.Button}
        title="Voltar"
        color= 'gray'
        
        
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
    margin: 25,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: '',

  },

  TextInput1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },

  Use: {
    margin: 10,
    color: 'gray'

  },
    
  portal: {
     fontWeight: '500',
     margin: 3,
     fontSize: 17,

  },

  Button: {
    margin: 9,
    paddingTop: 99,

  },

  campo: {
    color: 'red',
    fontWeight: 'bold',

  },
});


function EntregasScreen() {
  return (
   <View style={styles.container}>
      <Card styles={styles.card}>
      <Image style={styles.Image1} source={require('./ifood-removebg-preview.png')}/>
      <Image style={styles.Image2} source={require('./capacete.png')}/>
      <Text style={styles.cardinicial}>iFood para Entragadores</Text>
      <Text style={styles.texta}> Arraste para conhecer </Text>
      </Card>

       <Button style={styles.Button}
        title="Entrar"
        color= 'red'
        
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        <Text>ㅤ</Text>
          <Text>ㅤ</Text>
       <Button style={styles.Button}
        title="Cadastro"
        color= 'red'
        
        onPress={() => Alert.alert('Simple Button pressed')}
      />
            <Text style={styles.footer}>
            Versão 2.0.9
      </Text>
       <Text style={styles.footer}>
     
            essa é a tela de cadastro para entregadores!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f=',
    padding: 8,
   
  },
  footer: {
    margin: 9,
    fontSize: 12,
    textAlign: 'center',
  },

  cardinicial: {
    fontSize: 24,
     margin: 50,
     textAlign: 'center',
     fontWeight: 'bold',
  },

  card: {
    color: 'red'
  },

  texta: {
    textAlign: 'center',
    fontSize: 12,
    margin: 9,
  },

  Image1: {
    resizeMode: 'contain',
    width: 140,
    height: 70,
    marginLeft: 90,
  
  },
   Image2: {
    resizeMode: 'contain',
    width: 150,
    height: 300,
    marginLeft: 80,
  
  },
});

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={LoginScreen} />
        <Tab.Screen name="Recuperar senha" component={RecScreen} />
        <Tab.Screen name="Entregas" component={EntregasScreen} />
        <Tab.Screen name="tela carregamento" component={LoadingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}