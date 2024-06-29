import Button from "../components/Button/Button";
import { useShoppingCartContext } from "../hooks/useShoppingCartContext";

const Login = () => {
  const { handleLogin } = useShoppingCartContext();
  return (
    <div className="bg-slate-300 p-12 rounded">
      <input type="text" />
      <input type="password" />
      <Button onClick={handleLogin}>login</Button>
    </div>
  );
};

export default Login;
