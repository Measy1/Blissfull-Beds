import { Link } from "react-router-dom";
import BedCarousel from "./Carousel";
const Home = () => {
  return (
    <div>
        <BedCarousel/>
      <div className="home-container">
        <div className="content-wrapper">
          {/* Information Section */}
          <section className="info-section">
            <h2>Why Choose Our Beds?</h2>
            <p>
              At Blissful Beds, we prioritize **comfort, durability, and style**
              in our bed collection. Our beds are designed with **premium
              materials**, ensuring a restful and rejuvenating sleep.
            </p>
            <ul>
              <li>🛏️ **Luxury & Affordable Beds**</li>
              <li>💤 **High-Quality Mattresses for Ultimate Comfort**</li>
              <li>🌿 **Eco-Friendly & Sustainable Materials**</li>
              <li>🚚 **Fast & Free Delivery Available**</li>
            </ul>
          </section>
          <Link to="/signup" className="button">EXPLORE PRODUCTS</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
