import { useRef } from "react";
import { Link } from "react-router-dom";
import service from "services/service";
import s from "./css/Homepage.module.sass";
import "./css/Homepage.sass";

function Homepage() {
  service.setPageTitle("Homepage");

  const ServicesRef = useRef(null);

  const sectionDCardData = [
    {
      title: "Quality & Skill",
      content:
        "Our workers go through a thorough screening process & have ratings from former contractors to ensure the highest quality.",
    },
    {
      title: "Crew Flexibility",
      content:
        "BrickX allows you to add workers when needed & remove when project demands slow down.",
    },
    {
      title: "Dedicated Support",
      content:
        "Our team is dedicated to making sure your worker needs are met & are always available to help.",
    },
    {
      title: "Saves You Time",
      content:
        "We conveniently get you workers while managing their hours & payroll, allowing you to focus on other areas of your business.",
    },
  ];

  const gotoGetStart = () =>
    window.scrollTo({
      top: ServicesRef.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <div className={s.main_container} id="Homepage_Main_Container">
      <div className="con-container primary-bg">
        <div className="con-wrapper">
          <nav className="con-navbar d-flex align-items-center justify-content-between">
            <div className="con-left">
              <h3 className="logo">
                <Link to="/">
                  Peer2
                  <span className="second">Fund</span>
                </Link>
              </h3>
            </div>

            <div className="con-right">
              <ul className="d-flex align-items-center">
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li className="d-none d-lg-block">
                  <Link to={"/register"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="section-a con-centered">
            <div className="d-lg-flex align-items-center gap-5">
              <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                <div>
                  <h1 className="title">
                    Alternative finance for every Nigerian
                  </h1>
                  <p className="body mb-5">
                    Worker profiles with ratings and reviews from past
                    contractors gives you the assurance to select the highest
                    quality workers for your projects.
                  </p>

                  <div className="homepage-btn" onClick={gotoGetStart}>
                    Get Started
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="img">
                  <img src="/images/img1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="con-section primary-bg" ref={ServicesRef}>
        <div className="section-b">
          <div className="con-centered sections">
            <div className="header mb-5">
              <h2>Grow together, saving together.</h2>
            </div>
            <div className="con-context">
              <p>
                Why take loans when you can access micro-credit from peers in a
                rotating savings without paying back with interests.
              </p>
            </div>
          </div>
        </div>

        <div className="section-c con-centered sections">
          <div className="d-lg-flex align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <div>
                <h1 className="title">Group Contribution.</h1>
                <p className="body mb-5">
                  Join a community of SMEs and corporate employees with
                  cooperative significance pooling money together to rotate the
                  lump contribution as micro-credit for other members.
                </p>

                <Link to="/register">
                  <div className="homepage-btn">Explore groups</div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="img">
                <img src="/images/img3.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-d con-centered sections">
          <div className="con-top text-center">
            <div className="header mb-5">
              <h2 className="title">Why Peer2Fund?</h2>
            </div>
          </div>

          <div className="con-bottom row">
            {sectionDCardData.map((elem, key) => (
              <div
                className="col-12 col-lg-3 text-center mb-4 mb-lg-0"
                key={key}
              >
                <div className="section-d-card">
                  <div className="title">{elem.title}</div>
                  <div className="body">{elem.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="con-footer">
        <div className="footer d-lg-flex align-items-start justify-content-center gap-5">
          <div className="mb-4 mb-lg-0">
            &copy; {new Date().getFullYear()}
            &nbsp; Peer2Fund, Inc.
          </div>
          <div className="d-lg-flex align-items-start gap-5">
            <ul className="mb-5 mb-lg-0">
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ul>
            <ul className="mb-5 mb-lg-0">
              <li>
                <Link to="/">API</Link>
              </li>
              <li>
                <Link to="/">Training</Link>
              </li>
              <li>
                <Link to="/">Status</Link>
              </li>
              <li>
                <Link to="/">Security</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Docs</Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
