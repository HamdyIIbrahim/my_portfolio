import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./app.css"
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Portfolio from "./pages/portfolio/portfolio"
import Contact from "./pages/contact/contact"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
