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
  handleIncreaseQTY: (id: number) => void;
}
export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export function ShoppingCartProvider({ children }: IShoppingCart) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleIncreaseQTY = (id: number) => {
    setCartItems((prev) => {
      const selectedProduct = prev.find((item) => item.id === id);
      if (selectedProduct == null) {
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
  return (
    <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseQTY }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
