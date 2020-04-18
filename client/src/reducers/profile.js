import { GET_LIBRARY } from '../actions/types';

const initialState = {
  library: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LIBRARY:
      return {
        ...state,
        library: payload,
        loading: false,
      };
    default:
      return state;
  }
}
