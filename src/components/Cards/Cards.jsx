import deleteButton from "../../../images/Trash.png";
import React from "react";

export default function Card(props) {
  const { handleOpenPopup, card, isLiked, onCardLike, onCardDelete } = props;

  const imageComponent = {
    title: card.name,
    card: {
      name: card.name,
      link: card.link,
    },
  };

  const cardLikeButtonClassName = `button__like ${
    isLiked ? "button__like_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <div className="elements__group">
      <div className="elements__card">
        <button
          className="elements__button-delete"
          type="button"
          aria-label="Delete card"
          onClick={handleCardDelete}
        >
          <img
            className="button__delete"
            src={deleteButton}
            alt="Botón Eliminar"
          />
        </button>
      </div>
      <img
        src={card.link}
        alt={card.name}
        className="elements__photo"
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <div className="elements__footer">
        <p className="elements__footer-name">{card.name}</p>
        <button
          className={cardLikeButtonClassName}
          aria-label="Like card"
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
    </div>
  );
}
