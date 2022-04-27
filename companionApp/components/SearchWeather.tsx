import React, {useState, useEffect} from 'react';
import {Alert, Button, Image, ImageBackground, StyleSheet, View} from 'react-native';
import axios from 'axios';
import {Text, TextInput} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {color} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native';
const image = require('../assets/cloud3.jpg');
const image2 = require('../assets/seacrh.jpg');

const SearchWeather = ({navigation}: any) => {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=80425e5cdaed2cfde7f4da52a541984d`;

  const searchLocation = () => {
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        console.log(response.data);
        console.log(location);
        console.log(data.main);
        console.log('hello');
      })
      .catch(err => console.log(err));

    setLocation('');
  };

  return (
    <ImageBackground source={image}>
      <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <View style={styles.app}>
          <View style={styles.app1}>
            <TextInput
              value={location}
              onChangeText={text => setLocation(text)}
              placeholder="Enter Location"
              style={styles.textinput}
            />

            
              <TouchableOpacity onPress={() =>searchLocation()}>
                <View style={styles.button}>
                  <Image source={image2} style={styles.button1} />
                </View>
              </TouchableOpacity>
           
          </View>
          <View>
            <View>
              <Text style={styles.Name}>{data.name}</Text>
            </View>
            <View>
              <Text style={styles.Temp}>
                {data.main ? (
                  <Text style={styles.Temp1}>
                    {((data.main.temp - 32) / 1.8).toFixed()}°C
                  </Text>
                ) : null}
              </Text>
            </View>
            <View style={styles.Condition2}>
              <Text style={styles.Condition1}>Condition</Text>
              <Text style={styles.Condition3}>
                {' '}
                {data.weather ? (
                  <Text style={styles.Condition4}>{data.weather[0].main}</Text>
                ) : null}
              </Text>
            </View>
            {data.name != undefined && (
              <View>
                <View>
                  <View style={styles.Feels}>
                    <Text style={styles.Feels1}>Feels Like</Text>
                    <Text style={styles.Feels2}>
                      {data.main ? (
                        <Text style={styles.Feels3}>
                          {' '}
                          {((data.main.feels_like - 32) / 1.8).toFixed()}°C
                        </Text>
                      ) : null}
                    </Text>
                  </View>
                  <View style={styles.Speed}>
                    <Text style={styles.Speed1}>Speed</Text>
                    <Text style={styles.Speed2}>
                      {data.main ? (
                        <Text style={styles.Speed3}> {data.wind.speed}</Text>
                      ) : null}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  app: {
    height: 714,
  },

  Name: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'center',
    marginTop: 50,
  },

  Temp: {
    textAlign: 'center',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 35,
    width: 70,
    height: 70,
    marginLeft: 175,
    marginTop: -10,
    paddingTop: 17,
    fontSize: 25,
    borderColor: 'white',
  },
  Temp1: {
    color: 'white',
  },
  text: {
    fontSize: 50,
    color: '#fff',
    display: 'none',
  },
  Condition: {
    fontSize: 25,
    color: 'white',
    borderColor: 'white',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 35,
    width: 100,
    height: 100,
    marginLeft: 195,
    marginTop: -10,
    paddingTop: 17,
  },
  Condition1: {
    fontSize: 30,
    color: 'white',
    marginLeft: -7,
  },

  Condition2: {
    marginTop: 130,
    marginLeft: 15,
  },
  Condition3: {
    fontSize: 26,
    borderBottomWidth: 2,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderRadius: 35,
    borderColor: 'white',
    width: 120,
    paddingLeft: 22,
  },
  Condition4: {
    color: 'white',
  },

  Feels: {
    marginTop: -85,
    marginLeft: 270,
  },
  Feels1: {
    fontSize: 30,
    color: 'white',
    marginLeft: -7,
  },
  Feels2: {
    fontSize: 30,
    borderBottomWidth: 2,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderRadius: 35,
    borderColor: 'white',
    width: 120,
    paddingLeft: 22,
  },
  Feels3: {
    color: 'white',
  },
  Speed: {
    marginTop: -170,
    marginLeft: 160,
  },
  Speed1: {
    fontSize: 30,
    color: 'white',
    marginLeft: -7,
  },
  Speed2: {
    fontSize: 30,
    borderBottomWidth: 2,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderRadius: 35,
    borderColor: 'white',
    width: 120,
    paddingLeft: 22,
    marginLeft: -19,
  },
  Speed3: {
    color: 'white',
  },

  app1: {
    color: '#fff',
    marginRight: 20
  },
  textinput: {
    width: 250,
    marginLeft: 35,
    marginTop: 20,
    borderWidth: 0,
    borderTopEndRadius: 35,
    borderBottomEndRadius: 35,
    borderTopStartRadius: 35,
    borderBottomStartRadius: 35,
    color: 'red',
  },
  button: {
    zIndex: 1,
    width: 100,
    marginRight: 50,
    marginTop: -60,
    height: 60,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  button1: {
      width: 80,
      height: 65,
      marginTop: -2,
      marginLeft:10,
      borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 35,
  }
});

export default SearchWeather;
