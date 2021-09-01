import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { searchArtist } from '../../actions/searchActions';
//sass
import './Search.scss';

const Search = () => {

    //component state
    const[name,setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);


    const dispatch = useDispatch();

    // access to the store useState
    
    const error = useSelector(state => state.artists.error);
    // console.log(loading.artists.loading);

    const findArtist = artist => dispatch(searchArtist(artist));

    //SUMBITS
    const submitSearchArtist = e => {
        e.preventDefault();

        //Validate form

        if(name.trim() === ''){
            setErrorMessage(true)
            return;
        }


        setErrorMessage(false)


        //SEARCH AN ARTIST
        findArtist(name);
 }
    return (
        <div className="container" id="start">
            <h1>Busca a tus artistas favoritos</h1>
            <div className="container-form">
                <form onSubmit={submitSearchArtist}>

                    <input type="text"
                        value={name}
                        placeholder="Nombre del artista"
                        onChange={e => setName(e.target.value)}
                    />

                    <input type="submit" className="btn" />
                </form>

                
            </div>
            {errorMessage ?<p className="alert-danger">Ingresa un artista</p> : null }
            {error ? <p className="alert-danger">Hubo un error</p> : null}
            
        </div>
              
    )
}

export default Search
