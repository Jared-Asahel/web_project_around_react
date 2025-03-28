const EditProfile = () => {
  return (
    <form id="formEditPerfil">
      <input
        required
        type="text"
        className="popup__input"
        placeholder="Nombre"
        id="nombre"
        minlength="2"
        maxlength="40"
        name="Nombre"
      />
      <span className="popup__error" id="nombre-error"></span>
      <input
        required
        type="text"
        className="popup__input popup__margin-top"
        placeholder="Acerca de mi"
        id="acercaDeMi"
        minlength="2"
        maxlength="200"
        name="Acerca"
      />
      <span className="popup__error" id="acercaDeMi-error"></span>
      <button className="popup__button-1" id="guardar" type="submit" disabled>
        Guardar
      </button>
    </form>
  );
};

export default EditProfile;
