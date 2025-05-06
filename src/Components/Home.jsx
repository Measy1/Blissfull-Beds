import { Link } from "react-router-dom";
import BedCarousel from "./Carousel";
const Home = () => {
  return (
    <div>
      <BedCarousel />
      <div className="home-container">
        <div className="content-wrapper">
          {/* Information Section */}
          <section className="info-section">
            <h2>Why Choose Our Products?</h2>
            <p>
              {" "}
              Child-Safe Materials: All our products are made with non-toxic,
              certified-safe materials to ensure your child’s health and safety.
              ✔️ Age-Appropriate Variety: Whether it’s for newborns, toddlers,
              or growing kids, we offer a wide range of thoughtfully curated
              items. ✔️ Affordable Quality: We believe safety and style should
              be accessible—our pricing is family-friendly without compromising
              on quality. ✔️ Parent-Focused Support: Our team is here to guide
              and support you in choosing the best for your child, every step of
              the way.
            </p>
          </section>
          <Link to="/signup" className="button">
            Browse Baby Favorites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
