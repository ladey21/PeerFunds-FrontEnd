import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import service from "services/service";
import "./css/Login.sass";

function Login({ authStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMsg] = useState("");
  const [query] = useSearchParams();
  const navigate = useNavigate();

  service.setPageTitle("Login");

  function validate(callback) {
    if (!email || !password) {
      setMsg("Fill in all fields");
    } else callback();
  }

  function submit(evt) {
    evt.preventDefault();
    validate(() => {
      service.doLogin({ email, password }).then(
        (res) => {
          authStatus(res.accessToken);
          navigate({ pathname: "/overview" });
        },
        (err) => service.handleLoginError(err, setMsg)
      );
    });
  }

  return (
    <div className="container-login d-flex flex-column flex-lg-row justify-content-center">
      <div className="d-none d-lg-block col-lg-7 position-relative">
        <div className="img">
          <img
            src="https://plus.unsplash.com/premium_photo-1663054710563-598f084bdd42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80"
            alt=""
          />
        </div>
        <div className="overlay"></div>
        <div className="con-context">
          <h2 className="logo">
            <Link to="/">BrickX.</Link>
          </h2>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="con-right d-flex align-items-center justify-content-center">
          <div className="right px-3 px-lg-0">
            <header className="mb-3">
              <h3 className="bold">Welcome Back !</h3>
              <p className="text-ash-color">Sign in to continue</p>
            </header>

            {message ? <p className="msg">{message}</p> : ""}

            {query.get("__lgn") === "vlan" && !message ? (
              <div className="success-msg">
                You are now registered and can login.
              </div>
            ) : (
              ""
            )}

            <form className="py-4" onSubmit={submit}>
              <div className="control-form mb-3">
                <label htmlFor="email">Email:</label> <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMsg("");
                  }}
                />
              </div>

              <div className="control-form mb-4">
                <label htmlFor="password">Password:</label> <br />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMsg("");
                  }}
                />
              </div>

              <div className="control-form">
                <input
                  type="submit"
                  value={"Login"}
                  className="form-submit primary-btn"
                />
              </div>
            </form>
            <p>
              Don't have an account? &nbsp;
              <Link className="link" to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
