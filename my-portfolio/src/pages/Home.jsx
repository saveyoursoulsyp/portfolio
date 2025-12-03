import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />

      <div className="home-container">
        <h1 className="home-title">
          Web Developer & <br /> Audiovisual Instructor
        </h1>

        <p className="home-subtitle">
          Creating digital experiences through design, technology, and visual storytelling.
        </p>

        <div className="home-links">
          <Link to="/nosotros" className="home-btn">About me</Link>
          <Link to="/collections" className="home-btn">Projects</Link>
          <Link to="/contact" className="home-btn">Contact me</Link>
          <Link to="/gallery" className="home-btn">Gallery</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
