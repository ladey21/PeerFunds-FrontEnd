import { useFormik } from "formik";

import Button from "components/button/Button";
import { projectSchema, projectData } from "schema/projectValidate";
import "./css/Project.sass";

import { useState } from "react";
import service from "services/service";
import { Link } from "react-router-dom";

function Project() {
  service.setPageTitle("Projects");

  const [projects, setProject] = useState([
    {
      title: "The Art of the Deal",
      duration: "1 month",
      start_date: "2022-11-05",
      end_date: "2022-11-13",
      status: "closed",
      budget: 212,
      workers: [
        "inspector",
        "flooringInstaller",
        "surveyor",
        "brickMason",
        "ironWorker",
        "craneOperator",
        "safetyManager",
        "costEstimator",
        "manager",
      ],
    },
    {
      title: "The Art of the Deal",
      duration: "1 month",
      start_date: "2022-11-05",
      end_date: "2022-11-13",
      status: "open",
      budget: 212,
      workers: [
        "inspector",
        "flooringInstaller",
        "surveyor",
        "brickMason",
        "ironWorker",
        "craneOperator",
        "safetyManager",
        "costEstimator",
        "manager",
      ],
    },
    {
      title: "The Art of the Deal",
      duration: "1 month",
      start_date: "2022-11-05",
      end_date: "2022-11-13",
      status: "open",
      budget: 212,
      workers: [
        "inspector",
        "flooringInstaller",
        "surveyor",
        "brickMason",
        "ironWorker",
        "craneOperator",
        "safetyManager",
        "costEstimator",
        "manager",
      ],
    },
    {
      title: "The Art of the Deal",
      duration: "1 month",
      start_date: "2022-11-05",
      end_date: "2022-11-13",
      status: "closed",
      budget: 212,
      workers: [
        "inspector",
        "flooringInstaller",
        "surveyor",
        "brickMason",
        "ironWorker",
        "craneOperator",
        "safetyManager",
        "costEstimator",
        "manager",
      ],
    },
    {
      title: "The Art of the Deal",
      duration: "1 month",
      start_date: "2022-11-05",
      end_date: "2022-11-13",
      status: "open",
      budget: 212,
      workers: [
        "inspector",
        "flooringInstaller",
        "surveyor",
        "brickMason",
        "ironWorker",
        "craneOperator",
        "safetyManager",
        "costEstimator",
        "manager",
      ],
    },
    {
      title: "The Art of the Deal",
      duration: "1 month",
      start_date: "2022-11-05",
      end_date: "2022-11-13",
      status: "closed",
      budget: 212,
      workers: [
        "inspector",
        "flooringInstaller",
        "surveyor",
        "brickMason",
        "ironWorker",
        "craneOperator",
        "safetyManager",
        "costEstimator",
        "manager",
      ],
    },
  ]);

  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    values.status = "open";
    setProject([values, ...projects]);
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: projectData,
    validationSchema: projectSchema,
    onSubmit,
  });

  return (
    <div className="main-container" id="Project-dashboard_Main_Container">
      <div className="con-header d-flex align-items-center justify-content-between">
        <div className="title">
          <h2>Projects</h2>
        </div>

        <div className="header-btn">
          <Button
            type="primary"
            text="New Project"
            modal={true}
            modalHeaderTitle="Create New Project"
            modalTarget="new-project-create"
            modalContext={
              <form className="my-4">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />

                  <p className="invalid-data">
                    {formik.errors.title && formik.touched.title
                      ? formik.errors.title
                      : null}
                  </p>
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
                  <p className="invalid-data">
                    {formik.errors.duration && formik.touched.duration
                      ? formik.errors.duration
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label htmlFor="budget" className="form-label">
                    Budget
                  </label>
                  <input
                    className="form-control"
                    id="budget"
                    name="budget"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                  />
                  <p className="invalid-data">
                    {formik.errors.budget && formik.touched.budget
                      ? formik.errors.budget
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label htmlFor="start_date" className="form-label">
                    Start Date
                  </label>
                  <input
                    className="form-control"
                    id="start_date"
                    name="start_date"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.start_date}
                  />
                  <p className="invalid-data">
                    {formik.errors.start_date && formik.touched.start_date
                      ? formik.errors.start_date
                      : null}
                  </p>
                </div>

                <h5 className="my-4">Select workers you need</h5>
                <p className="invalid-data mb-2">
                  {formik.errors.hasWorkers && formik.touched.hasWorkers
                    ? formik.errors.hasWorkers
                    : null}
                </p>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inspector"
                      name="workers.inspector"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.inspector}
                    />
                    <label className="form-check-label" htmlFor="inspector">
                      Inspector
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flooringInstaller"
                      name="workers.flooringInstaller"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.flooringInstaller}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flooringInstaller"
                    >
                      Flooring Installer
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="surveyor"
                      name="workers.surveyor"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.surveyor}
                    />
                    <label className="form-check-label" htmlFor="surveyor">
                      Surveyor
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="brickMason"
                      name="workers.brickMason"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.brickMason}
                    />
                    <label className="form-check-label" htmlFor="brickMason">
                      Brick Mason
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ironWorker"
                      name="workers.ironWorker"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.ironWorker}
                    />
                    <label className="form-check-label" htmlFor="ironWorker">
                      Iron Worker
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="craneOperator"
                      name="workers.craneOperator"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.craneOperator}
                    />
                    <label className="form-check-label" htmlFor="craneOperator">
                      Crane Operator
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="safetyManager"
                      name="workers.safetyManager"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.safetyManager}
                    />
                    <label className="form-check-label" htmlFor="safetyManager">
                      Safety Manager
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="costEstimator"
                      name="workers.costEstimator"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.costEstimator}
                    />
                    <label className="form-check-label" htmlFor="costEstimator">
                      Cost Estimator
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="manager"
                      name="workers.manager"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.manager}
                    />
                    <label className="form-check-label" htmlFor="manager">
                      Manager
                    </label>
                  </div>
                </div>
              </form>
            }
            modalFooterBtn={
              <>
                <button
                  data-bs-dismiss="modal"
                  className="secondary-btn"
                  onClick={formik.resetForm}
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                  onClick={formik.handleSubmit}
                  data-bs-dismiss={
                    formik.isValid && formik.dirty ? "modal" : null
                  }
                >
                  Next
                </button>
              </>
            }
          />
        </div>
      </div>

      <div className="con-context">
        {projects.length > 0 ? (
          <div className=" table-responsive">
            <table className="table">
              <thead>
                <tr className="header-row">
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Budget (&#8358;)</th>
                  <th scope="col">Duration</th>
                  <th scope="col">No. of Applicants</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, key) => (
                  <tr key={key}>
                    <td>
                      <Link to="/projects/id">{key + 1}</Link>
                    </td>
                    <td>
                      <Link to="/projects/id">{project.title}</Link>
                    </td>
                    <td>
                      <Link to="/projects/id">{project.budget}</Link>
                    </td>
                    <td>
                      <Link to="/projects/id">{project.duration}</Link>
                    </td>
                    <td>{23}</td>
                    <td>
                      <Link to="/projects/id">
                        <div
                          className={`status ${
                            project.status === "open" ? "active" : ""
                          }`}
                        >
                          {project.status}
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="">
            <div>
              No Projects to show. &nbsp;
              <span
                data-bs-toggle="modal"
                data-bs-target="#new-project-create"
                className=""
              >
                Create New Project
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
