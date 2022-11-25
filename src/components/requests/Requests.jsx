import React from "react";
import { Link } from "react-router-dom";
import "./css/Requests.sass";

function Requests({ payload }) {
  console.log("for worker request", payload);

  const requests = [
    {
      title: "Trump Tower",
      status: "pending",
    },
    {
      title: "Trump Tower",
      status: "accepted",
    },
    {
      title: "Trump Tower",
      status: "accepted",
    },
    {
      title: "Trump Tower",
      status: "declined",
    },
  ];

  return (
    <div id="Requests_Main_Container">
      <div className="con-header mb-5">
        <h1>My Application Requests</h1>
      </div>

      <div className="con-context">
        <div className="context">
          {requests.map((elem, key) => (
            <Link to="/explore/id?view=requests" key={key}>
              <div className="con-apply">
                <div className="apply">
                  <h3 className="title">{elem.title}</h3>
                  <p className={`status ${elem.status}`}>{elem.status}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Requests;
