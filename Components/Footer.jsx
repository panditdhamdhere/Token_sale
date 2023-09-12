import React from "react";

const Footer = () => {
  const FooterList = ["Cryptocash", "How it works", "Token", "FAQ", "Contact"];
  return (
    <footer>
      <div
        className="top_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="footer_logo mb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home_section" className="page-scroll">
                  <img src="assets/images/footer_logo.png" alt="logo" />
                </a>
              </div>

              <div className="footer_desc">
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  suscipit molestias harum ipsam beatae quos eius error aut
                  officia soluta debitis ad tempora rem. Tempore maxime soluta a
                  ratione numquam.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
              <h4
                className="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Quick Links
              </h4>

              <ul className="footer_link">
                {FooterList.map((list, index) => (
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay={`0.${index + 2}s`}
                    key={index}
                  >
                    <a href="#">{list}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div className="newsletter_form">
                <h4 className="footer_title border_title animation">
                  Newsletter
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                </p>

                <form
                  action="#"
                  className="subscribe_form animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  <input
                    type="text"
                    required
                    placeholder="Enter your email"
                    className="input-rounded"
                  />
                  <button
                    type="submit"
                    title="Subscribe"
                    className="btn-info"
                    name="submit"
                    value="Submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright_text">
                © 2023 Cryptocash. All Rights Reserved by Pandit Dhamdhere
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list_none footer_menu">
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
