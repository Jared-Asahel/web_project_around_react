import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Main/Popup/Popup";
import NewCard from "./Components/Main/Popup/NewCard/NewCard";
import EditProfile from "./Components/Main/Popup/EditProfile/EditProfile";
import { Children, useState } from "react";
import EditAvatar from "./Components/Main/Popup/EditAvatar/EditAvatar";

function App() {
  const [popup, setPopup] = useState(null);

  const popupEditAvatar = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  const popupEditPerfil = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  const popupAddCard = {
    title: "Nuevo Lugar",
    children: <NewCard />,
  };

  return (
    <div className="page">
      <Header />
      <Main
        onClickEditProfile={() => setPopup(popupEditPerfil)}
        onClickEditAvatar={() => setPopup(popupEditAvatar)}
        onClickAddCard={() => setPopup(popupAddCard)}
        onClickCardImage={(popupImage) => setPopup(popupImage)}
      />
      <Footer />
      {popup && (
        <Popup onClose={() => setPopup(null)} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </div>
  );
}

export default App;
