import produce from 'immer';

const INITIAL_STATE = {
  productList: [],
};

export default function product(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/CREATE_PRODUCT_SUCCESS': {
        draft.productList = action.payload.data;
        break;
      }
      case '@product/FIND_ALL_PRODUCT_SUCCESS': {
        console.log(action.payload, 'chego');
        draft.productList = action.payload.data;
        break;
      }
      default:
    }
  });
}
