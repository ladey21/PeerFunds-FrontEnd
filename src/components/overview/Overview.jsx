import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import service from "services/service";
import "./css/Overview.sass";

function Overview({ payload, currentUser }) {
  const firstName = currentUser.firstName;

  const isWorker = payload.role === "Worker";

  const [projects, setProjects] = useState([]);

  const requests = [
    {
      title: "Shirts Group",
      status: "Open",
    },
    {
      title: "School Provision Group",
      status: "Open",
    },
    {
      title: "",
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

  useEffect(() => {
    async function getGroup() {
      service.getAllGroups().then(
        (res) => setProjects([...res]),
        (err) => console.log("Error fetching groups", err)
      );
    }
    getGroup();
  }, []);

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
                  <h3>Public Groups&nbsp;({projects?.length})</h3>
                  {projects?.length > 0 ? (
                    <>
                      <Link to="/projects" className="arrow-link">
                        View all
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </Link>
                    </>
                  ) : null}
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
                  {projects.length > 0 ? (
                    <>
                      {projects?.map((elem, key) => (
                        <div className="con-card" key={key}>
                          <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="title">{elem.name}</div>
                            <div className={`status ${elem.group_amount}`}>
                              {elem.group_amount}
                            </div>
                          </div>

                          <div>
                            <Link to="/projects/id" className="arrow-link">
                              View group
                              <i className="fa-solid fa-arrow-right ms-2"></i>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <h4>No projects yet</h4>
                  )}
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
        </div>
      </div>
    </div>
  );
}

export default Overview;
