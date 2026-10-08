import { Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import AboutUs from "./AboutUs.jsx";

function Landing() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Bring a little paradise home with our healthy houseplants.</p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className={location.pathname === "/" ? "app landing-page" : "app"}>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
