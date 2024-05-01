import storage from 'redux-persist/lib/storage';
import phonesReducer from './phoneSlice';
import filterReducer from './filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { createStore } from 'redux';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  (state = {}, action) => {
    return {
      phones: phonesReducer(state.phones, action),
      filter: filterReducer(state.filter, action),
    };
  }
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
