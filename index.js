if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }

import React from 'react'
import {View} from 'react-native'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import usersReducer from './features/Users'



const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})
const Appprov = () => {
    return (
        <Provider store={store} >
            
            <App />
            
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => Appprov);