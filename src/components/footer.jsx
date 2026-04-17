import logoFooter from "../assets/images/logo_footer.png";
import cartSticky from "../assets/images/cart_sticky.png";
import phoneSticky from "../assets/images/phone_sticky.png";
// import backToTopBtn from "../assets/images/back-to-top-button.png";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <section className="section TopFooter">
        <div className="section-content relative">
          <Row className="_3cxz">
            <Col span={12} className="_3qzh">
              <a href="/" className="logo_footer">
                <img src={logoFooter} />
              </a>
            </Col>
            <Col span={12} className="_0vab">
              <div className="_5iwi">
                <div className="_0mal">
                  <span className="_1dsp">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" size="2x" />
                  </span>
                  <div className="_8ywm">
                    <div className="_1sve">Email us</div>
                    <a
                      href="mailto:info@anphatholdings.vn"
                      className="_3gcg block">
                      info@anphatholdings.vn
                    </a>
                  </div>
                </div>
                <div className="_0mal">
                  <span className="_1dsp">
                    <FontAwesomeIcon
                      icon="fa-solid fa-phone-volume"
                      size="2x"
                    />
                  </span>
                  <div className="_8ywm">
                    <div className="_1sve">Get advice from experts</div>
                    <a href="tel:(024) 3206 1199" className="_3gcg block">
                      (024) 3206 1199
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section BottomFooter">
        <div className="section-content relative">
          <Row className="_3idv">
            <Col span={12} className="_4xqy">
              <ul className="list-menu-footer">
                <li className="item">
                  <a href="/">Home</a>
                </li>
                <li className="item">
                  <Link to="/all-product">All Products</Link>
                </li>
                <li className="item">
                  <a href="#">About Us</a>
                </li>
                <li className="item">
                  <a href="#">Contact Us</a>
                </li>
                <li className="item">
                  <a href="#">Catalogue</a>
                </li>
              </ul>
            </Col>
            <Col span={12} className="_0utp">
              <ul className="list-social">
                <li className="item">
                  <a
                    href="#"
                    className="block"
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="#"
                    className="block"
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="#"
                    className="block"
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-twitter" size="2xl" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="#"
                    className="block"
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>
      <section className="CopyRight">
        <div className="section-content relative">
          <p className="_0xhk mb-0">
            Copyright © 2025. Powered by An Phat Holdings. All rights reserved
          </p>
        </div>
      </section>
      <div className="sticky-social">
        <ul className="list-sticky">
          <li className="item">
            <a href="#">
              <img src={cartSticky} />
            </a>
          </li>
          <li className="item">
            <a href="tel:(024) 3206 1199" target="_blank" rel="noreferrer">
              <img src={phoneSticky} />
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="back-to-top" id="top-link" aria-label="Go to top">
        <img src={backToTopBtn} />
      </div> */}
    </footer>
  );
}

export default Footer;
