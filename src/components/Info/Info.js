import React, { useEffect} from 'react'
import { searchArtist } from '../../actions/searchActions'


//redux
import { useSelector, useDispatch } from 'react-redux';

import './Info.scss';


const Info = () => {
    

    const dispatch = useDispatch();
    useEffect(() => {        
        dispatch(searchArtist());        
    }, []);


    const info = useSelector(state => state.artists);
    
    

   return (
        <div>
     {!info.length ? 'Cargando...' :      
      (
       info.map(artist => {
         <div className="cont" id="up" >
                    <h2>{artist.strArtist}</h2>
                    <main className="container-info">
                        <article className="card">
                            <div className="content">
                                <img src={artist.strArtistThumb} alt="" />
                                <p>Fundado: <span>{artist.intFormedYear}</span></p>
                                <p>Género: <span>{artist.strGenre}</span></p>
                                <p>Ciudad: <span>{artist.strCountry}</span></p>

                            </div>
                        </article>

                        <div className="container-information">
                            <h3>Información</h3>
                            <p className="informacion">{artist.strBiographyES}</p>

                        </div>

                    </main>


                </div>


       })
      )
     
     
     }


        </div>
    )
}

export default Info