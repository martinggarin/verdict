import {LOAD_ALL_ITEMS, LOAD_FILTERED_ITEMS} from '../types';


export const loadFilteredItemsAction = type => {
  return dispatch => {
    dispatch({
      type: LOAD_FILTERED_ITEMS,
      payload: type,
    });
  };
};

export const loadAllItemsAction = type => {
    return dispatch => {
      dispatch({
        type: LOAD_ALL_ITEMS,
        payload: type,
      });
    };
  };