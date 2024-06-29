import { ReactNode, createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
interface IShoppingCart {
  children: ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
}

interface IShoppingCartContext {
  cartItems: CartItem[];
  cartQTY: number;
  handleIncreaseQTY: (id: number) => void;
  handleDecreaseQTY: (id: number) => void;
  getProductQTY: (id: number) => number;
  handleDeleteProduct: (id: number) => void;
  isLogin: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}
export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export function ShoppingCartProvider({ children }: IShoppingCart) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cartItems",
    []
  );

  const handleIncreaseQTY = (id: number) => {
    setCartItems((prev) => {
      const selectedProduct = prev.find((item) => item.id === id);
      console.log(selectedProduct);
      if (!selectedProduct) {
        return [...prev, { id, qty: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseQTY = (id: number) => {
    setCartItems((prev) => {
      const selectedProduct = prev.find((item) => item.id === id);
      if (selectedProduct?.qty === 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQTY = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };
  const handleDeleteProduct = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const cartQTY = cartItems.reduce((totalQTY, item) => totalQTY + item.qty, 0);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartQTY,
        handleIncreaseQTY,
        isLogin,
        handleLogin,
        handleDecreaseQTY,
        getProductQTY,
        handleLogout,
        handleDeleteProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
