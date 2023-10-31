"use client"
import React, { createContext, useContext, useState } from 'react';
// import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
  let index; 

  // const onAdd = (product, quantity) => {
  //   const checkProductInCart = cartItems.find((item) => (item._id === product._id && item.name === product.name));
    
  //   setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
  //   setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
  //   if(checkProductInCart) {
  //     const updatedCartItems = cartItems.map((cartProduct) => {
  //       if(cartProduct._id === product._id && cartProduct.name === product.name) return {
  //         ...cartProduct,
  //         quantity: cartProduct.quantity + quantity
  //       }
  //     })

  //     setCartItems(updatedCartItems);
  //   } else {
  //     product.quantity = quantity;
      
  //     setCartItems([...cartItems, { ...product }]);
  //   }

  // }
  
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id && item.name === product.name);
  
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id && cartProduct.name === product.name) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          };
        }
        return cartProduct; // Return unchanged items
      });
  
      setCartItems(updatedCartItems);
    } else {
      const updatedProduct = { ...product, quantity };
      setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
    }
  };

  // const onRemove = (product) => {
  //   foundProduct = cartItems.find((item) => (item._id === product._id && item.name === product.name));
  //   const newCartItems = cartItems.filter((item) => (item._id != product._id && item.name != product.name));

  //   setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
  //   setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
  //   setCartItems(newCartItems);
  // }
  const onRemove = (product) => {
    const foundProductIndex = cartItems.findIndex((item) => item._id === product._id && item.name === product.name);
  
    if (foundProductIndex !== -1) {
      const foundProduct = cartItems[foundProductIndex];
      const newCartItems = cartItems.filter((item, index) => index !== foundProductIndex);
  
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
      setCartItems(newCartItems);
    }
  };

  // const toggleCartItemQuanitity = (id, name, value) => {
  //   foundProduct = cartItems.find((item) => (item._id === id && item.name === name))
  //   index = cartItems.findIndex((product) => (product._id === id && product.name === name));
  //   const newCartItems = cartItems.filter((item) => (item._id !== id && item.name === name))

  //   if(value === 'inc') {
  //     setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
  //     setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
  //     setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
  //   } else if(value === 'dec') {
  //     if (foundProduct.quantity > 1) {
  //       setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
  //       setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
  //       setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
  //     }
  //   }
  // }

  const toggleCartItemQuanitity = (id, name, value) => {
    const foundProductIndex = cartItems.findIndex((item) => item._id === id && item.name === name);
  
    if (foundProductIndex !== -1) {
      const foundProduct = cartItems[foundProductIndex];
      const newCartItems = [...cartItems];
  
      if (value === 'inc') {
        newCartItems[foundProductIndex] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
          newCartItems[foundProductIndex] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
          setCartItems(newCartItems);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        }
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);