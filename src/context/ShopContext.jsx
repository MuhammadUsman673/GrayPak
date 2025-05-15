// // // src/context/ShopContext.js
// // import { createContext, useState } from 'react';

// // export const ShopContext = createContext();

// // export const ShopProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState([]);
// //   const [favorites, setFavorites] = useState([]);
// //   const [cartPopupOpen, setCartPopupOpen] = useState(false);

// //   // Your existing cart functions (copy from Header.js)
// //   const addToCart = (product) => {
// //     setCartItems(prev => {
// //       const existingItem = prev.find(item => item.id === product.id);
// //       if (existingItem) {
// //         return prev.map(item =>
// //           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// //         );
// //       }
// //       return [...prev, { ...product, quantity: 1 }];
// //     });
// //   };

// //   return (
// //     <ShopContext.Provider
// //       value={{
// //         cartItems,
// //         setCartItems,
// //         favorites,
// //         setFavorites,
// //         cartPopupOpen,
// //         setCartPopupOpen,
// //         addToCart
// //       }}
// //     >
// //       {children}
// //     </ShopContext.Provider>
// //   );
// // };


















// import { createContext, useState } from 'react';

// export const ShopContext = createContext();

// export const ShopProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [cartPopupOpen, setCartPopupOpen] = useState(false);

//   const addToCart = (product) => {
//     setCartItems(prev => {
//       const existingItem = prev.find(item => item.id === product.id);
//       if (existingItem) {
//         return prev.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//     setCartPopupOpen(true); // Open popup when adding to cart
//   };

//   const addToFavorites = (product) => {
//     setFavorites(prev => {
//       if (prev.some(item => item.id === product.id)) {
//         return prev; // Prevent duplicates
//       }
//       return [...prev, product];
//     });
//   };

//   const removeFromFavorites = (id) => {
//     setFavorites(prev => prev.filter(item => item.id !== id));
//   };

//   return (
//     <ShopContext.Provider
//       value={{
//         cartItems,
//         setCartItems,
//         favorites,
//         setFavorites,
//         cartPopupOpen,
//         setCartPopupOpen,
//         addToCart,
//         addToFavorites,
//         removeFromFavorites
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };












// src/context/ShopContext.js
import { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartPopupOpen, setCartPopupOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null); // Added for signup modal

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartPopupOpen(true); // Open popup when adding to cart
  };

  const addToFavorites = (product) => {
    setFavorites(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev; // Prevent duplicates
      }
      return [...prev, product];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const toggleAuthModal = (modalType) => {
    console.log('Toggling auth modal to:', modalType); // Debug log
    setAuthModal(modalType);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        setCartItems,
        favorites,
        setFavorites,
        cartPopupOpen,
        setCartPopupOpen,
        addToCart,
        addToFavorites,
        removeFromFavorites,
        authModal, // Added
        toggleAuthModal // Added
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};