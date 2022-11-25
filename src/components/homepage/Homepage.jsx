import { useRef } from "react";
import { Link } from "react-router-dom";
import service from "services/service";
import s from "./css/Homepage.module.sass";
import "./css/Homepage.sass";

function Homepage() {
  service.setPageTitle("Homepage");

  const ServicesRef = useRef(null);

  const sectionACardData = [
    {
      icon: "fa-solid fa-user-gear",
      title: "Select type of worker",
      body: "Simply select the type of skilled worker needed, along with tools required & job description",
    },
    {
      icon: "fa-solid fa-clock-rotate-left",
      title: "View matches",
      body: "You will receive a list of workers that are available & interested in your request",
    },
    {
      icon: "fa-solid fa-users",
      title: "Choose the best",
      body: "View ratings, reviews, skill & experience in workers profiles before confirming the best worker for the job",
    },
  ];

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
      <div className="con-container">
        <div className="img-bg">
          <img
            src="https://images.unsplash.com/photo-1546552356-3fae876a61ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            alt=""
          />
        </div>
        <div className="overlay"></div>

        <div className="con-wrapper">
          <nav className="con-navbar d-flex align-items-center justify-content-between">
            <div className="con-left">
              <h3 className="logo">
                <Link to="/">Peer2FUND</Link>
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

          <div className="section-a d-flex align-items-center justify-content-center">
            <div className="con-top text-center">
              <h2>
                Connect to thousands of verified construction workers over our
                network.
              </h2>
              <button className="header-btn" onClick={gotoGetStart}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="con-section" ref={ServicesRef}>
        <div className="section-b">
          <div className="header mb-5">
            <h2>How BrickX works</h2>
          </div>
          <div className="con-card">
            {sectionACardData.map((elem, key) => (
              <div className="section-b-card" key={key}>
                <div className="icon">
                  <i className={`${elem.icon}`}></i>
                </div>
                <div className="title my-3">{elem.title}</div>
                <div className="body">{elem.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-c con-centered sections">
          <div className="d-lg-flex align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <div>
                <h1 className="title">Worker ratings and reviews</h1>
                <p className="body mb-5">
                  Worker profiles with ratings and reviews from past contractors
                  gives you the assurance to select the highest quality workers
                  for your projects.
                </p>

                <Link to="/register">
                  <div className="homepage-btn">Start</div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1592890288687-961242c04db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-d con-centered sections">
          <div className="con-top text-center">
            <div className="header mb-5">
              <h2 className="title">Why BrickX?</h2>
            </div>
            <div className="body">
              <p className="mb-5">
                BrickX is a marketplace connecting construction companies and
                contractors to local construction workers looking for short-term
                or long-term work.
              </p>

              <p>
                Your construction projects get matched to verified worker
                profiles based on skill, experience and location. The connection
                & payroll is all handled through the BrickX platform to bring
                accountability and transparency to the construction industry.
              </p>
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

        <div className="section-e">
          <div>
            <div className="title text-center">Trusted by</div>
            <ul className="d-lg-flex align-items-center justify-content-center gap-4">
              <li>
                <img
                  src="https://www.turnerconstruction.com/Content/Images/turner.gif"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://www.fluor.com/images/common/fluor-logo.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.cookielaw.org/logos/954c1905-a259-43cc-9bed-957b37438fc5/ba2b5afc-9d50-496a-a17e-efaa0be4a92b/7aa00331-c491-48cc-bfc8-6de827817517/skanska-logotype-blue-120x18.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://www.emcorgroup.com/application/files/6816/1047/4820/EME_PMS_322K_white.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="con-footer">
        <div className="footer d-lg-flex align-items-start justify-content-center gap-5">
          <div className="mb-4 mb-lg-0">
            &copy; {new Date().getFullYear()}
            &nbsp; BrickX, Inc.
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
