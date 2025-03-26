import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "./error.avif";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>The url you entered was not found</h1>
      <p>sorry the page you're looking for is not here</p>
      <img src={notFound} alt="404 notFound" className="error-image" />
      <button
        onClick={() => {
          navigate("/");
        }}
        className="button"
      >
        Return Home
      </button>
    </div>
  );
};
export default NotFound;
