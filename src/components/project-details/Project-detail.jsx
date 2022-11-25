import { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import service from "services/service";
import "./css/Project-detail.sass";

function ProjectDetail() {
  service.setPageTitle("Trump Tower");

  const [apply, setApply] = useState(false);

  const [query] = useSearchParams();

  useEffect(() => {
    if (query.get("view") === "requests") setApply(true);
  }, [query]);

  function handleApply() {
    setApply(!apply);
  }

  return (
    <div id="Project-detail_Main_Container">
      <div className="row mb-5 mb-lg-4">
        <div className="con-section-a col-12 col-lg-6">
          <div className="section-a px-lg-4 mb-5 mb-lg-0">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="heading">Trump Tower</h3>
              <p className="status">open</p>
            </div>
            <div className="con-job d-flex align-items-center gap-3 mb-2 mt-3">
              <i className="fa-regular fa-circle-check"></i>
              <p className="job">Manager</p>
            </div>
            <Link to="/my-profile">
              <div className="con-user d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-power-off"></i>
                  <h3 className="user">Ife Jeremiah</h3>
                </div>
                <div className="type">contractor</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="con-section-b col-12 col-lg-6">
          <div className="section-b d-lg-flex align-items-start justify-content-between">
            <div className="tag mb-4 mb-lg-0">
              <div className="top mb-4">
                <h3>Duration</h3>
                <p>3 Months</p>
              </div>
              <div className="bottom">
                <h3>No. of Applicants</h3>
                <p>30</p>
              </div>
            </div>

            <div className="con-btn d-flex gap-3">
              <button className={`first ${apply && "active"}`}>
                {apply && "Applied"}
              </button>

              <button
                className={`second ${apply && "third"} active`}
                onClick={handleApply}
              >
                {apply ? "Decline" : "Apply"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {query.get("view") !== "requests" ? (
        <div className="row">
          <div className="con-section-c px-lg-4 col-12 col-lg-6">
            <div className="section-c">
              <div className="mb-4">
                <h3 className="title">Workers Needed:</h3>
              </div>

              <ul className="context">
                <li>Manager</li>
                <li>Construction Worker</li>
                <li>Concrete Manager</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectDetail;
