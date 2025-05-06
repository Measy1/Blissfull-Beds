import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./Components/Signin";
import NotFound from "./Components/NotFound";
import AddProducts from "./Components/AddProducts";
import GetProducts from "./Components/GetProducts";
import Payment from "./Components/Payment";
import Carousel from "./Components/Carousel"
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ChatBot from "./Components/ChatBot";

// import logo from './Components/logo.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header header">
          <h1>SAFENEST KIDS</h1>
        </header>
        <div class="col-md-12">
          <nav class="navbar navbar-expand-md navbar-light">
            {/* <div className="flex items-center">
              <img src={} alt="Logo" className="h-3 w-auto" />
            </div> */}
            <button
              class="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarcollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarcollapse">
              <div class="navbar-nav">
                <Link to="/signup" className="links">
                  Signup
                </Link>
                <Link to="/signin" className="links">
                  Signin
                </Link>

                <Link to="/addproducts" className="links">
                  AddProduct
                </Link>
                <Link to="/getproducts" className="links">
                  GetProducts
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <h2 className="header"></h2>
        </div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/getproducts" element={<GetProducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<ChatBot/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
