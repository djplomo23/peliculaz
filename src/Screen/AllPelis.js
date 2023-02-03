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

   

    const moviesGet = async () =>{
      try {
        const peliculas = await axios.get('https://backend-peliculaz.herokuapp.com/api/movies?sort=-createdat&limit=500')
       //console.log(peliculas)
      setMovies(peliculas.data.docs)
      
      setLoader(false)
      } catch (error) {
        console.log(error)
        setMoviesError(error.message)
      }
    }

    //console.log(All)


    const seriesGet = async () =>{
      try {
        const peliculas = await axios.get('https://backend-peliculaz.herokuapp.com/api/series?sort=-createdat&limit=500')
        console.log(peliculas.data)
        setSeries(peliculas.data.docs)
        
      
      setLoader(false)
      } catch (error) {
        console.log(error)
        setMoviesError(error.message)
      }
    }

  console.log(series)

    useEffect(() => {
      
      moviesGet()
      seriesGet()
      
      
    }, [])

    useEffect(() => {
      setSeachBox(seachBoxAll)
      moviesGet()
      seriesGet()
     
      
    }, [seachBoxAll])


    useEffect(() => {
      
      for (let i = 0; i < series.length; i++) {
        const element = series[i];
        
        if(movies.every(movie => movie.id !== element.id)){
          setMovies([...movies, element])
        }
      
      }

    }, [series, movies])


    

   

   

  
 

   const datas = movies?.filter(
    (pelis) =>
      pelis.title.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.description.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.info.origialTitle.toUpperCase().includes(seachBox.toUpperCase()) 
      
      
  ).sort(function (a, b) {
    if (a.createdAt > b.createdAt) {
      return 1;
    }
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    return 0;
  })

    
    

  return (
  <>
   <Carrusel/>
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
