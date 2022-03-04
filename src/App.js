
import { useRef, useState } from 'react';
import './App.css';
import { Card } from './Component/Card';
import img from './img/mision-imposible-4.jpg'
import { PelisDetails } from './Screen/PelisDetails';
import logo from './img/peliculaZ-logo.png'
import batman from './img/El caballero oscuro-La leyenda renace.jpg'
import mision from './img/Mission.Impossible.Ghost.Protocol.2011.jpg'
import mision2015 from './img/Misión imposible-Nación secreta 2015.jpg'
import venon from './img/Venom-Habrá matanza 2021.jpg'
import redNotice from './img/Alerta-roja.jpg'
import scream from './img/SCREAM-2022-POSTER.jpg'
import bell from './img/Good Joe Bell 2020.jpg'
import repit from './img/Sans répit 2022.jpg'
import { Modal } from './Component/Modal';
import { Footer } from './Component/Footer';




function App() {

  const [peliculas, setpeliculas] = useState([])
  const [seachBox, setSeachBox] = useState('')
  const [modal, setModal] = useState(false)
  const [indexPeli, setIndexPeli] = useState(0)

  const data = [{
    id: 1,
    title: 'El caballero oscuro: La leyenda renace',
    description: 'Ocho años después del reinado de anarquía del Joker, Batman, con la ayuda de la enigmática Catwoman, se ve obligado a salir de su exilio para salvar a Gotham City del brutal terrorista guerrillero Bane.',
    info: {origialTitle: 'The Dark Knight Rises' ,director: 'Christopher Nolan', generos: 'Acción / Crimen / Drama', actores: 'Christian Bale, Tom Hardy, Anne Hathaway', },
    years: '2012',
    time: '2h 44min',
    pelisLink: {netu: 'https://hqq.to/e/VXh4cVpaKzV6S0oyREVKMWJFV0Fpdz09', zplayer: 'https://v2.zplayer.live/embed/d8v0uoncarv6'} ,
    image: batman
  },
  {
    id: 2,
    title: 'Misión: Imposible - Protocolo fantasma',
    description: 'El IMF es clausurado cuando se ve incriminado en un ataque bomba al Kremlin. Ethan Hunt y su nuevo equipo se embarcan en un misión clandestina para limpiar el nombre de la organización.',
    info: {origialTitle: 'Mission: Impossible - Ghost Protocol' ,director: 'Brad Bird', generos: 'Acción / Aventura / Suspenso', actores: 'Tom Cruise, Jeremy Renner, Simon Pegg', },
    years: '2011',
    time: '2h 12min',
    pelisLink: {netu: 'https://hqq.to/e/ZEQyUGw4SXlDNlNoVkZ3c1NmY3JRUT09', zplayer: 'https://v2.zplayer.live/embed/5noc1yej53ze'} ,
    image: mision
  },
  {
    id: 3,
    title: 'Misión imposible: Nación secreta',
    description: 'Ethan y su equipo asumen su misión más imposible hasta la fecha, erradicar al Sindicato, una organización internacional clandestina tan altamente cualificada como ellos, comprometida con la destrucción del FMI.',
    info: {origialTitle: 'Mission: Impossible - Rogue Nation' ,director: 'Christopher McQuarrie', generos: 'Acción / Aventura / Suspenso', actores: 'Tom Cruise, Rebecca Ferguson, Jeremy Renner', },
    years: '2015',
    time: '2h 11min',
    pelisLink: {netu: 'https://hqq.to/e/N1lQTEdPZGN4MzVPWFlCWUlPTmNPZz09', zplayer: 'https://v2.zplayer.live/embed/2lxxjfn90zav'} ,
    image: mision2015
  },
  {
    id: 4,
    title: 'Venom: Habrá matanza',
    description: 'Eddie Brock intenta relanzar su carrera entrevistando al asesino en serie Cletus Kasady, que se convierte en el huésped del simbionte Carnage y escapa de la cárcel tras una ejecución fallida.',
    info: {origialTitle: 'Venom: Let There Be Carnage' ,director: 'Andy Serkis', generos: 'Acción / Aventura / Ciencia Ficción', actores: 'Tom Hardy, Woody Harrelson, Michelle Williams', },
    years: '2021',
    time: '1h 37min',
    pelisLink: {netu: 'https://hqq.to/e/YjUwSnJEVmFaRlh6ZEdndHRwZDBhUT09', zplayer: 'https://v2.zplayer.live/embed/h31xn4pq8bag'} ,
    image: venon
  },
  {
    id: 5,
    title: 'Alerta roja',
    description: 'John Hartley, agente de la Interpol, no tendrá otro remedio que aliarse con el ladrón de arte más célebre de todos los tiempos, Nolan Booth, para capturar a la ladrona de arte más buscada del presente: la seductora y peligrosa Sarah Black.',
    info: {origialTitle: 'Red Notice' ,director: 'Rawson Marshall Thurber', generos: 'Acción / Comedia / Suspenso', actores: 'Dwayne Johnson, Ryan Reynolds, Gal Gadot', },
    years: '2021',
    time: '1h 58min',
    pelisLink: {netu: 'https://hqq.to/e/d2JXVWF0T3h2eUhFdnI4YnlVU29KUT09', zplayer: 'https://v2.zplayer.live/embed/0leq9mhrgic2'} ,
    image: redNotice
  },
  {
    id: 6,
    title: 'Scream 5',
    description: 'Una nueva entrega de la saga de terror "Scream" que seguirá a una mujer que regresa a su ciudad natal para intentar descubrir quién ha estado cometiendo una serie de crímenes atroces.',
    info: {origialTitle: 'Scream' ,director: 'Matt Bettinelli-OlpinTyler, Gillett', generos: 'Acción / Comedia / Suspenso', actores: 'Neve Campbell, Courteney Cox, David Arquette', },
    years: '2022',
    time: '1h 54min',
    pelisLink: {netu: 'https://hqq.to/e/bjE3MlBvczBneVRGTnl6ZzVIY0RPUT09', zplayer: 'https://v2.zplayer.live/embed/etvtgnwxiwhd'} ,
    image: scream
  },
  {
    id: 7,
    title: 'Good Joe Bell',
    description: 'La historia real de un padre de clase trabajadora de un pueblo pequeño que se embarca en una caminata en solitario por los Estados Unidos para hacer una cruzada contra el acoso escolar.',
    info: {origialTitle: 'Good Joe Bell' ,director: 'Reinaldo Marcus Green', generos: 'Biografía / Drama', actores: 'Mark Wahlberg, Reid Miller, Connie Britton', },
    years: '2020',
    time: '1h 34min',
    pelisLink: {netu: 'https://hqq.to/e/Rk5PRnhYeElheEp1bHc1YWMwTTdGZz09', zplayer: 'https://v2.zplayer.live/embed/xvbqwy9mkel4'} ,
    image: bell
  },
  {
    id: 8,
    title: 'Sin respiro',
    description: 'Después de hacer lo indecible para encubrir un accidente, un policía corrupto pierde el control de su vida cuando empieza a recibir amenazas de un misterioso testigo.',
    info: {origialTitle: 'Sans répit' ,director: 'Régis Blondeau', generos: 'Acción / Crimen / Suspense', actores: 'Franck Gastambide, Simon Abkarian, Michaël Abiteboul', },
    years: '2022',
    time: '1h 35min',
    pelisLink: {netu: 'https://hqq.to/e/MkxJVnp1ZCtaajlaVFJad0dJSUJUdz09', zplayer: 'https://v2.zplayer.live/embed/6goco183nri5'} ,
    image: repit
  },
  ]



  const datas = data?.filter(pelis => pelis.title.toUpperCase().includes(seachBox.toUpperCase()) || pelis.description.toUpperCase().includes(seachBox.toUpperCase()) || pelis.info.origialTitle.toUpperCase().includes(seachBox.toUpperCase()))

  const ref = document.querySelector('body')
  modal ? ref.classList.add('app7') : setTimeout(() => {ref.classList.remove('app7')  }, 820);

  

  return (
    <div className="App" >
      <header className='header'>
        <img src={logo} alt='Peliculas' alt='Peliculas' />
        <input onChange={e => setSeachBox(e.target.value)}></input>
      </header>
      <div className='body'>
        {datas.map((pelis, i) => <Card key={pelis.id} modal={modal} setModal={setModal} pelis={{pelis, i}} setIndexPeli={setIndexPeli} />)}


      </div>
      <Modal modal={modal}  setModal={setModal}>
      <div onClick={() => setModal(false)} className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
        </svg></div>
        <div className='containerLogo'>
          <img onClick={() => setModal(false)} className='logoModal' src={logo} />
        </div>
        <PelisDetails data={data[indexPeli]} />
        <Footer />
      </Modal>
      <p>La calidad del cien en tu hogar con películas 100% HD, audio latino, sin necesidad de descargar a un solo click de reproducir. Ver películas es la pasión de muchos, y si es Online desde la comodidad de tu hogar es mucho mejor,  y nosotros nos encargamos de que lleguen hasta tus pantallas sin intermediario... PELICULAZ.XYZ</p>
      <Footer />

    </div>
  );
}

export default App;
