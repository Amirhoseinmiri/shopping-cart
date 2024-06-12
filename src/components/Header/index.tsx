import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button/Button";

const Header = () => {
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
          <div>
            <Link to={"/cart"}>
              <Button variant="primary">سبد خرید</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
