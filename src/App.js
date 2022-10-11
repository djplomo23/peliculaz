import React, { useState, useEffect } from "react";
import "App.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

import { PelisDetails } from "Screen/PelisDetails";
import logo from "img/peliculaZ-logo.png";

import { Footer } from "Component/Footer";
import { AllPelis } from "Screen/AllPelis";
import { Error404 } from "Component/Error404";
import axios from 'axios'
import insta from './img/instagram-svgrepo-com.svg';


function App() {
  
  const [seachBox, setSeachBox] = useState("");
  const [movies, setMovies] = useState([]);

  
  let navigate = useNavigate()
  const logoClick = () => {
    navigate("../", { replace: true });
  }



  /*const postMovies = async () =>{

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      await axios.post('http://localhost:3000/api/movies', {
        title: element.title,
        description: element.description,
        info: element.info,
        years: element.years,
        time: element.time,
        pelisLink: element.pelisLink,
        image: element.image
      })
    }

  }

  useEffect(() => {
    postMovies()
  }, [])*/
  
 
  return (
    <div className="App">
      
      <header className="header">
        
        <img onClick={logoClick} src={logo} alt="Peliculas" />
        
        <input onChange={(e) => setSeachBox(e.target.value)}></input>
      </header>
      <div className="body">
        <Routes>
          <Route path="/" element={<AllPelis seachBoxAll={seachBox} setMovies={setMovies} movies={movies} />} />
         <Route path="/pelicula=:title/id=:id" element={<PelisDetails movies={movies} />} />
         <Route path="*" element={<Error404 />} />
        </Routes>
        <div className="insta">
          <a href='https://www.instagram.com/peliculaz/' target='_blank'>
         <img src={insta} />
         </a>
        </div>

        {/*datas
          .map((pelis, i) => (
            <Card
              key={pelis.id}
              modal={modal}
              setModal={setModal}
              pelis={{ pelis, i }}
              setIndexPeli={setIndexPeli}
              setAnimacion={setAnimacion}
            />
          ))
          .reverse()
          */}
      </div>
      {/* <div>
        <button onClick={prevPage}>Atras</button>
        <button onClick={nextPage}>Siguiente</button>
        </div>*/}
      <p style={{ margin: "15px", textAlign: "left" }}>
        La calidad del cien en tu hogar con películas 100% HD, audio latino, sin
        necesidad de descargar a un solo click de reproducir. Ver películas es
        la pasión de muchos, y si es Online desde la comodidad de tu hogar es
        mucho mejor, y nosotros nos encargamos de que lleguen hasta tus
        pantallas sin intermediario... PELICULAZ.XYZ
      </p>
      <Footer />
    </div>
  );
}

export default App;
