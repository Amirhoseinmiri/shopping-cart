import Button from "../components/Button/Button";
import CartItem from "../components/CartItem";
import Container from "../components/Container";
// import { useShoppingCartContext } from "../hooks/useShoppingCartContext";

const ShoppingCart = () => {
  //   const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div className="">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="bg-gray-200 rounded p-6">
          <p className="text-right">قیمت کل: 2000</p>
          <p className="text-right">تخفیف شما: 200</p>
          <p className="text-right">قیمت نهایی: 800</p>
        </div>
        <Button className="mt-2" variant="success">
          ثبت سفارش
        </Button>
      </Container>
    </div>
  );
};

export default ShoppingCart;
