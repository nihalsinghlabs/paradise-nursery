import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="navbar">
      <Link to="/" className="brand">Paradise Nursery</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart" className="cart-icon">🛒 Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}
