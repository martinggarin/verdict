import {LOGIN_USER, CREATE_USER} from '../types';

export const createUserAction = type => {
  return dispatch => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: type,
    });
  };
};