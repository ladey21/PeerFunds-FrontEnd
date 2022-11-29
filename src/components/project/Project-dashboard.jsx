import { useFormik } from "formik";

import Button from "components/button/Button";
import {
  projectSchema,
  projectData,
  groupData,
  groupSchema,
} from "schema/projectValidate";
import "./css/Project.sass";

import { useState } from "react";
import service from "services/service";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Project() {
  service.setPageTitle("Projects");

  const [projects, setProject] = useState([]);

  useEffect(() => {
    function fetchAllGroups() {
      service.getAllGroups().then(
        (res) => setProject([...res]),
        (err) => console.log("Error loading groups", err)
      );
    }
    fetchAllGroups();
  }, [projects]);

  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    service.createGroup(values).then(
      () => groupForm.resetForm(),
      (err) => console.log("error creating project", err)
    );
  }

  const groupForm = useFormik({
    initialValues: groupData,
    validationSchema: groupSchema,
    onSubmit,
  });

  return (
    <div className="main-container" id="Project-dashboard_Main_Container">
      <div className="con-header d-flex align-items-center justify-content-between">
        <div className="title">
          <h2>Groups</h2>
        </div>

        <div className="header-btn">
          <Button
            type="primary"
            text="New Group"
            modal={true}
            modalHeaderTitle="Create New Group"
            modalTarget="new-project-create"
            modalContext={
              <form className="my-4">
                <div className="mb-3">
                  <label className="form-label">Group Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={groupForm.handleChange}
                    value={groupForm.values.name}
                  />

                  <p className="invalid-data">
                    {groupForm.errors.name && groupForm.touched.name
                      ? groupForm.errors.name
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    type="text"
                    className="form-control"
                    onChange={groupForm.handleChange}
                    value={groupForm.values.description}
                  />
                  <p className="invalid-data">
                    {groupForm.errors.description &&
                    groupForm.touched.description
                      ? groupForm.errors.description
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label className="form-label">Purpose</label>
                  <input
                    name="purpose"
                    type="text"
                    className="form-control"
                    onChange={groupForm.handleChange}
                    value={groupForm.values.purpose}
                  />
                  <p className="invalid-data">
                    {groupForm.errors.purpose && groupForm.touched.purpose
                      ? groupForm.errors.purpose
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label className="form-label">Slots</label>
                  <input
                    className="form-control"
                    name="slots"
                    type="number"
                    onChange={groupForm.handleChange}
                    value={groupForm.values.slots}
                  />
                  <p className="invalid-data">
                    {groupForm.errors.slots && groupForm.touched.slots
                      ? groupForm.errors.slots
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <input
                    className="form-control"
                    name="amount"
                    type="number"
                    onChange={groupForm.handleChange}
                    value={groupForm.values.amount}
                  />
                  <p className="invalid-data">
                    {groupForm.errors.amount && groupForm.touched.amount
                      ? groupForm.errors.amount
                      : null}
                  </p>
                </div>
              </form>
            }
            modalFooterBtn={
              <>
                <button
                  data-bs-dismiss="modal"
                  className="secondary-btn"
                  onClick={groupForm.resetForm}
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                  onClick={groupForm.handleSubmit}
                  data-bs-dismiss={
                    groupForm.isValid && groupForm.dirty ? "modal" : null
                  }
                >
                  Create group
                </button>
              </>
            }
          />
        </div>
      </div>

      <div className="con-context">
        {projects?.length > 0 ? (
          <div className=" table-responsive">
            <table className="table">
              <thead>
                <tr className="header-row">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Budget (&#8358;)</th>
                  <th scope="col">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {projects?.map((project, key) => (
                  <tr key={key}>
                    <td>
                      <Link to="/projects/id">{key + 1}</Link>
                    </td>
                    <td>
                      <Link to="/projects/id">{project.name}</Link>
                    </td>
                    <td>
                      <Link to="/projects/id">{project.group_amount}</Link>
                    </td>
                    <td>
                      <Link to="/projects/id">{project.purpose_title}</Link>
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
