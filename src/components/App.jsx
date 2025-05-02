// Importación de componentes principales
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Popup from "./Main/Popup";
import NewCard from "./Main/Popup/NewCard/NewCard";
import EditProfile from "./Main/Popup/EditProfile/EditProfile";
import EditAvatar from "./Main/Popup/EditAvatar/EditAvatar";

// Importación de hooks y utilidades
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  // Estado para manejar el popup activo
  const [popup, setPopup] = useState(null);

  // Función para cerrar cualquier popup
  const closePopup = () => setPopup(null);

  // Estado para guardar la información del usuario
  const [currentUser, setCurrentUser] = useState({});

  // Estado para guardar las tarjetas
  const [cards, setCards] = useState([]);

  // Configuración del popup para editar avatar
  const popupEditAvatar = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onClose={closePopup} />,
  };

  // Configuración del popup para editar perfil
  const popupEditPerfil = {
    title: "Editar Perfil",
    children: <EditProfile onClose={closePopup} />,
  };

  // Configuración del popup para añadir una nueva tarjeta
  const popupAddCard = {
    title: "Nuevo Lugar",
    children: <NewCard onClose={closePopup} onAddCard={handleAddCard} />,
  };

  // useEffect para obtener la información del usuario al cargar la app
  useEffect(() => {
    api
      .getUserInformation()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.error("Error al obtener la información del usuario:", err);
      });
  }, []);

  // useEffect para obtener las tarjetas iniciales al cargar la app
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.error("Error al cargar las tarjetas:", err);
      });
  }, []);

  // Función para actualizar la información del usuario
  const handleUpdateUser = (data) => {
    api
      .updateUserInformation(data)
      .then((newData) => {
        setCurrentUser(newData);
        closePopup();
      })
      .catch((err) => console.error(err));
  };

  // Función para actualizar el avatar del usuario
  const handleUpdateAvatar = (data) => {
    api
      .updateUserImage(data)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .catch((err) => console.error(err));
  };

  // Función para dar o quitar like a una tarjeta
  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .likeCard(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  // Función para eliminar una tarjeta
  async function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error("Error al eliminar la tarjeta:", error));
  }

  // Función para añadir una nueva tarjeta
  function handleAddCard(data) {
    api
      .createCard(data)
      .then((newData) => {
        setCards([newData, ...cards]);
        closePopup();
      })
      .catch((err) => console.error(err));
  }

  return (
    // Proveedor de contexto para compartir el usuario y funciones en toda la app
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        {/* Encabezado */}
        <Header />

        {/* Componente principal */}
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onClickEditProfile={() => setPopup(popupEditPerfil)}
          onClickEditAvatar={() => setPopup(popupEditAvatar)}
          onClickAddCard={() => setPopup(popupAddCard)}
          onClickCardImage={(popupImage) => setPopup(popupImage)}
        />

        {/* Pie de página */}
        <Footer />

        {/* Popup dinámico */}
        {popup && (
          <Popup onClose={() => setPopup(null)} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
