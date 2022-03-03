import { useState } from 'react'
import image from '../img/mision-imposible-4.jpg'


export const PelisDetails = ({data}) => {

    const [peliPlay, setPeliPlay] = useState('')

   
    console.log(data.title)
    {/*<iframe src={peli.pelis} height="450" width="720" webkitAllowFullScreen mozallowfullscreen allowfullscreen frameborder="0" scrolling="no"></iframe>*/ }

    return (
        <div className="container">
           
            <div className="imgPelis">
                <img src={data.image} />
            </div>
            <div className="detail">
                <h1>{data.title}</h1>
                <p>
                    {data.description}
                </p>
                <ul>
                    <li><span>Título original</span>{data.info.origialTitle}</li>
                    <li><span>Director </span>{data.info.director}</li>
                    <li><span>Géneros </span>{data.info.generos}</li>
                    <li><span>Actores </span>{data.info.actores}</li>
                </ul>
            </div>
            <div className='reproductor'>
                <div className='btn'>
                   

                        <button className='btn-single' onClick={() => setPeliPlay(data.pelisLink.netu)}>Netu</button>
                        <button className='btn-single' onClick={() => setPeliPlay(data.pelisLink.zplayer)}>zplayer</button>
                </div>
                <iframe className='video' src={peliPlay} height="315" width="560" webkitAllowFullScreen="true" mozallowfullscreen="true" allowfullscreen="true" frameborder="0" scrolling="no"></iframe>



            </div>
            
        </div>
    )


}