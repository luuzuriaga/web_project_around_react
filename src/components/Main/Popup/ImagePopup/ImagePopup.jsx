import React from "react";
// import Popup from "../Popup";

export default function ImagePopup({ card, onClose }) {
  return (
    <div className="popup" onClose={onClose}>
      <div className="popup__modal">
        <img src={card.link} alt={card.name} className="popup__modal-content" />
        <p className="popup__modal-description">{card.name}</p>;
      </div>
    </div>
  );
}
