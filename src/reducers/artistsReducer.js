import {
    SEARCH_ARTIST,
    SEARCH_ARTIST_SUCCESS,
    SEARCH_ARTIST_ERROR,
   
} from '../types/index';

//state reducer
const initialState = {
    artist: '',
    error: null,
    loading: false,
}

 /* eslint-disable */
export default function (state = initialState, action) {

    switch (action.type) {
       
        case SEARCH_ARTIST:
            return {
                ...state,
                loading: action.payload,
            }
        case SEARCH_ARTIST_SUCCESS:
            return {
                ...state,
                loading: false,
                artist: action.payload,
            }

        case SEARCH_ARTIST_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
            
               
        default:
            return state;
    }
}