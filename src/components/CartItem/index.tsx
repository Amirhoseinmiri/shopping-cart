import Button from "../Button/Button";

const CartItem = () => {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2 border-black">
      <img
        className="rounded w-32"
        src="https://img.freepik.com/premium-photo/squirrel-sitting-tree-branch_1048944-30371835.jpg?w=1060"
        alt="shopingCart Picture"
      />
      <div className="mr-4">
        <h3>عنوان محصول</h3>
        <div className="mt-2">
          <Button variant="danger" className="mx-2">
            Remove
          </Button>
          <Button variant="primary">+</Button>
          <span className="w-10 border-dotted p-3 bg-cyan-100 rounded mx-2">
            {2}
          </span>
          <Button variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
