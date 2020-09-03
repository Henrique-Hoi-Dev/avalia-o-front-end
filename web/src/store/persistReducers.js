import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'estoque',
      storage,
      whitelist: ['product'],
    },
    reducers
  );

  return persistedReducer;
};
