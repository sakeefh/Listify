import React, { useState } from 'react';
import './main.css';

function Main(props) {
  const [cards, setCards] = useState([]);

  function handleAddCard() {
    setCards([...cards, '']);
  }

  function handleDeleteCard(index) {
    setCards(cards.filter((_, i) => i !== index));
  }

  function handleUpdateCard(index, text) {
    const updatedCards = [...cards];
    updatedCards[index] = text;
    setCards(updatedCards);
  }

  function handleLogout() {
    props.onLogout();
  }

  return (
    <div className="Main">
      <h1>My Cards</h1>
      <button onClick={handleAddCard}>Add Card</button>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <textarea
            value={card}
            onChange={(event) => handleUpdateCard(index, event.target.value)}
          />
          <button onClick={() => handleDeleteCard(index)}>Delete Card</button>
        </div>
      ))}
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Main;
