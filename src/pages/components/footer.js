// components/Footer.js
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="follow-section">
            <h3 className="follow-title">Follow us</h3>
            <div className="social-icons">
              <Link href="https://www.instagram.com/wearbobe/" legacyBehavior>
                <a
                  target="_blank"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <i class="fa-brands fa-instagram fa-2x"></i>
                </a>
              </Link>

              <Link
                href="https://web.facebook.com/wearbobe/?_rdc=1&_rdr#"
                legacyBehavior
              >
                <a
                  target="_blank"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <i class="fa-brands fa-facebook fa-2x"></i>
                </a>
              </Link>

              <Link href="https://x.com/wearbobe" legacyBehavior>
                <a target="_blank" className="social-icon" aria-label="Twitter">
                  <i class="fa-brands fa-twitter fa-2x"></i>
                </a>
              </Link>

              <Link
                href="https://youtu.be/CNZlsHFziSk?si=buZnSTKTlmbINUZ4"
                legacyBehavior
              >
                <a target="_blank" className="social-icon" aria-label="YouTube">
                  <i class="fa-brands fa-youtube fa-2x"></i>
                </a>
              </Link>

              <Link
                href="https://www.google.com/search?q=wearbobe&sca_esv=34fbce1b6673e2ad&sxsrf=AE3TifOyQsWgqBU02oaNz_1x5dtfC3zwnw%3A1754234395142&source=hp&ei=G36PaIOHBpCN4-EPjKqp2AI&iflsig=AOw8s4IAAAAAaI-MK3K3msa40iwFFFrdSG-FbkAIYXia"
                legacyBehavior
              >
                <a target="_blank" className="social-icon" aria-label="Google">
                  <i class="fa-brands fa-google fa-2x"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="marketplace-section">
            <div className="marketplace-item">
              <div className="marketplace-icon tokopedia">
                <Link href="https://www.tokopedia.com/wearbobe" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/assets/img/icon/Tokopedia.png"
                      height={75}
                      width={75}
                      alt="Tokopedia Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="marketplace-item">
              <div className="marketplace-icon shopee">
                <Link href="https://shopee.co.id/wearbobe" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/assets/img/icon/shopee-logo.png"
                      height={75}
                      width={75}
                      alt="Shopee Logo"
                    />
                  </a>
                </Link>
              </div>
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
