import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import routes from "utils/routes";

import service from "services/service";
import s from "./css/Template.module.sass";
import "./css/Template.sass";
import { useState } from "react";

function Template({ logout, payload }) {
  const [toggle, setToggle] = useState("d-none");

  function doToggle() {
    setToggle(toggle === "d-none" ? "d-block" : "d-none");
  }

  function doToggleWithScroll() {
    setToggle(toggle === "d-none" ? "d-block" : "d-none");
  }

  function doSlideOut() {
    setToggle("d-none");
  }

  return (
    <div className="template-container p-2" id="Template_Main_Container">
      <Header logout={logout} doToggle={doToggle} />

      <div className="d-flex align-items-start">
        <div className={`${toggle} col-8 col-lg-2 d-lg-block`}>
          <Sidebar
            routes={routes}
            doToggle={doToggleWithScroll}
            logout={logout}
            role={payload}
          />
        </div>

        <div className="col-12 col-lg-10" onClick={doSlideOut}>
          <div
            className={`${s.overview_container} d-flex align-items-center justify-content-between`}
            style={{ height: service.browserHeight() }}
          >
            <i></i>
            <div className={s.main_container}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
