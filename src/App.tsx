import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import SeeAll from "./pages/SeeAll/SeeAll";
import { Routes, Route, Outlet } from "react-router-dom";
import Cart from "./pages/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import { Dane } from "./components/Dane";

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
            <Route path="/" element={<Dane />} />
            <Route path="/gaming-mice" element={<Dane text="mice" />} />
            <Route path="/gaming-audio" element={<Dane text="audio" />} />
            <Route
              path="/gaming-keyboards"
              element={<Dane text="keyboard" />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mice" element={<SeeAll type={"mice"} />} />
            <Route
              path="/accessories"
              element={<SeeAll type={"accessories"} />}
            />
            <Route path={`/mice/:id`} element={<Product />} />
            <Route path={`/accessories/:id`} element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
