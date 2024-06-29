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
  const {
    getProductQTY,
    handleDeleteProduct,
    handleDecreaseQTY,
    handleIncreaseQTY,
    cartItems,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(param.id as string).then((res) => {
      setProduct(res);
    });
  }, [param.id]);
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
            {getProductQTY(parseInt(param.id as string)) === 0 ? (
              <Button
                className="mt-2 w-full"
                variant="primary"
                onClick={() => handleIncreaseQTY(parseInt(param.id as string))}
              >
                Add to Cart
              </Button>
            ) : (
              <>
                <div className="flex gap4">
                  <Button
                    className="mt-2 w-full"
                    variant="primary"
                    onClick={() =>
                      handleIncreaseQTY(parseInt(param.id as string))
                    }
                  >
                    +
                  </Button>
                  <span className="flex justify-center items-center p-2 border border-dotted m-2 border-black">
                    {getProductQTY(parseInt(param.id as string))}
                  </span>
                  <Button
                    className="mt-2 w-full"
                    variant="primary"
                    onClick={() =>
                      handleDecreaseQTY(parseInt(param.id as string))
                    }
                  >
                    -
                  </Button>
                </div>
                <Button
                  className="mt-2 w-full !py-3"
                  variant="danger"
                  onClick={() =>
                    handleDeleteProduct(parseInt(param.id as string))
                  }
                >
                  حذف
                </Button>
              </>
            )}
            {/* <div>
              <Button
              className="mt-2 w-full"
              variant="primary"
              onClick={() => handleIncreaseQTY(parseInt(param.id as string))}
              >
              Add to Cart
              </Button>
              <span>{getProductQTY(parseInt(param.id as string))}</span>
              <Button
              className="mt-2 w-full"
              variant="primary"
              onClick={() => handleDecreaseQTY(parseInt(param.id as string))}
              >
              -
              </Button>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
