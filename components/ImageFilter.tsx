import React from 'react';
import { useState } from 'react';
import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios'
import { Image } from 'react-native';

const ImageFilter = ({navigation}:any) => {
    const [photo, setPhoto] = useState('')
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=rYroV7rkVO0MhZziFLmhx-7Gkx07Tc4kz3titNmpRDk`)
        .then((response) => {
            console.log(response.data)
            setResult(response.data.results)
        }).catch((err) => console.log(err))
    }

  return (
      <ScrollView>
      <View>
          
    <View>
        <TextInput placeholder='Search...' value={photo} onChangeText={(e:any) => setPhoto(e)}/>
        <Button title='s' onPress={() => changePhoto()}/>
    </View>
    <View>
    {result.map((value:any) => {
        return (
            <View>
            <Image source={{uri: `${value.urls.small}`}}  style={{width: 400, height: 400}} />
            </View>
        )
    })}
    </View>
    
    </View>
    </ScrollView>
  )
}

export default ImageFilter;