import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import image1 from './images/house.png';
import image2 from './images/school.png';

function Main(props) {
  const [cards, setCards] = useState([]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [selectedImage, setSelectedImage] = useState(null);

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
    props.handleLogout();
  }
  
  

  function handleShowImage(index, type) {
    setSelectedButtonIndex(index);
    if (type === 'personal') {
      setSelectedImage(image1);
    } else if (type === 'school') {
      setSelectedImage(image2);
    }
  }

  function handleHideButtons() {
    setSelectedButtonIndex(-1);
    setSelectedImage(null);
  }

  return (
    <div className="Main">
      <h1>My List</h1>
      <button onClick={handleAddCard}>Add List</button>
      {cards.map((card, index) => (
        <div key={index} className="card">
          {(selectedButtonIndex !== index) && (
            <>
              <button onClick={() => handleShowImage(index, 'personal')}>Personal</button>
              <button onClick={() => handleShowImage(index, 'school')}>School</button>
            </>
          )}
          {(selectedButtonIndex === index && selectedImage !== null) && (
            <>
              <img src={selectedImage} alt="Selected Image" />
              <button onClick={handleHideButtons}>Back</button>
            </>
          )}
          <div className="card-buttons"></div>
          <textarea
            value={card}
            onChange={(event) => handleUpdateCard(index, event.target.value)}
          />
          <button onClick={() => handleDeleteCard(index)}>Delete Card</button>
        </div>
      ))}
                <button className="logout" onClick={handleLogout}>
                  <Link to="/">Logout </Link>
                </button>
    </div>
  );
}

export default Main;
