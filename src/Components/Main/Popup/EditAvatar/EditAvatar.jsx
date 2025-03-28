const EditAvatar = () => {
  return (
    <form id="formPerfilImage">
      <input
        required
        type="url"
        className="popup__input"
        placeholder="Enlace de la imagen"
        id="Enlace"
        name="link"
      />
      <span className="popup__error" id="Enlace-error"></span>
      <button className="popup__button-1" type="submit" disabled>
        si
      </button>
    </form>
  );
};

export default EditAvatar;
