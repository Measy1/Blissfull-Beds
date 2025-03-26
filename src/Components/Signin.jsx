import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://Measy1.pythonanywhere.com/api/signin",
        formData
      );

      if (response.data.user) {
        setLoading("");
        setSuccess(response.data.message);

        // Redirect to "/getbeds" after successful sign-in
        setTimeout(() => {
          navigate("/getbeds");
        }, 2000); // Small delay to show success message
      } else {
        setSuccess(response.data.message);
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Signin Form</h1>
        {loading}
        {success && <p className="text-success">{success}</p>}{" "}
        {/* Show success message */}
        {error && <p className="text-danger">{error}</p>}{" "}
        {/* Show error message */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="button">
            Signin
          </button>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
