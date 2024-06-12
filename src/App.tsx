import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Layout>
  );
}

export default App;
