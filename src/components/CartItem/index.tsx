import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { getProduct } from "../../services/api";
import { ProductType } from "../../types/servers";
import { useShoppingCartContext } from "../../hooks/useShoppingCartContext";
import { Link } from "react-router-dom";
interface ICartItem {
  id: number;
  qty: number;
}
const CartItem = ({ id, qty }: ICartItem) => {
  const { handleDecreaseQTY, handleDeleteProduct, handleIncreaseQTY } =
    useShoppingCartContext();
  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, [id]);
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2 border-black">
      <Link to={`/product/${id}`}>
        <img
          className="rounded w-32"
          src={product?.image}
          alt="shopingCart Picture"
        />
      </Link>
      <div className="mr-4">
        <h3>{product?.title}</h3>
        <div className="mt-2">
          <Button
            variant="danger"
            onClick={() => handleDeleteProduct(id)}
            className="mx-2"
          >
            Remove
          </Button>
          <Button variant="primary" onClick={() => handleIncreaseQTY(id)}>
            +
          </Button>
          <span className="w-10 border-dotted p-3 bg-cyan-100 rounded mx-2">
            {qty}
          </span>
          <Button variant="primary" onClick={() => handleDecreaseQTY(id)}>
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
