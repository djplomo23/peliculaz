import { Card } from 'Component/Card';
import {data} from 'dataBd/data';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Spinner } from 'Component/spinner';
import { Carrusel } from 'Component/Carrusel';




export const AllPelis = ({seachBoxAll, movies, setMovies, setSeries, series }) => {
    const [seachBox, setSeachBox] = useState("");
    const [loader, setLoader] = useState(true);
    const [moviesError, setMoviesError] = useState(null);
    const [media, setMedia] = useState([]);

   
    const pull =[]
    const moviesGet = async () =>{
      try {
        const peliculas = await axios.get('https://backend-peliculaz.herokuapp.com/api/movies?sort=-createdat&limit=500')

        peliculas.data.docs.forEach(element => {
          pull.push(element)
        });
      const peliculasS = await axios.get('https://backend-peliculaz.herokuapp.com/api/series?sort=-createdat&limit=500')

        peliculasS.data.docs.forEach(element => {
          pull.push(element)
        });
        setMovies(pull)
      
      setLoader(false)
      } catch (error) {
        console.log(error)
        setMoviesError(error.message)
      }
    }




    useEffect(() => {
      moviesGet()
    }, [])

    useEffect(() => {
      setSeachBox(seachBoxAll)
    }, [seachBoxAll])

    movies.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return 1;
      }
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      return 0;
    })
    

   const datas = movies?.filter(
    (pelis) =>
      pelis.title.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.description.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.info.origialTitle.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.info.actores.toUpperCase().includes(seachBox.toUpperCase()) || 
      pelis.info.director.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.info.generos.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.years.toUpperCase().includes(seachBox.toUpperCase()) 
      
      
  )

    
    

  return (
  <>
   <Carrusel seachBox={seachBox}/>
      {loader ? (!moviesError ? <Spinner/> : <p className='texto'>{moviesError}</p>)  : datas?.map((pelis, i) => (
      <Card
        key={pelis.id}
        pelis={{ pelis, i }}
        
      />
    ))
    .reverse()}
    </>
  )
}
