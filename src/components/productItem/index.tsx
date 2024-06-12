import { ProductType } from "../../types/servers";

type TProductItem = ProductType;
const ProductItem = ({ description, image, price, title }: TProductItem) => {
  return (
    <div className="shadow border rounded pb-3">
      <img className="rounded w-48" src={image} alt="" />
      <div className="flex justify-between flex-row-reverse p-4 ">
        <h3>{title}</h3>
        <span>{price}$</span>
      </div>
      <div className="px-4">
        <p className="line-clamp-2 text-right">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
