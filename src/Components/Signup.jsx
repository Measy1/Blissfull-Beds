import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);

      const response = await axios.post(
        "https://Measy1.pythonanywhere.com/api/signup",
        formData
      );

      setLoading("");
      setSuccess(response.data.success);

      // Redirect to "/getbeds" after successful signup
      setTimeout(() => {
        navigate("/getbeds");
      }, 2000); // Small delay to show success message
    } catch (error) {
      setError(error.message);
      setLoading("");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Signup Form</h1>
        {loading}
        {success && <p className="text-success">{success}</p>}{" "}
        {/* Show success message */}
        {error && <p className="text-danger">{error}</p>}{" "}
        {/* Show error message */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="tel"
            placeholder="Enter phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button type="submit" className="button">
            Signup
          </button>
          <p>
            Already have an account? <Link to="/signin">Signin</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
