import { useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { ProductType } from "../types/servers";
import { useShoppingCartContext } from "../hooks/useShoppingCartContext";

const Product = () => {
  const param = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType>();
  const { handleIncreaseQTY, cartItems } = useShoppingCartContext();

  useEffect(() => {
    getProduct(param.id as string).then((res) => {
      setProduct(res);
    });
  }, []);
  console.log(cartItems);
  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className=" col-span-10 p-4">
            <h1 className="text-right">{product?.title}</h1>
            <div>
              <p className="text-right">قیمت: {product?.price}$</p>
              <p className="text-right">{product?.description}</p>
            </div>
          </div>
          <div className=" col-span-2 p-4 bg-sky-200 rounded">
            <img
              className="rounded"
              src={product?.image as string}
              alt="product image"
              width={300}
            />
            <div>
              <Button
                onClick={() => handleIncreaseQTY(parseInt(param.id as string))}
                className="mt-2 w-full"
                variant="primary"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
