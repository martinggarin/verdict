import {CHANGE_THEME} from '../types';

export const changeThemeAction = type => {
  return dispatch => {
    dispatch({
      type: CHANGE_THEME,
      payload: type,
    });
  };
};
