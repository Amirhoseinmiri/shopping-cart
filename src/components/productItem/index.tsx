const ProductItem = () => {
  return (
    <div className="shadow border rounded pb-3">
      <img
        className="rounded"
        src="https://img.freepik.com/premium-photo/squirrel-sitting-tree-branch_1048944-30371835.jpg?w=1060"
        alt=""
      />
      <div className="flex justify-between flex-row-reverse p-4 ">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>
      <div className="px-4">
        <p className="line-clamp-2 text-right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          laborum voluptates nulla asperiores nihil labore, consectetur
          inventore. Doloremque reiciendis modi alias cumque necessitatibus,
          nobis quae ipsa delectus possimus voluptas recusandae.
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
