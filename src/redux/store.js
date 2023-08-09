import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clients/ClientsSlice.js"
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import propertiesReducer from './property/PropertySlice.js'
// Configuration for Redux persist
const persistConfig = {
    key: 'root',
    storage,
  };
const persistedClientsReducer = persistReducer(persistConfig, clientsReducer);
const persistedPropertiesReducer = persistReducer(persistConfig, propertiesReducer);
export const store = configureStore({
    reducer:{
        clients:persistedClientsReducer,
        properties:persistedPropertiesReducer,
    }
})
export const persistor = persistStore(store);