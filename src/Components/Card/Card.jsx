import RemoveCard from "../../imagenes/RemoveCard.png";
import ImagePopup from "../ImagePopup/ImagePopup";

const Card = (props) => {
  const { card, onClick } = props;
  const { name, link, isLiked } = card;

  const popupImage = {
    title: "",
    children: <ImagePopup name={name} link={link} />,
  };

  return (
    <li className="elements__group">
      <img
        src={RemoveCard}
        alt=""
        className="elements__remove"
        id="buttonDelete"
      />
      <div>
        <img
          src={link}
          alt="Imagen de carta"
          className="elements__image"
          onClick={() => onClick(popupImage)}
        />
      </div>
      <div className="elements__rectangle">
        <h2 className="elements__paragraph">{name}</h2>
        <button
          className={`elements__heart ${isLiked && "elements__heart_active"}`}
        ></button>
      </div>
    </li>
  );
};

export default Card;
