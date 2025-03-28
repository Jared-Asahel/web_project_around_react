import perfil from "../../imagenes/image.jpg";
import buttonPerfil from "../../imagenes/Vector.svg";
import buttonAdd from "../../imagenes/VectorAddCard.png";
import Card from "../Card/Card";

const cards = [
  {
    isLiked: true,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

const Main = (props) => {
  const {
    onClickEditProfile,
    onClickEditAvatar,
    onClickAddCard,
    onClickCardImage,
  } = props;

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__image-content">
            <img
              src={perfil}
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
          <div className="profile__info">
            <div className="profile__info-2">
              <h2 className="profile__info-2 profile__name" id="name1">
                Jacques Cousteau
              </h2>
              <img
                src={buttonPerfil}
                alt="Boton cerrar popup"
                className="profile__button-2"
                id="openpopup"
                onClick={onClickEditProfile}
              />
            </div>
            <h3 className="profile__name-2" id="name2">
              Explorador
            </h3>
          </div>
        </div>
        <button className="profile__button">
          <img
            src={buttonAdd}
            alt="Vector del boton"
            className="profile__button-img"
            id="openPopupCards"
            onClick={onClickAddCard}
          />
        </button>
      </section>
      <section className="elements" id="elements">
        {/* Retorna automaticamente con los () */}
        {cards.map((card) => (
          <Card key={card._id} card={card} onClick={onClickCardImage} />
        ))}
      </section>
    </main>
  );
};

export default Main;
