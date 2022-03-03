import {  useState } from 'react'
import image from '../img/mision-imposible-4.jpg'


export const PelisDetails = ({data}) => {

    const [peliPlay, setPeliPlay] = useState(data.pelisLink.netu)



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

            <div className='warnning'><p><span>WARNNING!!!</span> No necesitas descargar nada para visualizar las películas</p></div>

            <div className='reproductor'>
            
                <div className='btn'>
                   
                
                        <button className={peliPlay == data.pelisLink.netu ? 'btn-single-full' : 'btn-single'} onClick={() => setPeliPlay(data.pelisLink.netu)}>Netu</button>
                        <button className={peliPlay == data.pelisLink.zplayer ? 'btn-single-full' : 'btn-single'} onClick={() => setPeliPlay(data.pelisLink.zplayer)}>zplayer</button>
                </div>
                <iframe className='video' src={peliPlay} height="315" width="560" webkitAllowFullScreen="true" mozallowfullscreen="true" allowfullscreen="true" frameborder="0" scrolling="no"></iframe>



            </div>
            
        </div>
    )


}