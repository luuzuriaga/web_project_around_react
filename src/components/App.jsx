import { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";
import { useCurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";

export default function App() {
  const [popup, setPopup] = useState(null);
  const useUserContext = useCurrentUserContext();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    useUserContext.handleGetUser();
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log("Error al obtener las tarjetas:", error);
      });
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .like(card._id, !isLiked)
      .then((newCard) => {
        setCards(() =>
          cards.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleAddPlaceSubmit(newCardData) {
    try {
      const newCard = await api.createCard(newCardData);
      setCards((prevCards) => [newCard, ...prevCards]);
      setPopup();
    } catch (error) {
      console.error("Error al crear la tarjeta:", error);
    }
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        popup={popup}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        onAddPlaceSubmit={handleAddPlaceSubmit}
      />
      <Footer />
    </div>
  );
}
