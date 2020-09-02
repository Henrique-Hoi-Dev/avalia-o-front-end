import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  currentProject: null,
  allProjects: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/GET_BYID_PROJECT_SUCCESS': {
        draft.currentProject = action.payload.data;
        break;
      }
      case '@product/FIND_ALL_PROJECT_SUCCESS': {
        draft.allProjects = action.payload.data;
        if (!state.currentProject) {
          draft.currentProject = action.payload.data[0];
        }
        break;
      }
      case '@product/DELETE_PROJECT_SUCCESS': {
        draft.allProjects = action.payload.data;
        draft.currentProject = action.payload.data[0];
        break;
      }

      default:
    }
  });
}
