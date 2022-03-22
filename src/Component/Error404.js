import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="error">
      <div>
        <p>Película no encontrada</p>
        <h1>ERROR 404</h1>
        <Link to='/' > Ir a Inicio </Link>
      </div>
    </div>
  );
};
