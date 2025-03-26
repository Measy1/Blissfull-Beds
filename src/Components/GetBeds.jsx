import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BedCarousel from "./Carousel";
import Footer from "./Footer";

const GetBeds = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); // Search state
  const [filteredProducts, setFilteredProducts] = useState([]);
  const img_url = "https://Measy1.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://Measy1.pythonanywhere.com/api/get_product_details"
      );
      setProducts(response.data.products);
      setFilteredProducts(response.data.products); // Initialize with all products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Trigger search when button is clicked
  const handleSearchClick = () => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <BedCarousel /> <br />
      <div className="container-fluid row">
        <h1>Explore Products</h1>
        <br />
        {/* Search Bar */}
        <div className="search-bar mb-4">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            className="form-control"
          />
          <button className="btn btn-primary mt-2" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        {/* Product List */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card shadow p-3">
                <img src={img_url + product.product_photo} alt="" />
                <div className="card-body">
                  <h5 className="mt-2">{product.product_name}</h5>
                  <p className="text-muted">{product.product_description}</p>
                  <b className="text-warning">ksh.{product.product_cost}</b> <br />
                  <button
                    className="btn btn-primary mt-2 w-100"
                    onClick={() => {
                      navigate("/payment", { state: { product } });
                    }}
                  >
                    Show details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GetBeds;
