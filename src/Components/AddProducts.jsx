import axios from "axios";
import React, { useState } from "react";


const AddProducts = () => {
  const [product_name, setproductName] = useState("");
  const [product_description, setproductDescription] = useState("");
  const [product_cost, setproductCost] = useState("");
  const [product_photo, setproductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("connecting...");
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      const response = await axios.post(
        "https://Measy1.pythonanywhere.com/api/add_product",
        formData
      );
      if (response.data.message) {
        setLoading("");
        setSuccess(response.data.message);
        setproductName("");
        setproductDescription("");
        setproductCost("");
        setproductPhoto("");
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
      setSuccess(error.message);
    }
  };

  return (
    <div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-2">
          <h1>Add Products</h1>
          {loading}
          {success}
          {error}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder=" Enter product name"
              className="form-control"
              value={product_name}
              onChange={(e) => {
                setproductName(e.target.value);
              }}
            />{" "}
            <br />
            <textarea
              placeholder="Product description"
              className="form-control"
              value={product_description}
              onChange={(e) => {
                setproductDescription(e.target.value);
              }}
            ></textarea>{" "}
            <br />
            <input
              type="number"
              placeholder=" Enter product cost"
              className="form-control"
              value={product_cost}
              onChange={(e) => {
                setproductCost(e.target.value);
              }}
            />{" "}
            <br />
            <input
              type="file"
              placeholder="Choose file"
              className="form-control"
              onChange={(e) => {
                setproductPhoto(e.target.files[0]);
              }}
            />{" "}
            <br />
            <button type="submit" className="button">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
