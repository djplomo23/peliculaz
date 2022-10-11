import { Card } from 'Component/Card';
import {data} from 'dataBd/data';
import { useEffect, useState } from 'react';
import axios from 'axios'



export const AllPelis = ({seachBoxAll, movies, setMovies }) => {
    const [seachBox, setSeachBox] = useState("");
   //const [movies, setMovies] = useState([]);

    const moviesGet = async () =>{
      try {
        const peliculas = await axios.get('https://backend-peliculaz.herokuapp.com/api/movies?sort=-createdat&limit=100')
      setMovies(peliculas.data.docs)
      } catch (error) {
        console.log(error)
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
    datas?.map((pelis, i) => (
      <Card
        key={pelis.id}
        pelis={{ pelis, i }}
        
      />
    ))
    .reverse()
  )
}
