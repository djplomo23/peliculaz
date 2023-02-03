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
import { SeriesDetails } from "Screen/SeriesDetails";



function App() {
  
  const [seachBox, setSeachBox] = useState("");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  
  let navigate = useNavigate()
  const logoClick = () => {
    navigate("../", { replace: true });
    setSeachBox("")
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
        
        <input value={seachBox}  onChange={(e) => setSeachBox(e.target.value)}></input>
      </header>
      <div className="body">
       
        <Routes>
          <Route path="/" element={<AllPelis seachBoxAll={seachBox} setSeries={setSeries} setMovies={setMovies} series={series} movies={movies} />} />
         <Route path="/movies=:title/id=:id" element={<PelisDetails movies={movies} />} />
         <Route path="/series=:title/id=:id" element={<SeriesDetails series={series} />} />
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
      "¡Bienvenidos a Películaz.xyz, la mejor opción en entretenimiento de películas en línea! ¿Estás harto de la misma selección limitada en las plataformas digitales de pago y la falta de calidad en la transmisión? ¡Nosotros tenemos la solución para ti! Con nuestra amplia gama de títulos actualizados constantemente, encontrarás siempre algo interesante para ver. Además, ofrecemos la transmisión en alta definición (HD) sin ningún costo adicional. ¡Imágenes nítidas y un sonido cristalino para una experiencia de visualización única!

Pero eso no es todo, en Películaz.xyz también ofrecemos la posibilidad de ver todas tus películas favoritas totalmente gratis y con solo un clic. ¡Sin suscripciones ni pagos mensuales! ¿Qué esperas para unirte a nosotros?

Nuestra plataforma es intuitiva y fácil de usar, lo que significa que puedes disfrutar de tus películas sin interrupciones y sin complicaciones. ¡Explora nuestro amplio catálogo de títulos clásicos y nuevos, todos en alta definición y totalmente gratuitos!

En Películaz.xyz, valoramos tu tiempo y tus necesidades de entretenimiento, por eso ofrecemos una experiencia sin problemas y a solo un clic de distancia. ¡Únete a nuestra comunidad de cinéfilos hoy mismo y descubre por qué somos la mejor alternativa a las plataformas digitales de pago! ¡No te pierdas la oportunidad de ver tus películas favoritas en alta definición y sin costo alguno! ¡Haz clic y comienza a disfrutar ahora mismo!"

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
