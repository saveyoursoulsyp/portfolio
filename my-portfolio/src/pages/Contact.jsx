import Header from "../Components/Header"; 
import Footer from "../Components/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Header />

      <section className="contact-section">
        <h1 className="titlecontact">Contact me</h1>

        <div className="contact-grid">

          {/* PHONE */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 011 1V21a1 1 0 01-1 1C9.61 22 2 14.39 2 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.2 2.42.57 3.54a1 1 0 01-.24 1.05l-2.21 2.2z"/>
              </svg>
            </div>
            <h3>Phone</h3>
            <p><a href="tel:+34615080040">+34 615 08 00 40</a></p>
          </div>

          {/* EMAIL */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm10 9l10-7H2l10 7zm0 2L2 8v12h20V8l-10 7z"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p><a href="mailto:srujasarroyo@gmail.com">srujasarroyo@gmail.com</a></p>
          </div>

          {/* LINKEDIN */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M4.98 3.5A2.5 2.5 0 012.5 6 2.5 2.5 0 014.98 8.5 2.5 2.5 0 017.46 6 2.5 2.5 0 014.98 3.5zM2.5 9h5v12h-5V9zm7.57 0h4.78v1.77h.07a5.24 5.24 0 014.7-2.58c5 0 5.92 3.29 5.92 7.57V21h-5v-4.91c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-5V9z"/>
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/sandrarujas/" target="_blank">
                https://www.linkedin.com/in/sandrarujas/
              </a>
            </p>
          </div>

          {/* GITHUB */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 .5A11.5 11.5 0 000 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.22 1.79 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.27.46-2.31 1.22-3.12-.12-.29-.53-1.45.12-3.02 0 0 1-.32 3.3 1.2A11.4 11.4 0 0112 6.8a11.4 11.4 0 012.99.4c2.29-1.52 3.29-1.2 3.29-1.2.65 1.57.24 2.73.12 3.02a4.36 4.36 0 011.22 3.12c0 4.46-2.69 5.43-5.25 5.72.42.37.8 1.11.8 2.24v3.32c0 .3.2.65.79.55A11.52 11.52 0 0024 12C24 5.7 18.3.5 12 .5z"/>
              </svg>
            </div>
            <h3>GitHub</h3>
            <p><a href="https://github.com/saveyoursoulsyp" target="_blank">saveyoursoulsyp</a></p>
            <p><a href="https://github.com/sandrarujas" target="_blank">sandrarujas</a></p>
          </div>

          {/* INSTAGRAM */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-2a1 1 0 100 2 1 1 0 000-2z"/>
              </svg>
            </div>
            <h3>Instagram</h3>
            <p><a href="https://instagram.com/saveyoursoul" target="_blank">@saveyoursoul</a></p>
          </div>

          {/* TIKTOK */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 50 50" fill="white">
                <path d="M41.3 14.2c-4.6 0-8.4-3.7-8.4-8.4h-6.4v27.6c0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5
                        2.5-5.5 5.5-5.5c.5 0 1 .1 1.5.2v-6.6c-.5-.1-1-.1-1.5-.1-6.7 0-12.1 5.4-12.1 12.1
                        s5.4 12.1 12.1 12.1 12.1-5.4 12.1-12.1v-14c2.2 2.4 5.3 3.7 8.8 3.7v-6z" />
              </svg>
            </div>
            <h3>TikTok</h3>
            <p><a href="https://www.tiktok.com/@saveyoursoul" target="_blank">@saveyoursoul</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
