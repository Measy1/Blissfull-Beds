import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from "./Components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './Components/Signin';
import NotFound from "./Components/NotFound";
import AddBeds from './Components/AddBeds';
import GetBeds from "./Components/GetBeds";
import Payment from "./Components/Payment";
import Carousel from "./Components/Carousel"
import BedCarousel from './Components/Carousel';
import Footer from './Components/Footer'
import Home from './Components/Home'
import logo from './Components/logo.png'

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <div class="col-md-12">
          <nav class="navbar navbar-expand-md navbar-light">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-3 w-auto" />
            </div>
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

                <Link to="/addBeds" className="links">
                  AddBeds
                </Link>
                <Link to="/getBeds" className="links">
                  GetBeds
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <h2 className="header">BLISSFUL BEDS</h2>
        </div>
        <header className="App-header">
          <h1>BLISSFUL BEDS ONLINE</h1>
        </header>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addbeds" element={<AddBeds />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/getbeds" element={<GetBeds />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
