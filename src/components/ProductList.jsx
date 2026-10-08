import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice.jsx";

const makeImage = (name) =>
  `https://placehold.co/300x200/e8f5e9/2e7d32?text=${encodeURIComponent(name)}`;

const plants = [
  // Low Light
  { id: "snake-plant", name: "Snake Plant", price: 18, category: "Low Light" },
  { id: "zz-plant", name: "ZZ Plant", price: 22, category: "Low Light" },
  { id: "pothos", name: "Pothos", price: 12, category: "Low Light" },
  { id: "cast-iron-plant", name: "Cast Iron Plant", price: 25, category: "Low Light" },
  { id: "peace-lily", name: "Peace Lily", price: 20, category: "Low Light" },
  { id: "parlor-palm", name: "Parlor Palm", price: 28, category: "Low Light" },
  // Pet Friendly
  { id: "spider-plant", name: "Spider Plant", price: 10, category: "Pet Friendly" },
  { id: "boston-fern", name: "Boston Fern", price: 16, category: "Pet Friendly" },
  { id: "calathea", name: "Calathea", price: 24, category: "Pet Friendly" },
  { id: "haworthia", name: "Haworthia", price: 14, category: "Pet Friendly" },
  { id: "prayer-plant", name: "Prayer Plant", price: 19, category: "Pet Friendly" },
  { id: "birds-nest-fern", name: "Bird's Nest Fern", price: 17, category: "Pet Friendly" },
  // Flowering
  { id: "african-violet", name: "African Violet", price: 13, category: "Flowering" },
  { id: "anthurium", name: "Anthurium", price: 30, category: "Flowering" },
  { id: "orchid", name: "Orchid", price: 35, category: "Flowering" },
  { id: "kalanchoe", name: "Kalanchoe", price: 11, category: "Flowering" },
  { id: "begonia", name: "Begonia", price: 15, category: "Flowering" },
  { id: "christmas-cactus", name: "Christmas Cactus", price: 21, category: "Flowering" },
];

const categories = ["Low Light", "Pet Friendly", "Flowering"];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="page">
      <h2>Our Houseplants</h2>
      {categories.map((category) => (
        <section key={category} className="category">
          <h3>{category}</h3>
          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const inCart = cartItems.some((item) => item.id === plant.id);
                return (
                  <div key={plant.id} className="product-card">
                    <img src={makeImage(plant.name)} alt={plant.name} />
                    <h4>{plant.name}</h4>
                    <p>${plant.price.toFixed(2)}</p>
                    <button
                      className="btn"
                      disabled={inCart}
                      onClick={() =>
                        dispatch(
                          addItem({
                            id: plant.id,
                            name: plant.name,
                            price: plant.price,
                            thumbnail: makeImage(plant.name),
                          })
                        )
                      }
                    >
                      {inCart ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}
