import ProductItem from "../components/productItem";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { ProductType } from "../types/servers";

const Store = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدید ترین محصولات</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {products?.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductItem {...product} />
            </Link>
          ))}

          {/* <Link to={`/product/${2}`}>
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
          </Link> */}
        </div>
      </Container>
    </div>
  );
};

export default Store;
