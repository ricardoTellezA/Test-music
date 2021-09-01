import axios from 'axios';
import {
    SEARCH_ARTIST,
    SEARCH_ARTIST_SUCCESS,
    SEARCH_ARTIST_ERROR,

} from '../types/index';


//search for an artist

export function searchArtist(artist) {

    return async (dispatch) => {
        dispatch(findArtist());

        try {

            if (!artist) {
                const art = await axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay`);
                dispatch(findArtistSuccess(art.data.artists));

            } else {
                const art = await axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`);
                dispatch(findArtistSuccess(art.data.artists));
            }

        } catch (error) {
            dispatch(findArtistError(true));
        }


    }
}


const findArtist = () => ({
    type: SEARCH_ARTIST,
    payload: true
});

const findArtistSuccess = art => ({
    type: SEARCH_ARTIST_SUCCESS,
    payload: art

});

const findArtistError = state => ({
    type: SEARCH_ARTIST_ERROR,
    payload: state,

});

