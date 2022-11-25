import { Link } from "react-router-dom";
import service from "services/service";
import "./css/Explore.sass";


function Explore() {
  service.setPageTitle("Explore");
  
  const jobs = [
    {
      title: "Manager",
      status: "open",
      projectName: "Trump Tower",
      createdOn: "5 hours ago",
      applied: "30",
      duration: "4 Months",
    },

    {
      title: "Manager",
      status: "closed",
      projectName: "Trump Tower",
      createdOn: "5 hours ago",
      applied: "30",
      duration: "4 Months",
    },

    {
      title: "Manager",
      status: "open",
      projectName: "Trump Tower",
      createdOn: "5 hours ago",
      applied: "30",
      duration: "4 Months",
    },

    {
      title: "Manager",
      status: "closed",
      projectName: "Trump Tower",
      createdOn: "5 hours ago",
      applied: "30",
      duration: "4 Months",
    },

    {
      title: "Manager",
      status: "closed",
      projectName: "Trump Tower",
      createdOn: "5 hours ago",
      applied: "30",
      duration: "4 Months",
    },

    {
      title: "Manager",
      status: "open",
      projectName: "Trump Tower",
      createdOn: "5 hours ago",
      applied: "30",
      duration: "4 Months",
    },
  ];

  return (
    <div id="Explore_Main_Container">
      <div className="main-header d-lg-flex align-items-center justify-content-between">
        <h3 className="title mb-4 mb-lg-0">Explore</h3>

        <div className="con-search d-flex align-items-center">
          <input type="text" placeholder="Search jobs" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className="main-context">
        <div className="context">
          {jobs.map((job, key) => (
            <Link to="/explore/id" key={key}>
              <div className="con-card">
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="title">{job.title}</div>
                  <div
                    className={`status ${job.status === "open" ? "active" : ""}`}
                  >
                    {job.status}
                  </div>
                </div>

                <div className="body">
                  <div className="d-flex align-items-center gap-2">
                    <i className="project-icon fa-solid fa-shield"></i>
                    <div className="project-name">{job.projectName}</div>
                  </div>
                  <div className="d-flex align-items-center gap-2 my-2">
                    <div className="time">{job.createdOn}</div>
                    &#x2022;
                    <div>{job.applied}&nbsp;applicants</div>
                  </div>
                  <div className="duration d-flex align-items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    <p>{job.duration}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
