import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <Header />

      <div className="gallery-container">
        <h1>Photo Gallery</h1>
        <h2>"What the silence allowed me to see"</h2>

        <div className="gallery-grid">
          <img src="/img/33.jpg" />
          <img src="/img/34.jpg" />
          <img src="/img/36.jpg" />
          <img src="/img/35.jpg" />
           <img src="/img/40.jpg" />
          <img src="/img/41.jpg" />
          <img src="/img/42.jpg" />
          <img src="/img/43.jpg" />
          <img src="/img/37.jpg" />
          <img src="/img/38.jpg" />
          <img src="/img/44.jpg" />
          <img src="/img/39.jpg" />
        </div>
        
      </div>
      <a href="/Contact"><h2 className="gallery-contactme">If you want to see more photos...</h2></a>
      <Footer />
    </>
  );
}
