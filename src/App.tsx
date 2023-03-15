import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SeeAll from "./pages/SeeAll";
import { Routes, Route, Outlet } from "react-router-dom";
import Cart from "./pages/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/all" element={<SeeAll />} />
            <Route path={`/:id`} element={<Product />} />
            <Route path={`/all/:id`} element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
