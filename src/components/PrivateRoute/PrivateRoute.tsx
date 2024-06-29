import { Navigate, Outlet } from "react-router-dom";
import { useShoppingCartContext } from "../../hooks/useShoppingCartContext";

const PrivateRoute = () => {
  const { isLogin } = useShoppingCartContext();

  return <div>{isLogin ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default PrivateRoute;
