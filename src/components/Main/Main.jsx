import pincelButton from "../../../images/Lapiz Editar.png";
import { useEffect } from "react";
import NewCard from "./Popup/NewCard/NewCard.jsx";
import EditAvatar from "./Popup/EditAvatar/EditAvatar.jsx";
import EditProfile from "./Popup/EditProfile/EditProfile.jsx";
import Popup from "./Popup/Popup.jsx";
import Card from "../../components/Cards/Cards.jsx";
import ImagePopup from "./Popup/ImagePopup/ImagePopup.jsx";
import { useCurrentUserContext } from "../../contexts/CurrentUserContext";


function Main(props) {
  const {
    onOpenPopup,
    onClosePopup,
    popup,
    cards,
    onCardLike,
    onCardDelete,
    onAddPlaceSubmit,
  } = props;

  const userContext = useCurrentUserContext();

  const newCardPopup = {
    title: "Nuevo lugar",
    Children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    Children: <EditAvatar onClose={onClosePopup} />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    Children: <EditProfile onClose={onClosePopup} />,
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-container">
            <img
              src={userContext?.currentUser?.avatar}
              alt="Foto Avatar"
              className="profile__avatar"
              id="profile-avatar"
            />
            <button
              className="profile__avatar-button"
              type="button"
              aria-label="Edit Avatar"
              onClick={() => onOpenPopup(editAvatarPopup)}
            >
              <img
                src={pincelButton}
                alt="Editar foto"
                className="profile__avatar-edit"
              />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__header">
              <h1 className="profile__header-title" id="profile-name">
                {userContext?.isLoadingUser
                  ? "Cargando..."
                  : userContext?.currentUser?.name}
              </h1>
              <button
                aria-label="Edit Profile"
                type="button"
                className="profile__header-button"
                onClick={() => onOpenPopup(editProfilePopup)}
              ></button>
            </div>
            <p className="profile__description" id="profile-description">
              {userContext?.isLoadingUser
                ? "Cargando..."
                : userContext?.currentUser?.about}
            </p>
          </div>
        </div>
        <div className="profile__button">
          <button
            aria-label="Add card"
            className="profile__button-add"
            type="button"
            onClick={() => onOpenPopup(newCardPopup)}
          >
            +
          </button>
        </div>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.card && (
            <ImagePopup card={popup.card} onClose={onClosePopup} />
          )}
          {popup.Children}
        </Popup>
      )}

      <section className="elements">
        <div className="elements__grid">
          {cards.map((cardElm) => {
            return (
              <Card
                key={cardElm._id}
                card={cardElm}
                handleOpenPopup={onOpenPopup}
                onCardLike={onCardLike}
                isLiked={cardElm?.isLiked}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
