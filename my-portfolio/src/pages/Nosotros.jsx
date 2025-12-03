import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Nosotros.css";

export default function Nosotros() {
  return (
    <>
      <Header />

      {/* MAIN ABOUT SECTION */}
      <section className="about-section">

        {/* ROW 1 */}
        <div className="row">
          <div className="about-info">
            <h2>Who am I?</h2>

            <p>
              I am a Web Application Development Technician with a strong background in audiovisual production,
              digital tools, and communication. My professional experience combines software development, IT support,
              teaching, and creative content creation.
            </p>

            <p>
              I have worked as a D365 Developer and GLPI Consultant, optimizing workflows, configuring systems, 
              and supporting users in IT environments. My teaching background includes video editing, photography, 
              web design tools, and digital literacy.
            </p>

            <a href="/cv.pdf" download className="cv-btn">
              Download CV
            </a>
          </div>

          <div className="about-img">
            <img src="/img/45.jpg" alt="About me" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row">
          <div className="about-img">
            <img src="/img/46.jpg" alt="Creative identity" />
          </div>

          <div className="about-info">
            <h2>My Creative & Technical Identity</h2>

            <p>
              Creativity, organization, and problem-solving define my approach. I enjoy developing intuitive web 
              applications, designing digital content, and blending technology with visual storytelling.
            </p>

            <p>
              My academic background includes a Higher Technician Degree in Web Application Development and Audiovisual
              Production, reinforced with certifications in pedagogy and ICT tools.
            </p>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row">
          <div className="about-info">
            <h2>Experience & Background</h2>

            <p>
              I have experience as a D365 Developer and GLPI Consultant, managing workflows, configuring systems, 
              improving productivity, and supporting users.
            </p>

            <p>
              I’ve also taught audiovisual production, digital tools, and creative technologies, combining technical 
              and pedagogical perspectives.
            </p>
          </div>

          <div className="about-img">
            <img src="/img/47.jpg" alt="Experience" />
          </div>
        </div>

      </section>

      {/* WHAT DEFINES ME */}
      <section className="about-cards">
        <h2>What defines me</h2>

        <div className="card-grid">
          <div className="small-card">
            <h3>Technical Vision</h3>
            <p>Web development, IT systems, and software solutions.</p>
          </div>

          <div className="small-card">
            <h3>Creativity</h3>
            <p>Audiovisual production and digital content creation.</p>
          </div>

          <div className="small-card">
            <h3>Education</h3>
            <p>Instructor in ICT, audiovisual tools, and digital literacy.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
