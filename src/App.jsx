import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

import About from "./Pages/About"; // adjust path if needed
import DigitalBanking from "./Pages/DigitalBanking";
import Ethera from "./Pages/Ethera";
import Careers from "./Pages/Careers";
import Technology from "./Pages/Technology";
import Newsroom from "./Pages/Newsroom";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* When URL is /about → load About component */}
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/digital" element={<DigitalBanking />} />
       <Route path="/ethera" element={<Ethera />} />
       <Route path="/careers" element={<Careers/>} />
       <Route path="/technology" element={<Technology />} />
      <Route path="/newsroom" element={<Newsroom />} />

</Routes>
    </Router>
  );
}

export default App;
