import React from 'react';

export default function RemoveCard({ onConfirm }) {
  return (
    <div className="popup__confirmation">
      {/* ELIMINA este h3 que causa la duplicación */}
      <div className="popup__confirmation-buttons">
        <button
          type="button"
          className="popup__button-confirm"
          onClick={onConfirm}
        >
          Sí
        </button>
      </div>
    </div>
  );
}