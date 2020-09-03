import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../';
import {
  getByIdProductSuccess,
  findAllProductSuccess,
  getProductFailure,
  deleteProductSuccess,
} from './actions';

export function* getByIdProductRequest({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.get, `/products/new`);

    yield put(getByIdProductSuccess(response.data));
  } catch (err) {
    toast.error(
      'There was a problem load your projects. Please verify your data'
    );

    yield put(getProductFailure());
  }
}

export function* findAllProductRequest({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.get, `/users/${id}/project`);

    yield put(findAllProductSuccess(response.data));
  } catch (err) {
    toast.error(
      'There was a problem load your projects. Please verify your data'
    );

    yield put(getProductFailure());
  }
}

export function* deleteProductRequest({ payload }) {
  try {
    const { id, user } = payload.data;

    yield call(api.delete, `/users/project/${id}`);

    const response = yield call(api.get, `/users/${user}/project`);

    yield put(deleteProductSuccess(response.data));
  } catch (err) {
    toast.error(
      'There was a problem load your projects. Please verify your data'
    );

    yield put(getProductFailure());
  }
}

export default all([
  takeLatest('@product/GET_BYID_PRODUCT_REQUEST', getByIdProductRequest),
  takeLatest('@product/FIND_ALL_PRODUCT_REQUEST', findAllProductRequest),
  takeLatest('@product/DELETE_PRODUCT_REQUEST', deleteProductRequest),
]);
