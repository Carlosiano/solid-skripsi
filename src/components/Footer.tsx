import {
  arrowForwardOutline,
  footerBg,
  logoFooter,
  sosMedLogo,
} from "../assets/images";

export default function Footer() {
  return (
    <>
      <footer class="footer" style={`background-image: url(${footerBg})`}>
        <div class="footer-top section">
          <div class="container grid-list">
            <div class="footer-brand">
              <a href="#" class="logo">
                <img src={logoFooter} width="162" height="50" alt="UT logo" />
              </a>

              <p class="footer-brand-text">
                Alamat Kampus: Jl. Ring Road Utara, Condong Catur, Sleman,
                Yogyakarta
              </p>

              <div class="wrapper">
                <span class="span">Add:</span>

                <address class="address">70-80 Upper St Norwich NR2</address>
              </div>

              <div class="wrapper">
                <span class="span">Call:</span>

                <a href="tel:+011234567890" class="footer-link">
                  +01 123 4567 890
                </a>
              </div>

              <div class="wrapper">
                <span class="span">Email:</span>

                <a href="mailto:info@ut.com" class="footer-link">
                  info@ut.com
                </a>
              </div>
            </div>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Profil</p>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Tentang UT
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Sejarah
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Visi Misi
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Sambutan Rektor
                </a>
              </li>

              <li></li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Pendaftaran</p>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Reguler & Internasional
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Alih Jalur
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Biaya Kuliah
                </a>
              </li>
            </ul>

            <div class="footer-list">
              <p class="footer-list-title">Tanya Kami</p>

              <p class="footer-list-text">Masukkan alamat email Anda</p>

              <form action="" class="newsletter-form">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email Anda"
                  required
                  class="input-field"
                />

                <button type="submit" class="btn has-before">
                  <span class="span">Kirim</span>
                  <img
                    src={arrowForwardOutline}
                    alt=""
                    class="ion-icon"
                    aria-hidden="true"
                  />
                </button>
              </form>

              <ul class="social-list">
                {sosMedLogo.map((item) => (
                  <li>
                    <a href="#" class="social-link">
                      <img src={item} alt="" class="ion-icon" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">
              Copyright 2023 Universitas Teknologi Condongcatur
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
