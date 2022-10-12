import { Card } from 'Component/Card';
import {data} from 'dataBd/data';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Spinner } from 'Component/spinner';




export const AllPelis = ({seachBoxAll, movies, setMovies }) => {
    const [seachBox, setSeachBox] = useState("");
    const [loader, setLoader] = useState(true);
    const [moviesError, setMoviesError] = useState(null);

    const moviesGet = async () =>{
      try {
        const peliculas = await axios.get('https://backend-peliculaz.herokuapp.com/api/movies?sort=-createdat&limit=100')
      setMovies(peliculas.data.docs)
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
      moviesGet()
      
    }, [seachBoxAll])

    
 

   const datas = movies?.filter(
    (pelis) =>
      pelis.title.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.description.toUpperCase().includes(seachBox.toUpperCase()) ||
      pelis.info.origialTitle.toUpperCase().includes(seachBox.toUpperCase())
  )

    

  return (
  <>
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
