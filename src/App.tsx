import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SeeAll from "./pages/SeeAll";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<SeeAll />} />
        <Route path={`/:id`} element={<Product />} />
        <Route path={`/all/:id`} element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
