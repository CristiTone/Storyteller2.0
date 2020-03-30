import * as galleryClient from '../apiClients/galleryClient';
import {
  GET_STORIES,
  // UPDATE_LIKES,
  STORY_ERROR
} from './types';

// Get posts
export const getStories = () => async dispatch => {
  try {
    const res = await galleryClient.getStories();

    dispatch({
      type: GET_STORIES,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add like
// export const addLike = id => async dispatch => {
//   try {
//     const res = await axios.put(`/api/posts/like/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch({
//       type: STORY_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Remove like
// export const removeLike = id => async dispatch => {
//   try {
//     const res = await axios.put(`/api/posts/unlike/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch({
//       type: STORY_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
