import axios from 'axios';
import * as React from 'react';
import  {useContext, useState} from 'react';
import {Alert, Button, Modal, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RegisterScreen from './RegisterScreen';



const LoginScreen = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userList = useSelector((state: any) => state.users.value);
  const dispatch = useDispatch();
  const payload = userList.find(
    (user: any) => user.email === email && user.password === password,
  );

  const signin = () => {
    if(payload) {
        Alert.alert('Sign in succeeded')
    } else {
        Alert.alert('wrong credentials')
    }
}
  


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button title="Login" onPress={signin}/>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <RegisterScreen />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});

export default LoginScreen;
