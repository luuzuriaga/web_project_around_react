import { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";
import { useCurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";

export default function App() {
  const [popup, setPopup] = useState(null);
  const currentUserContext = useCurrentUserContext();
  const [cards, setCards] = useState([]);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await currentUserContext.handleGetUser();
        const cardsData = await api.getInitialCards();
        setCards(cardsData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    try {
      const newCard = await api.like(card._id, !isLiked);
      setCards(currentCards =>
        currentCards.map(currentCard =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.error("Error al dar like:", error);
    }
  }



  async function handleConfirmDelete() {
  if (!popup?.cardToDelete) return;
  
  try {
    await api.deleteCard(popup.cardToDelete._id);
    setCards(currentCards => 
      currentCards.filter(card => card._id !== popup.cardToDelete._id)
    );
    handleClosePopup();
  } catch (error) {
    console.error("Error al eliminar tarjeta:", error);
  }
  }

  async function handleAddPlaceSubmit(newCardData) {
    try {
      const newCard = await api.createCard(newCardData);
      setCards(prevCards => [newCard, ...prevCards]);
      handleClosePopup();
    } catch (error) {
      console.error("Error al crear tarjeta:", error);
    }
  }

  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  function handleClosePopup() {
    setPopup(null);
    setCardToDelete(null);
  }

  return (
    <div className="page">
      <Header />
      
      {!isLoading && (
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleConfirmDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
      )}
      
      <Footer />
    </div>
  );
}