import { useState } from "react";
import { useFormik } from "formik";

import "./css/Profile.sass";
import Button from "components/button/Button";
import service from "services/service";
import { Link, useSearchParams } from "react-router-dom";
import Previous from "components/previous/Previous";

function Profile({ payload, currentUser }) {
  service.setPageTitle("My Profile");

  const [query] = useSearchParams();

  // const [user, setUser] = useState({
  //   firstName: "Zainab",
  //   lastName: "Sanni",
  //   email: "zainabsanni@gmail.com",
  //   type: payload?.role === "Worker" ? "" : payload?.role?.toLowerCase(),
  //   job: "Cost Manager",
  //   bio: "I experiment with liquid art photography. Extended licenses and some of my best art photos available through my website link below.",
  //   gender: "Female",
  // });

  const [user, setUser] = useState(currentUser);

  console.log(currentUser)

  const formik = useFormik({
    initialValues: user,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setUser(() => ({ ...values }));
      console.log("state value", JSON.stringify(user, null, 2));
    },
  });

  const reviewForm = useFormik({
    initialValues: {
      rating: "",
      body: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div id="Profile_Main_Container">
      <div className="con-header d-lg-flex align-items-center justify-content-between mb-4 sections">
        <div>
          {query.get("search") === "view" || query.get("select") === "check" ? (
            <div className="mb-5">
              <Previous route="/projects/id" />
            </div>
          ) : null}

          <div className="d-sm-flex align-items-center gap-3 gap-lg-4 mb-lg-4">

            <div className="user-data d-flex align-items-center justify-content-lg-center gap-4">
              <div className="username">
                {user.firstName} {user.lastName}
              </div>

              {user.type &&
              query.get("search") !== "view" &&
              query.get("select") !== "check" ? (
                <div
                  className="user-type"
                  title="Contractor User Type - Contractor creates projects and assign jobs to workers."
                >
                  {user.type}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="d-flex align-items-start gap-5">

          {query.get("select") === "check" ? (
            <>
              <Link to="/projects/id">
                <button className="primary-btn">Accept</button>
              </Link>
              <Link to="/projects/id">
                <button className="secondary-btn">Decline</button>
              </Link>
            </>
          ) : null}

          {query.get("select") !== "check" && query.get("search") !== "view" ? (
            <div className="edit-user-btn py-3 ms-lg-5">
              <Button
                text="Edit Your Profile"
                modal
                modalTarget="user-edit-profile"
                modalHeaderTitle="Edit Profile"
                modalContext={
                  <>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label">
                        Bio
                      </label>
                      <input
                        className="form-control"
                        id="bio"
                        name="bio"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.bio}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="job" className="form-label">
                        Job description
                      </label>
                      <input
                        className="form-control"
                        id="job"
                        name="job"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.job}
                      />
                    </div>

                    <div className="mb-3">
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
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </>
                }
                modalFooterBtn={
                  <>
                    <>
                      <button data-bs-dismiss="modal" className="secondary-btn">
                        Close
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
                  </>
                }
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="con-context">
        <div className="context sections">
          <div className="header mb-4">
            <h3 className="section-title">Professional Details:</h3>
          </div>

          <div className="content row">
            <div className="col-12 col-lg-3">
              <div className="mb-5 mb-lg-0">
                <h3>Full Name</h3>
                <p>
                  {user.firstName}&nbsp;{user.lastName}
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-5 mb-lg-0">
                <h3>Email</h3>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-5 mb-lg-0">
                <h3>Phone Number</h3>
                <p>{user.phoneNumber}</p>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-5 mb-lg-0">
                <h3>Role</h3>
                <p>{user.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
