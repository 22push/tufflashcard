import {legacy_createStore as createStore } from 'redux'
import minReducer from './reducer'
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(
    minReducer,
    composeWithDevTools()
);
export default store;