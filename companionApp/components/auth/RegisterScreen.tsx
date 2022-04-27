import React, { useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput} from 'react-native';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../features/Users';



const RegisterScreen = () => {
  const [users, setUsers] = useState<any>([])
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const userList = useSelector((state: any) => state.users.value);
  const dispatch = useDispatch();


 const createUser = () => {
  console.log('User Created');
  axios
    .post('http://172.31.120.146:3001/client/create', {
      email,password
    })
    .then(result => {
      setUsers([
        ...users,
        {
          email,password
        },
        console.log(result.data)
        
      ]) 
      dispatch(
        addUser({
          id: userList[userList.length-1].id + 1,
          email,
          password,
          token: result.data,
        }),
      );
    }).catch(err => console.log(err));

    
    
    
};
  return (
    <View>
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={(e:any) => setEmail(e)}

      />
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={(e:any) => setPassword(e)}
      />
      <Button title='submit' onPress={() =>createUser()}/>
    </View>
    
  );
};

export default RegisterScreen;
