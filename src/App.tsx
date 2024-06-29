import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login";

function App() {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </Layout>
    </ShoppingCartProvider>
  );
}

export default App;
