// components/Footer.js
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="follow-section">
            <h3 className="follow-title">Follow us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <i class="fa-brands fa-instagram fa-2x"></i>
              </a>

              <a href="#" className="social-icon" aria-label="Facebook">
                <i class="fa-brands fa-facebook fa-2x"></i>
              </a>

              <a href="#" className="social-icon" aria-label="Twitter">
                <i class="fa-brands fa-twitter fa-2x"></i>
              </a>

              <a href="#" className="social-icon" aria-label="YouTube">
                <i class="fa-brands fa-youtube fa-2x"></i>
              </a>

              <a href="#" className="social-icon" aria-label="Google">
                <i class="fa-brands fa-google fa-2x"></i>
              </a>
            </div>
          </div>

          <div className="marketplace-section">
            <div className="marketplace-item">
              <div className="marketplace-icon tokopedia">
                <Image
                  src="/assets/img/icon/Tokopedia.png"
                  height={75}
                  width={75} // kamu juga bisa ubah dari 10 ke ukuran yang sesuai
                  alt="Shopee Logo"
                />
              </div>
              {/* <span className="marketplace-label">Tokopedia</span> */}
            </div>

            <div className="marketplace-item">
              <div className="marketplace-icon shopee">
                <Image
                  src="/assets/img/icon/shopee-logo.png"
                  height={75}
                  width={75} // kamu juga bisa ubah dari 10 ke ukuran yang sesuai
                  alt="Shopee Logo"
                />
              </div>
              {/* <span className="marketplace-label">Shopee</span> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">©2025 Wearbobe,inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
