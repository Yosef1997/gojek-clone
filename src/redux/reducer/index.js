import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import Reducer from './location';

const reducerConfig = {
  key: 'reducer',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducers = combineReducers({
  location: persistReducer(reducerConfig, Reducer),
});

export default reducers;
