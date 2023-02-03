import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "dataBd/data";
import { useSEO } from "Hooks/useSEO";
import axios from 'axios'

import gsap from "gsap";

export const PelisDetails = ({movies}) => {
  const [peliPlay, setPeliPlay] = useState("");
  const [datas, setDatas] = useState(null)
  const [Detail, setDetail] = useState(null);

  const params = useParams();

  const navigate = useNavigate();
  const errorF = () => navigate("../error404", { replace: true });

  const moviesGet = async () =>{
    try {
      const peliculas = await axios.get(`https://backend-peliculaz.herokuapp.com/api/movies/${params.id}`)
    console.log(peliculas.data)
    setDatas(peliculas.data)
    } catch (error) {
      errorF();
      console.log(error.response.status)
      setDatas(error.response.status)
    }
  }


  const example = {
    id: 35,
    title: "Error",
    description: "Error",
    info: {
      origialTitle: "Error",
      director: "Error",
      generos: "Error",
      actores: "Error",
    },
    years: "Error",
    time: "Error",
    pelisLink: {
      netu: "Error",
      streamsb: "Error",
    },
    image: "Error",
    error: true,
  };

  

  const datass = movies?.find((peli) => peli.id == params.id && peli);
  
  useEffect(() => {
    if (datass){
      setDatas(datass)
    } else {
      moviesGet()
      
    }
  }, [datass]);

  useEffect(() => {
    setPeliPlay(datas?.pelisLink.netu);
  }, [datas]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = datas?.title;
  const description = datas?.description;

  useSEO({ title, description });

  /* useEffect(() => {
    !modal && setPeliPlay("");
  }, [modal]);*/

  const pelisDetails = gsap.timeline();
  const detailsImg = useRef(null);
  const detailsTitle = useRef(null);
  const detailsDescription = useRef(null);
  const detailsInfo = useRef(null);

  useEffect(() => {
    pelisDetails.from(detailsImg.current, {
      duration: 0.8,
      //skewX:10,
      x: -100,
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    pelisDetails.from(detailsTitle.current, {
      duration: 0.2,
      //skewX:10,
      y: -50,
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    pelisDetails.from(detailsDescription.current, {
      duration: 0.3,
      //skewX:10,
      x: 20,
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    pelisDetails.from(detailsInfo.current, {
      duration: 0.3,
      //skewX:10,
      y: 20,
      opacity: 0,
    });
  }, []);
   

  return (
    datas && (
      <div>
        <div className="container">
          <div className="imgPelis">
            <img ref={detailsImg} src={datas.image.url} alt={datas.title} />
          </div>
          <div className="detail">
            <h1 ref={detailsTitle}>{datas.title}</h1>
            <p ref={detailsDescription}>{datas.description}</p>
            <ul ref={detailsInfo}>
              <li>
                <span>Título original</span>
                {datas.info.origialTitle}
              </li>
              <li>
                <span>Año</span>
                {datas.years}
              </li>
              <li>
                <span>Tiempo</span>
                {datas.time}
              </li>
              <li>
                <span>Director </span>
                {datas.info.director}
              </li>
              <li>
                <span>Géneros </span>
                {datas.info.generos}
              </li>
              <li>
                <span>Actores </span>
                {datas.info.actores}
              </li>
            </ul>
          </div>
        </div>
        <div className="warnning">
          <p>
            <span>WARNNING!!!</span> No necesitas descargar nada para visualizar
            las películas
          </p>
        </div>
        <div className="reproductor">
          <div className="btn">
            <button
              className={
                peliPlay === datas.pelisLink.netu
                  ? "btn-single-full"
                  : "btn-single"
              }
              onClick={() => setPeliPlay(datas.pelisLink.netu)}
            >
              Netu
            </button>
            <button
              className={
                peliPlay === datas.pelisLink.streamsb
                  ? "btn-single-full"
                  : "btn-single"
              }
              onClick={() => setPeliPlay(datas.pelisLink.streamsb)}
            >
              StreamSB
            </button>
          </div>
          <iframe
            title={datas.title}
            className="video"
            src={peliPlay}
            height="315"
            width="560"
            webkitAllowFullScreen="true"
            mozallowfullscreen="true"
            allowfullscreen="true"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    )
  );
};
