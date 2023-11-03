"use client"
import React, { createContext, useContext, useState } from 'react';
import { sendContactForm } from '../api/send';
// import { toast } from 'react-hot-toast';
import getStripe from '../lib/getStripe';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
  let index; 

  const [formValues, setFormValues] = useState({
    recipientName: '',
    idNumber: '',
    specificAddress: '',
    countryRegion: '(US) United States',
    provinceState: '',
    city: '',
    postalCode: '',
    recipientMobile: '',
    recipientMailbox: '',
    subject: "New Order Details",
    email: '',
    privacyPolicyChecked: false,
    returnPolicyChecked: false,
  });

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

  const updateFormValue = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({
      recipientName: '',
      idNumber: '',
      specificAddress: '',
      countryRegion: '',
      provinceState: '',
      city: '',
      postalCode: '',
      recipientMobile: '',
      recipientMailbox: '',
      subject: "New Order Details",
      email: '',
      privacyPolicyChecked: false,
      returnPolicyChecked: false,
    });
  };
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    // toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  const handleSubmit = () => {
    // Perform form submission or further processing here using formValues
    // console.log('Form submitted:', formValues);
    handleCheckout()
    // await sendContactForm(data)
    // resetForm();
  };

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
        setTotalQuantities,
        formValues,
        updateFormValue, 
        handleSubmit,
        resetForm 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);