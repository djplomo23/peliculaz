import { Link } from "react-router-dom";

export const Card = ({ pelis}) => {


  console.log(pelis);

  return (
    <div className="card">
      <Link to={`/pelicula=${pelis.pelis.title.replace(/ /g, '-' )}/id=${pelis.pelis.id}`}>
        <img
          loading="lazy"
          src={pelis.pelis.image}
          alt="Avatar"
        />
      </Link>
      <div className="container"></div>
    </div>
  );
};
