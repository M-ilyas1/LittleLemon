import { createContext, useState } from "react";

export const AddCardContext = createContext();

const AddCradProvider = ({ children }) => {

  const [addCard, setAddCard] = useState([]);

  const addToCard = (item) => {
    const itemExists = addCard.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      alert("Item is already in the cart");
    } else {
      setAddCard([...addCard, { ...item, quantity: 1 }]);
    }
  };

  const removeCard = (foodItem) => {
    setAddCard(addCard.filter(item => item !== foodItem));
  };

  const increaseQuantity = (foodItem) => {
    setAddCard(
        addCard.map(item =>
        item === foodItem ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decreaseQuantity = (foodItem) => {
    setAddCard(
        addCard.map(item =>
        item === foodItem && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    );
  };

  return (
    <AddCardContext.Provider value={{ addToCard, addCard, removeCard, increaseQuantity, decreaseQuantity }}>
      {children}
    </AddCardContext.Provider>
  );
};

export default AddCradProvider;
