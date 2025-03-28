const NewCard = () => {
  return (
    <form id="formCard">
      <input
        required
        type="text"
        className="popup__input"
        placeholder="Titulo"
        id="Titulo"
        minlength="2"
        maxlength="30"
        name="title"
      />
      <span className="popup__error" id="Titulo-error"></span>
      <input
        required
        type="url"
        className="popup__input popup__margin-top"
        placeholder="Enlace de la imagen"
        id="Enlace"
        name="link"
      />
      <span className="popup__error" id="Enlace-error"></span>
      <button className="popup__button-1" id="guardar2" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default NewCard;
