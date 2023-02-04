import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const SliderCategory = ({ seachBox}) => {
    const [carrusel, setCarrusel] = useState([])

    const carruselGet = async () =>{
        try {
          const datas = await axios.get('https://backend-peliculaz.herokuapp.com/api/carrusel?sort=-createdat&limit=500')
         //console.log(peliculas)
         setCarrusel(datas.data.docs)
        } catch (error) {
          console.log(error)
          setCarrusel(error.message)
        }
      }


    useEffect(() => {
        carruselGet()
    }, [])
      
      const navigate = useNavigate();

      const send = (link) => navigate(link, { replace: true });
  
  return ( seachBox === "" && carrusel &&
    <div className="carruselDiv">
    <section className="carrusel">
    {carrusel?.map(carr =>  <img key={carr.id} onClick={() => send(carr.link)} src={carr.image.url}/> )}
       
        
    </section>
    </div>
  );
};
