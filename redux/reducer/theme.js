import {colors} from '../../themes';
import {CHANGE_THEME} from '../types';

const INITIAL_STATE = {
  theme: colors.light,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
