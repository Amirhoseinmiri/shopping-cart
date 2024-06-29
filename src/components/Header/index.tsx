import { Link } from "react-router-dom";
import Container from "../Container";
import shoppingCart from "../../assets/shopping-cart-empty-2.svg";
import { useShoppingCartContext } from "../../hooks/useShoppingCartContext";
import Button from "../Button/Button";

const Header = () => {
  const { cartQTY, handleLogout } = useShoppingCartContext();
  return (
    <div className="h-8 border-b shadow flex items-center">
      <Container>
        <div className="flex justify-between flex-row-reverse ">
          <ul className="flex flex-row-reverse gap-2">
            <li>
              <Link to={"/"}>خانه</Link>
            </li>
            <li>
              <Link to={"/store"}>فروشگاه</Link>
            </li>
          </ul>
          <div className="relative">
            <Button onClick={handleLogout}>logout</Button>
            <Link to={"/cart"}>
              <div>
                <img src={shoppingCart} width={20} />
              </div>
              <span className="absolute w-5 h-5 bg-yellow-600 rounded-full flex justify-center items-center text-white top-0 -right-5 ">
                {cartQTY !== 0 ? cartQTY : null}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
