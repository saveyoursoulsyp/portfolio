import { useState } from "react";
import "./Collections.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Collections() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const projects = {
    memora: {
      name: "Memora",
      cardImage: "/img/50.jpg",
      description:
        "A minimalist app for saving and organizing meaningful photos. Its soft palette and clean UI emphasize emotional storytelling.",
      images: [7, 53, 54, 55, 56].map((n) => `/img/${n}.jpg`),
    },
    save: {
      name: "Save Your Soul",
      cardImage: "/img/63.jpg",
      description:
        "A running-focused social network. Athletes share progress, track workouts, and connect through a dynamic and energetic interface.",
      images: [57, 58, 59, 60, 61, 62].map((n) => `/img/${n}.jpg`),
    },
    help: {
      name: "HelpTest",
      cardImage: "/img/52.jpg",
      description:
        "An app that generates quizzes from JSON files, making studying and testing fast, automated, and visually clean.",
      images: [12, 13, 14].map((n) => `/img/${n}.PNG`),
    },
    vivero: {
      name: "Florece",
      cardImage: "/img/51.jpg",
      description:
        "A plant nursery management system focused on organizing plant categories, stock, and care guides with a soft green palette.",
      images: Array.from({ length: 18 }, (_, i) => `/img/${16 + i}.PNG`),
    },
    mylibrary: {
      name: "Librerum",
      cardImage: "/img/48.jpg",
      description:
        "A personal library app to catalog books, track readings, and store notes with a calming and elegant UI.",
      images: [8, 9, 10, 11].map((n) => `/img/${n}.PNG`),
    },
    cromocollection: {
      name: "CromoCollection",
      cardImage: "/img/64.jpg",
      description:
        "A refined and modern redesign of a personal cromocollection website, focused on minimalism, spacing, and smooth UI animations.",
      images: [2, 3, 4, 5, 6].map((n) => `/img/${n}.PNG`),
    },
  };

  const projectKeys = Object.keys(projects);

  const openModal = (key) => {
    setSelectedProject(key);
    setCarouselIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  const nextImage = () => {
    const imgs = projects[selectedProject].images;
    setCarouselIndex((i) => (i + 1) % imgs.length);
  };

  const prevImage = () => {
    const imgs = projects[selectedProject].images;
    setCarouselIndex((i) => (i - 1 + imgs.length) % imgs.length);
  };

  return (
    <>
      <Header />

      <div className="collections-page">
        <h1 className="collections-title">My Project Collection</h1>

        <div className="cards-grid">
          {projectKeys.map((key) => {
            const p = projects[key];

            return (
              <div
                key={key}
                className="project-card"
                onClick={() => openModal(key)}
              >
                {/* IMAGE WRAPPER */}
                <div className="card-image-wrapper">
                  <img
                    src={p.cardImage}
                    alt={`${p.name} card visual`}
                    className="card-image"
                  />
                </div>

                <h2 className="card-title">{p.name}</h2>
                <button className="open-btn">View project</button>
              </div>
            );
          })}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h2>{projects[selectedProject].name}</h2>

              <p className="modal-description">
                {projects[selectedProject].description}
              </p>

              <div className="modal-carousel">
                <button className="carousel-btn left" onClick={prevImage}>
                  ❮
                </button>

                <img
                  src={projects[selectedProject].images[carouselIndex]}
                  alt=""
                />

                <button className="carousel-btn right" onClick={nextImage}>
                  ❯
                </button>
              </div>

              <button className="close-modal" onClick={closeModal}>
                Close ✕
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
