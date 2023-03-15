import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SeeAll from "./pages/SeeAll";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all" element={<SeeAll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path={`/:id`} element={<Product />} />
          <Route path={`/all/:id`} element={<Product />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
