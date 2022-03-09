import React, { Suspense, useEffect, useState } from "react";
import "App.css";

import { PelisDetails } from "Screen/PelisDetails";
import logo from "img/peliculaZ-logo.png";
import { Modal } from "Component/Modal";
import { Footer } from "Component/Footer";
import { data } from "dataBd/data";
import slowImport from "Helpers/Helpers";
import { Card } from "Component/Card";

function App() {
  const [seachBox, setSeachBox] = useState("");
  const [modal, setModal] = useState(false);
  const [animacion, setAnimacion] = useState(false);
  const [indexPeli, setIndexPeli] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const datas = data?.filter(
    (pelis) =>
      pelis.title.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.description.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.info.origialTitle.toUpperCase().includes(seachBox.toUpperCase())
  );

  const ref = document.querySelector("body");
  animacion
    ? ref.classList.add("app7")
    : setTimeout(() => {
        ref.classList.remove("app7");
      }, 820);

  const accionHandler = () => {
    setModal(false);
    setAnimacion(false);
  };

 /* const nextPage = () => {
    setCurrentPage(currentPage + 10);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 10);
  };*/

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Peliculas" />
        <input onChange={(e) => setSeachBox(e.target.value)}></input>
      </header>
      <div className="body">
        {datas
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
          }
      </div>
     {/* <div>
        <button onClick={prevPage}>Atras</button>
        <button onClick={nextPage}>Siguiente</button>
        </div>*/}
      <Modal modal={modal} setModal={setModal}>
        <div onClick={() => accionHandler()} className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
        </div>
        <div className="containerLogo">
          <img
            alt="Peliculas"
            onClick={() => accionHandler()}
            className="logoModal"
            src={logo}
          />
        </div>
        <PelisDetails  modal={modal} data={data[indexPeli]} />
        <Footer />
      </Modal>
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
