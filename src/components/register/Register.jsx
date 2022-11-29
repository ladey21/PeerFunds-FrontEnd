import Message from "components/message/Message";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerValidationSchema from "schema/registerSchema";
import authService from "services/authService";

import service from "services/service";
import "./css/Register.sass";

function Register() {
  service.setPageTitle("Create new account");

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const registerData = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    password2: "",
  };

  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    authService.doRegister(values).then(
      () => {
        formik.resetForm();
        navigate({ pathname: "/login", search: "?__lgn=vlan" });
      },
      (err) => authService.handleRegisterError(err, setMsg)
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
          <Link to="/">Peer2Fund</Link>
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
            name="emailAddress"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
          />
          <p className="invalid-data">
            {formik.errors.emailAddress && formik.touched.emailAddress
              ? formik.errors.emailAddress
              : null}
          </p>
        </div>

        <div className="control-form mb-4">
          <label htmlFor="phoneNumber">Phone Number:</label> <br />
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
          <p className="invalid-data">
            {formik.errors.phoneNumber && formik.touched.phoneNumber
              ? formik.errors.phoneNumber
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
