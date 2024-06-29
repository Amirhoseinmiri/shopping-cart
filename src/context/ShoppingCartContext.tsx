import { ReactNode, createContext, useState } from "react";
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
}
export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export function ShoppingCartProvider({ children }: IShoppingCart) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartQTY,
        handleIncreaseQTY,
        handleDecreaseQTY,
        getProductQTY,
        handleDeleteProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
