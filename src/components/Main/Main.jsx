// Importación de imágenes y componentes
import buttonPerfil from "../../imagenes/Vector.svg";
import buttonAdd from "../../imagenes/VectorAddCard.png";
import Card from "./components/Card/Card";
import { useContext } from "react";

// Importación del contexto del usuario
import CurrentUserContext from "../../contexts/CurrentUserContext";

// Componente Main que muestra el perfil y las tarjetas
const Main = (props) => {
  // Obtener la información del usuario desde el contexto
  const { currentUser } = useContext(CurrentUserContext);

  // Desestructuración de las props recibidas
  const {
    onClickEditProfile,
    onClickEditAvatar,
    onClickAddCard,
    onClickCardImage,
    cards,
    onCardLike,
    onCardDelete,
  } = props;

  return (
    <main className="content">
      {/* Sección del perfil */}
      <section className="profile">
        <div className="profile__content">
          {/* Imagen de perfil y botón para editar avatar */}
          <div className="profile__image-content">
            <img
              src={currentUser.avatar}
              alt="Foto de perfil"
              className="profile__image"
              id="perfilImage"
            />
            <img
              src={buttonPerfil}
              onClick={onClickEditAvatar}
              alt=""
              className="profile__image-pencil"
            />
          </div>

          {/* Información del perfil */}
          <div className="profile__info">
            <div className="profile__info-2">
              {/* Nombre del usuario */}
              <h2 className="profile__info-2 profile__name" id="name1">
                {currentUser.name}
              </h2>

              {/* Botón para editar perfil */}
              <img
                src={buttonPerfil}
                alt="Boton cerrar popup"
                className="profile__button-2"
                id="openpopup"
                onClick={onClickEditProfile}
              />
            </div>

            {/* Descripción (about) del usuario */}
            <h3 className="profile__name-2" id="name2">
              {currentUser.about}
            </h3>
          </div>
        </div>

        {/* Botón para añadir nueva tarjeta */}
        <button className="profile__button" onClick={onClickAddCard}>
          <img
            src={buttonAdd}
            alt="Vector del boton"
            className="profile__button-img"
            id="openPopupCards"
          />
        </button>
      </section>

      {/* Sección de tarjetas */}
      <section className="elements" id="elements">
        {/* Renderizar las tarjetas usando map */}
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onClick={onClickCardImage}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
