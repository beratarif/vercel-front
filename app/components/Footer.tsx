export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Berat Arif Gönül</h3>
          <p>
            Modern, performanslı ve üretim seviyesinde web projeleri
            geliştiriyorum.
          </p>
        </div>

        <div className="footer-middle">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li>
              <a href="#about">Hakkımda</a>
            </li>
            <li>
              <a href="#projects">Projeler</a>
            </li>
            <li>
              <a href="#contact">İletişim</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Sosyal Medya</h4>
          <div className="social-links">
            <a href="https://github.com/beratarif" target="_blank">
              GitHub
            </a>
            <a href="https://linkedin.com/in/beratarif" target="_blank">
              LinkedIn
            </a>
            <a href="mailto:gonulberat1@gmail.com">E-Mail</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Made Berat Arif Gönül
      </div>
    </footer>
  );
}
