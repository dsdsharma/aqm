import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Industries from "./Pages/Indutries";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Technology from "./Pages/Technology";
import Newsroom from "./Pages/Newsroom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* When URL is /about → load About component */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/newsroom" element={<Newsroom />} />
      </Routes>
    </Router>
  );
}

export default App;
