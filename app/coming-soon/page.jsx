import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="mil-wrapper">
      {/* top bar */}
      <div className="mil-top-position mil-fixed">
        <div className="mil-top-panel mil-top-panel-transparent mil-animated">
          <div className="container-fluid">
            <Link href="/" className="mil-logo" style={{ width: "140px" }} />
            <div className="mil-navigation">
              <p className="mil-light">Empowering Your Vision with <span className="mil-accent">End-to-End Tech Solutions</span></p>
            </div>
            {/* mobile menu button */}
            <div className="mil-menu-btn">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* top bar end */}

      {/* coming soon */}
      <div className="mil-dark-bg mil-add-page">
        <img src="/img/photo/20.jpg" alt="background" className="mil-background-image" />
        <div className="mil-overlay"></div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4">
              <h1 className="mil-light mil-mb-15">Coming <span className="mil-accent">Soon</span></h1>
              <p className="mil-light-soft">We are working on our website.</p>
            </div>
            <div className="col-xl-6">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h4 className="mil-light mil-mb-30">Join The <span className="mil-accent">ITSulu</span><br /> Experience</h4>
                </div>
                <div className="col-lg-7">
                  <p className="mil-light-soft mil-mb-30">Lorem ipsum dolor sit amet, consectetuer <br />adipiscing elit sed diam nonummy.</p>
                </div>
              </div>
              <form className="mil-subscribe-form mil-mb-30">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="mil-button mil-accent-bg">Subscribe Now</button>
              </form>
              <Link href="/contact" className="mil-link mil-light"><span>Contact Us</span><i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
      {/* coming soon end */}

      <div className="mil-addition-bottom">
        <div className="container-fluid">
          <p className="mil-text-sm mil-light-soft">© ITSulu 2023.</p>
          <p className="mil-text-sm mil-light-soft">All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
