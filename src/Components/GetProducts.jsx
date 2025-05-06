import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BedCarousel from "./Carousel";
import Footer from "./Footer";
import ChatBot from "./ChatBot";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [showToast, setShowToast] = useState(false); // NEW TOAST STATE
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
      setFilteredProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice search.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    setShowToast(true); // Show toast

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearch(transcript);
      const filtered = products.filter((product) =>
        product.product_name.toLowerCase().includes(transcript.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsListening(false);
      setTimeout(() => setShowToast(false), 1500); // Hide toast after 1.5s
    };

    recognition.onerror = (event) => {
      console.error("Voice recognition error:", event.error);
      setIsListening(false);
      setShowToast(false);
    };
  };

  return (
    <div>
      <BedCarousel /> <br />
      <div className="container-fluid row">
        <h1>Discover Comfort for Your Little One </h1>
        <br />

        {/* Search Bar with Inline Buttons */}
        <div className="search-bar mb-4 d-flex gap-2">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            className="form-control"
          />
          <button className="btn btn-primary" onClick={handleSearchClick}>
            Search
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleVoiceSearch}
            title="Use voice to search"
          >
            {isListening ? "🎙️" : "🎤"}
          </button>
        </div>

        {/* Toast Notification */}
        {showToast && <div style={toastStyle}>🎤 Listening… Speak now</div>}

        {/* Product List */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="col-md-3 mb-4 same-height-col" key={index}>
              <div className="card shadow p-3 same-height-card">
                <img
                  src={img_url + product.product_photo}
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="mt-2">{product.product_name}</h5>
                  <p className="text-muted">{product.product_description}</p>
                  <b className="text-warning">ksh.{product.product_cost}</b>
                  <br />
                  <button
                    className="button mt-4 w-90"
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
      <ChatBot />
    </div>
  );
};

// 🔥 Simple Toast Style
const toastStyle = {
  position: "fixed",
  top: "20px",
  right: "20px",
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  zIndex: 9999,
  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  animation: "fadein 0.5s ease-in-out",
};

export default GetProducts;
