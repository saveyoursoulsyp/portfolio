import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import CollectionsPage from "./pages/Collections";
import Contact from "./pages/Contact";
import Galeria from "./pages/Gallery";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Galeria />} />
      </Routes>
    </>
  );
}

export default App;
