import ProductItem from "../components/productItem";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدید ترین محصولات</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Link to={`/product/${1}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${2}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${2}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${3}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${4}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${5}`}>
            <ProductItem />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Store;
