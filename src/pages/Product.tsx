// import { useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import Container from "../components/Container";

const Product = () => {
  //   const { id } = useParams();
  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className=" col-span-10 p-4">
            <h1 className="text-right">عنوان محصول</h1>
            <div>
              <p className="text-right">قیمت: 25$</p>
              <p className="text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore ea consectetur est, magni beatae quaerat vitae ex
                impedit quod eaque voluptatem dicta reiciendis molestiae maiores
                distinctio ducimus fugit. Optio, illo?
              </p>
            </div>
          </div>
          <div className=" col-span-2 p-4 bg-sky-200 rounded">
            <img
              className="rounded"
              src="https://img.freepik.com/premium-photo/squirrel-sitting-tree-branch_1048944-30371835.jpg?w=1060"
              alt=""
            />
            <div>
              <Button className="mt-2 w-full" variant="primary">
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
