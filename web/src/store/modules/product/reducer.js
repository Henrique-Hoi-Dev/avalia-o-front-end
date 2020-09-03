import produce from 'immer';

const INITIAL_STATE = {
  product: null,
};

export default function product(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/CREATE_PRODUCT_SUCCESS': {
        draft.product = action.payload.product;
        break;
      }

    
      default:
    }
  });
}
