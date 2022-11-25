import { Link } from "react-router-dom";
import service from "services/service";
import "./css/Overview.sass";

function Overview({ payload }) {
  const firstName = "John";

  const isWorker = payload.role === "Worker";

  const projects = [
    {
      title: "Trump Tower",
      status: "open",
    },
    {
      title: "Trump Tower",
      status: "closed",
    },
    {
      title: "Trump Tower",
      status: "open",
    },
    {
      title: "Trump Tower",
      status: "open",
    },
    {
      title: "Trump Tower",
      status: "open",
    },
    {
      title: "Trump Tower",
      status: "open",
    },
    {
      title: "Trump Tower",
      status: "open",
    },
  ];

  const requests = [
    {
      title: "Trump Tower",
      status: "pending",
    },
    {
      title: "Trump Tower",
      status: "accepted",
    },
    {
      title: "Trump Tower",
      status: "declined",
    },
    {
      title: "Trump Tower",
      status: "declined",
    },
    {
      title: "Trump Tower",
      status: "accepted",
    },
    {
      title: "Trump Tower",
      status: "declined",
    },
    {
      title: "Trump Tower",
      status: "accepted",
    },
  ];

  service.setPageTitle("Overview");
  return (
    <div className="component-container" id="Overview_Main_Container">
      <div>
        <div className="con-header">
          <div className="first mb-4">
            <h3>Welcome {firstName}</h3>
          </div>
          <div className="second">
            <p>What would you like to do today?</p>
          </div>
        </div>

        <div className="con-context">
          {/* Section A */}
          <div className="section-a">
            <div>
              {!isWorker ? (
                <div className="header d-flex align-items-center justify-content-between mb-5">
                  <h3>My Projects&nbsp;({projects.length})</h3>
                  <Link to="/projects" className="arrow-link">
                    View all
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              ) : (
                <div className="header d-flex align-items-center justify-content-between mb-5">
                  <h3>My Requests&nbsp;({requests.length})</h3>
                  <Link to="/requests" className="arrow-link">
                    View all
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              )}
            </div>

            <div>
              {!isWorker ? (
                <div className="content">
                  {projects.map((elem, key) => (
                    <div className="con-card" key={key}>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="title">{elem.title}</div>
                        <div className={`status ${elem.status}`}>
                          {elem.status}
                        </div>
                      </div>

                      <div>
                        <Link to="/projects/id" className="arrow-link">
                          View project
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="content">
                  {requests.map((elem, key) => (
                    <div className="con-card" key={key}>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="title">{elem.title}</div>
                        <div className={`status ${elem.status}`}>
                          {elem.status}
                        </div>
                      </div>

                      <div>
                        <Link to="/explore/id" className="arrow-link">
                          View requests
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section B */}
          <div className="section-b">
            <div>
              {!isWorker ? (
                <div className="header d-flex align-items-center justify-content-between mb-5">
                  <h3>Workers&nbsp;</h3>
                  <i></i>
                </div>
              ) : (
                <div className="header d-flex align-items-center justify-content-between mb-5">
                  <h3>Explore&nbsp;</h3>
                  <i></i>
                </div>
              )}
            </div>

            <div className="content">
              {!isWorker ? (
                <>
                  {projects.map((elem, key) => (
                    <div className="con-card" key={key}>
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="image">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="details">
                          <p className="name">Zainab Sanni</p>
                          <p className="job">Manager</p>
                        </div>
                      </div>

                      <div>
                        <Link
                          to="/my-profile?search=view"
                          className="arrow-link"
                        >
                          View Worker
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {projects.map((elem, key) => (
                    <div className="con-card" key={key}>
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div>
                          <div className="title mb-3">Manager</div>
                          <p className="timestamp d-flex align-items-center gap-2">
                            <i className="fa-regular fa-clock"></i>5 hours ago
                          </p>
                        </div>
                        <div className={`status ${elem.status}`}>
                          {elem.status}
                        </div>
                      </div>

                      <div>
                        <Link to="/explore/id" className="arrow-link">
                          View
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
