import Button from "components/button/Button";
import Previous from "components/previous/Previous";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import service from "services/service";
import "./css/Project-data.sass";

function ProjectData() {
  const [state, setState] = useState("open");

  const [project, setProject] = useState({
    title: "Trump Tower",
    duration: "3 Months",
    start_date: "2022-11-05",
    budget: 3000,
    applicants: 40,
  });

  service.setPageTitle("Trump Tower");

  function handleState() {
    if (state === "open") {
      setState("closed");
    } else {
      setState("open");
    }
  }

  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    setProject(() => ({ ...values }));
  }

  const formik = useFormik({
    initialValues: project,
    onSubmit,
  });

  return (
    <div id="Project-data_Main_Container">
      <div className="section-a d-flex align-items-center justify-content-between mb-5">
        <div className="con-previous">
          <Previous route="/projects" />
        </div>
        <div className="con-edit">
          <Button
            type="primary"
            text="Edit Project"
            modal={true}
            modalHeaderTitle="Update Project"
            modalTarget="new-project-create"
            modalContext={
              <>
                <form className="my-4">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title:
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="duration" className="form-label">
                      Duration
                    </label>
                    <select
                      className="form-select"
                      name="duration"
                      id="duration"
                      onChange={formik.handleChange}
                      value={formik.values.duration}
                    >
                      <option defaultValue="">Select project duration</option>
                      <option>2 Weeks</option>
                      <option value="1 month">1 Month</option>
                      <option value="2 months">2 Months</option>
                      <option value="3 months">3 Months </option>
                      <option value="6 months">6 Months </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="start_date" className="form-label">
                      Start Date:
                    </label>
                    <input
                      id="start_date"
                      name="start_date"
                      type="date"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.start_date}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="budget" className="form-label">
                      Budget
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="number"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.budget}
                    />
                  </div>
                </form>
              </>
            }
            modalFooterBtn={
              <>
                <button data-bs-dismiss="modal" className="secondary-btn">
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                  onClick={formik.handleSubmit}
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </>
            }
          />
        </div>
      </div>

      <div className="section-b">
        <div className="mb-5">
          <div>
            <div className="details-card">
              <div className="header d-flex align-items-center justify-content-between mb-3">
                <h3 className="title">{project.title}</h3>
                <div className={`status ${state === "open" ? "active" : ""}`}>
                  {state}
                </div>
              </div>

              <div className="con-budget flex">
                <h3>Budget:</h3>
                <p>{project.budget}</p>
              </div>

              <div className="con-date flex">
                <h3>Start Date:</h3>
                <p>{project.start_date}</p>
              </div>

              <div className="con-duration flex">
                <h3>Duration:</h3>
                <p>{project.duration}</p>
              </div>

              <div className="con-apply flex">
                <h3>No. of Applicants:</h3>
                <p>{project.applicants}</p>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-5">
                <i></i>
                <div
                  className={`con-action ${state === "open" ? "active" : ""}`}
                  onClick={handleState}
                >
                  {state === "open" ? "Close Project" : "Open Project"}
                  <i className="ms-2 fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4">
          <div>
            <Button
              type="primary"
              text="View all applicants"
              modal={true}
              modalHeaderTitle="All Project Applicants"
              modalTarget="view-all-applicants"
              modalContext={
                <div className="con-applicant">
                  <Link to="/my-profile?search=view?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-profile?select=check" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center justify-content-between">
                      <div className="con-left">
                        <div className="con-img">
                          <img
                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="con-text">
                          <h3 className="name">John Doe</h3>
                          <p className="title">Manager</p>
                        </div>
                      </div>

                      <div className="con-right">
                        <p>View Profile</p>
                      </div>
                    </div>
                  </Link>
                </div>
              }
              modalFooterBtn={
                <>
                  <button data-bs-dismiss="modal" className="primary-btn">
                    Done
                  </button>
                </>
              }
            />
          </div>

          <div>
            <Button
              type="primary"
              text="View all workers"
              modal
              modalHeaderTitle="All Active Workers on Project"
              modalTarget="view-all-workers"
              modalContext={
                <div className="con-applicant">
                  <Link to="/my-profile?search=view" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center gap-3">
                      <div className="con-img">
                        <img
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                        />
                      </div>
                      <div className="con-text">
                        <h3 className="name">John Doe</h3>
                        <p className="title">Manager</p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/my-profile?search=view" data-bs-dismiss="modal">
                    <div className="applicant-card d-flex align-items-center gap-3">
                      <div className="con-img">
                        <img
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                        />
                      </div>
                      <div className="con-text">
                        <h3 className="name">John Doe</h3>
                        <p className="title">Manager</p>
                      </div>
                    </div>
                  </Link>
                </div>
              }
              modalFooterBtn={
                <>
                  <button data-bs-dismiss="modal" className="primary-btn">
                    Done
                  </button>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectData;
