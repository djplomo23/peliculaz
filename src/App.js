import React, { useState } from "react";
import "App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import { PelisDetails } from "Screen/PelisDetails";
import logo from "img/peliculaZ-logo.png";

import { Footer } from "Component/Footer";
import { AllPelis } from "Screen/AllPelis";
import { Error404 } from "Component/Error404";


function App() {
  
  const [seachBox, setSeachBox] = useState("");

  /* const nextPage = () => {
    setCurrentPage(currentPage + 10);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 10);
  };*/
  let navigate = useNavigate()
  const logoClick = () => {
    navigate("../", { replace: true });
  }

 
  return (
    <div className="App">
      
      <header className="header">
        
        <img onClick={logoClick} src={logo} alt="Peliculas" />
        
        <input onChange={(e) => setSeachBox(e.target.value)}></input>
      </header>
      <div className="body">
        <Routes>
          <Route path="/" element={<AllPelis seachBoxAll={seachBox} />} />
         <Route path="/pelicula=:title/id=:id" element={<PelisDetails />} />
         <Route path="*" element={<Error404 />} />
        </Routes>

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
