import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text, TextInput, TouchableOpacity, View
} from 'react-native';


export default function Cadastro({ navigation }) {
  const [input, setImput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}> Inscrever-se </Text>
      <StatusBar style="auto" />

      <Text style={styles.txtSubTitle}>
        E-mail:
      </Text>
      <TextInput style={styles.formInput}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder='Digite seu e-mail...'
        autoComplete="email"

      />
      <Text style={styles.txtSubTitle}>
        Senha:
      </Text>
      <View style={styles.AreaInput} >

        <TextInput
          style={styles.formInput}
          secureTextEntry={hidePass}
          placeholder='Digite sua senha...'
          value={input}
          maxLength={6}
          onChangeText={(texto) => setImput(texto)}
        />


        <TouchableOpacity style={styles.Icon}
          onPress={() => setHidePass(!hidePass)}>
          {hidePass ?
            <Ionicons name="eye" color="black" size={25} />
            :
            <Ionicons name="eye-off" color="black" size={25} />
          }
        </TouchableOpacity>



      </View>

      <Text style={styles.txtSubTitle}>
        Nome Completo:
      </Text>
      <TextInput style={styles.formInput}
        autoCapitalize="none"
        placeholder='Digite seu nome completo...'
        autoComplete="tel"
        dataDetectorTypes="phoneNumber"
        keyboardType="numeric"

      />

      <Text style={styles.txtSubTitle}>
        Telefone:
      </Text>
      <TextInput style={styles.formInput}
        autoCapitalize="none"
        placeholder='Digite seu número de telefone...'
        autoComplete="name"

      />

      <TouchableOpacity style={styles.formButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.txtButton}> Entrar </Text>
      </TouchableOpacity>

      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.subTxtButton} > Já possui uma conta?</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 40,
  },
  txtSubTitle: {
    fontSize: 20,
    left: 0,
  },
  formInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '90%',
    height: 50,
    padding: 10,
    margin: 10,
  },
  AreaInput: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Icon: {
    width: "15%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: 12,
  },
  formButton: {
    backgroundColor: '#114D9D',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  txtButton: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subButton: {
    padding: 10,
  },
  subTxtButton: {
    color: '#FEB74E',
    marginLeft: 50,
    fontSize: 18,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
