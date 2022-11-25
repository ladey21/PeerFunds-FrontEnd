import { useState } from "react";
import { useFormik } from "formik";

import "./css/Profile.sass";
import Button from "components/button/Button";
import service from "services/service";
import { Link, useSearchParams } from "react-router-dom";
import Previous from "components/previous/Previous";

function Profile({ payload }) {
  service.setPageTitle("My Profile");

  const [query] = useSearchParams();

  const [user, setUser] = useState({
    firstName: "Zainab",
    lastName: "Sanni",
    email: "zainabsanni@gmail.com",
    type: payload.role === "Worker" ? "" : payload.role.toLowerCase(),
    job: "Cost Manager",
    bio: "I experiment with liquid art photography. Extended licenses and some of my best art photos available through my website link below.",
    gender: "Female",
  });

  console.log(payload.role);

  const reviews = [
    {
      reviewer: {
        firstname: "Ife",
        lastname: "Jeremiah",
        job: "Manager",
        type: "contractor",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis inventore eius porro nisi perspiciatis in, repellat illum commodi iure.",
    },
    {
      reviewer: {
        firstname: "Ife",
        lastname: "Jeremiah",
        job: "Manager",
        type: "contractor",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis inventore eius porro nisi perspiciatis in, repellat illum commodi iure.",
    },
    {
      reviewer: {
        firstname: "Ife",
        lastname: "Jeremiah",
        job: "Manager",
        type: "contractor",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis inventore eius porro nisi perspiciatis in, repellat illum commodi iure.",
    },
    {
      reviewer: {
        firstname: "Ife",
        lastname: "Jeremiah",
        job: "Manager",
        type: "contractor",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis inventore eius porro nisi perspiciatis in, repellat illum commodi iure.",
    },
  ];

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
            <div className="user-img">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>

            <div className="user-data d-flex align-items-center justify-content-lg-center gap-4">
              <div className="username">
                {user.firstName} {user.lastName}
              </div>

              {user.type &&
              (query.get("search") !== "view" &&
                query.get("select") !== "check") ? (
                <div
                  className="user-type"
                  title="Contractor User Type - Contractor creates projects and assign jobs to workers."
                >
                  {user.type}
                </div>
              ) : null}
            </div>
          </div>

          <div className="user-bio">
            <p>
              I experiment with liquid art photography. Extended licenses and
              some of my best art photos available through my website link
              below.
            </p>
          </div>
        </div>

        <div className="d-flex align-items-start gap-5">
          <div className="con-rating mb-3 mb-lg-0 me-lg-5">
            <div className="rating-text mb-2">4.5 Ratings</div>
            <div>
              <div className="rating-icon">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
          </div>

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

          {query.get("search") === "view" ? (
            <div className="view-user-btn py-3 ms-lg-5">
              <Button
                text="Leave Review"
                modal
                modalTarget="view-user-profile"
                modalHeaderTitle="Review Worker"
                modalContext={
                  <>
                    <div className="mb-3">
                      <label htmlFor="rating" className="form-label">
                        Rating
                      </label>
                      <select
                        className="form-select"
                        name="rating"
                        id="rating"
                        onChange={reviewForm.handleChange}
                        value={reviewForm.values.rating}
                      >
                        <option defaultValue="">Select review</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="body" className="form-label">
                        Review
                      </label>
                      <textarea
                        className="form-control"
                        id="body"
                        name="body"
                        onChange={reviewForm.handleChange}
                        value={reviewForm.values.body}
                      />
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
                        onClick={reviewForm.handleSubmit}
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
                <h3>Gender</h3>
                <p>{user.gender}</p>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-5 mb-lg-0">
                <h3>Profession</h3>
                <p>{user.job}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="con-review sections">
        <div className="header">
          <h3 className="section-title">Reviews:</h3>
        </div>

        <div className="context my-5">
          {reviews.map((review, key) => (
            <div className="review-cards" key={key}>
              <div className="title d-flex align-items-center gap-3 mb-3">
                <div className="user-image">
                  <img
                    src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    alt=""
                  />
                </div>
                <div className="d-lg-flex align-items-start gap-3">
                  <div>
                    <div className="user-name">
                      {review.reviewer.firstname}&nbsp;
                      {review.reviewer.lastname}
                    </div>
                    <div className="user-title">{review.reviewer.job}</div>
                  </div>
                  <div>
                    <div className="user-detail">{review.reviewer.type}</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <p>{review.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;
