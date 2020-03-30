import {
  GET_STORIES
  // UPDATE_LIKES,
} from '../actions/types';

const initialState = {
  stories: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STORIES:
      return {
        ...state,
        stories: payload,
        loading: false
      };
    // case UPDATE_LIKES:
    //   return {
    //     ...state,
    //     posts: state.posts.map(post =>
    //       post._id === payload.id ? { ...post, likes: payload.likes } : post
    //     ),
    //     loading: false
    //   };
    default:
      return state;
  }
}
