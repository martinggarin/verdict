import {combineReducers} from 'redux';
import theme from './theme';
import profile from './profile';

const rootReducer = combineReducers({
  theme,
  profile,
});

export default rootReducer;
