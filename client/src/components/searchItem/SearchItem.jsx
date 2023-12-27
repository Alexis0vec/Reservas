import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  console.log("URL de la imagen:", item.photos[0]); // Agrega esta línea para imprimir la URL

  return (
    <div className="searchItem">
      <img src="https://res.cloudinary.com/alfibonacii/image/upload/v1703654050/upload/zsqzfkgyvsncqplnu0ta.jpg" 
      alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m del centro</span>
        <span className="siTaxiOp">Taxi gratuito desde el aeropuerto</span>
        <span className="siSubtitle">Estudio con aire acondicionado</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Cancelación gratuita </span>
        <span className="siCancelOpSubtitle">
          Puedes cancelar más tarde, ¡asegura este excelente precio hoy!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excelente</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Incluye impuestos y tarifas</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Ver disponibilidad</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
