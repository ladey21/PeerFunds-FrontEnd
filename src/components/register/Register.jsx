import Message from "components/message/Message";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerValidationSchema from "schema/registerSchema";

import service from "services/service";
import "./css/Register.sass";

function Register() {
  service.setPageTitle("Create new account");

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const registerData = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    password2: "",
    userType: "",
    jobType: "",
    isContractor: false,
    isWorker: false,
  };

  function onSubmit(values) {
    if (values.isContractor) values.userType = "Contractor";
    else values.userType = "Worker";
    service.doRegister(values).then(
      (res) => {
        formik.resetForm();
        navigate({ pathname: "/login", search: "?__lgn=vlan" });
      },
      (err) => service.handleRegisterError(err, setMsg)
    );
  }

  const formik = useFormik({
    initialValues: registerData,
    validationSchema: registerValidationSchema,
    onSubmit,
  });

  return (
    <div className="container-register">
      <header className="mb-4">
        <h3 className="bold">
          <Link to="/">BrickX.</Link>
        </h3>
        <p className="text-ash-color">Create a new account</p>
      </header>

      {msg ? <Message msg={msg} /> : null}

      <form className="py-4" onSubmit={formik.handleSubmit}>
        <div className="control-form mb-4">
          <label htmlFor="first-name">First Name:</label> <br />
          <input
            type="text"
            id="first-name"
            placeholder="Enter First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <p className="invalid-data">
            {formik.errors.firstName && formik.touched.firstName
              ? formik.errors.firstName
              : null}
          </p>
        </div>

        <div className="control-form mb-4">
          <label htmlFor="last-name">Last Name:</label> <br />
          <input
            type="text"
            id="last-name"
            placeholder="Enter Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <p className="invalid-data">
            {formik.errors.lastName && formik.touched.lastName
              ? formik.errors.lastName
              : null}
          </p>
        </div>

        <div className="control-form mb-4">
          <label htmlFor="email">Email:</label> <br />
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <p className="invalid-data">
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null}
          </p>
        </div>

        <div className="control-form mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            name="gender"
            id="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option defaultValue="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="invalid-data">
            {formik.errors.gender && formik.touched.gender
              ? formik.errors.gender
              : null}
          </p>
        </div>

        <div className="control-form mb-4">
          <label htmlFor="password">Password:</label> <br />
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <p className="invalid-data">
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null}
          </p>
        </div>

        <div className="control-form mb-4">
          <label htmlFor="password2">Confirm Password:</label> <br />
          <input
            type="password"
            id="password2"
            placeholder="Confirm password"
            name="password2"
            value={formik.values.password2}
            onChange={formik.handleChange}
          />
          <p className="invalid-data">
            {formik.errors.password2 && formik.touched.password2
              ? formik.errors.password2
              : null}
          </p>
        </div>

        <div className="control-check">
          <p className="label">User Type:</p>

          <div className="my-3">
            <div className="d-flex align-items-center gap-4 mb-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="user1"
                  name="isContractor"
                  value={formik.values.isContractor}
                  onChange={formik.handleChange}
                  disabled={formik.values.isWorker}
                />
                <label className="form-check-label" htmlFor="user1">
                  Contractor
                </label>
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="user2"
                  name="isWorker"
                  value={formik.values.isWorker}
                  onChange={formik.handleChange}
                  disabled={formik.values.isContractor}
                />
                <label className="form-check-label" htmlFor="user2">
                  Worker
                </label>
              </div>
            </div>
          </div>

          {formik.values.isWorker ? (
            <>
              <div className="control-form mb-4">
                <label htmlFor="select-job" className="mb-3">
                  Select Job title:
                </label>
                <br />
                <select
                  className="form-select"
                  name="jobType"
                  id="select-job"
                  onChange={formik.handleChange}
                  value={formik.values.jobType}
                >
                  <option defaultValue="">Select title</option>
                  <option value="COST_MANAGER">Cost Manager</option>
                  <option value="INSPECTOR">Inspector</option>
                </select>
              </div>
            </>
          ) : null}
        </div>

        <div className="control-form">
          <input
            type="submit"
            value={"Register"}
            className="form-submit primary-btn"
          />
        </div>
      </form>
      <p>
        Already have an account? &nbsp;
        <Link className="link" to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default Register;
