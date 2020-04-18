import * as profileClient from '../apiClients/profileClient';
import { GET_LIBRARY, LIBRARY_ERROR } from './types';

// Get Profile Library
export const getLibrary = () => async (dispatch) => {
  try {
    const res = await profileClient.getLibrary();

    dispatch({
      type: GET_LIBRARY,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: LIBRARY_ERROR,
      payload: { msg: err.statusText, status: err.response.status },
    });
  }
};
