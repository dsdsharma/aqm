import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
// import Industries from "./Pages/Indutries";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
// import CaaSCloud from "./Pages/CaaSCloud";
// import ConatctModal from "./Components/ContactModal";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* When URL is /about → load About component */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/Caascloud" element={<CaaSCloud />} /> */}
        {/* <Route path="/industries" element={<Industries />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
