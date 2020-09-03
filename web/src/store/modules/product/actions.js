export function createProductRequest(values) {
  return {
    type: '@product/CREATE_PRODUCT_REQUEST',
    payload: { values },
  };
}

export function createProductSuccess(product) {
  return {
    type: '@product/UPDATE_PROFILE_SUCCESS',
    payload: { product },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}

export function productFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
