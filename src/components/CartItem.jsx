import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../redux/CartSlice.jsx";

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="page">
        <h2>Your Shopping Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/products" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Your Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} />
          <div className="item-info">
            <h4>{item.name}</h4>
            <p>Unit price: ${item.price.toFixed(2)}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            <div>
              <button
                className="btn btn-small"
                disabled={item.quantity === 1}
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
              >
                -
              </button>
              <span>Quantity: {item.quantity}</span>
              <button
                className="btn btn-small"
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
              >
                +
              </button>
            </div>
          </div>
          <button className="btn btn-danger" onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <strong>Total: ${totalAmount.toFixed(2)}</strong>
      </div>

      <div className="cart-actions">
        <Link to="/products" className="btn">Continue Shopping</Link>
        <button className="btn" onClick={() => alert("Coming Soon!")}>Checkout</button>
      </div>
    </div>
  );
}
