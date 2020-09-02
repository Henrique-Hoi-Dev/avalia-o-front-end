import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  currentProducts: null,
  allProducts: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/GET_BYID_PROJECT_SUCCESS': {
        draft.currentProducts = action.payload.data;
        break;
      }
      case '@product/FIND_ALL_PROJECT_SUCCESS': {
        draft.allProducts = action.payload.data;
        if (!state.currentProducts) {
          draft.currentProducts = action.payload.data[0];
        }
        break;
      }
      case '@product/DELETE_PROJECT_SUCCESS': {
        draft.allProducts = action.payload.data;
        draft.currentProducts = action.payload.data[0];
        break;
      }

      default:
    }
  });
}
