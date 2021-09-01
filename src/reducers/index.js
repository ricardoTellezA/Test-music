import {combineReducers} from 'redux';
import artistsReducer from './artistsReducer';

export default combineReducers({
  artists: artistsReducer,
});

