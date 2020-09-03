import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { productFailure } from './actions';

export function* createProduct({ payload }) {
  try {
    yield call(api.post, 'products/new', payload);
    toast.success('sucesso!');
  } catch (err) {
    console.log(err);

    toast.error('Erro, confira seus dados!');
    yield put(productFailure());
  }
}

export default all([
  takeLatest('@product/CREATE_PRODUCT_REQUEST', createProduct),
]);
