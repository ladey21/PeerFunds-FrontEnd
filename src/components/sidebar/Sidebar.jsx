import React from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import service from "services/service";
import s from "./css/Sidebar.module.sass";

function Sidebar({ routes, doToggle, logout, role }) {
  const [query] = useSearchParams();
  return (
    <div
      className={`${s.main_sidebar}`}
      style={{ height: service.browserHeight() }}
    >
      <div className="d-flex- align-items-center justify-content-center">
        <ul className="pt-5">
          {routes.map((route, key) => (
            <div key={key}>
              {route.role === role.role ? (
                <NavLink
                  className={({ isActive }) => (isActive ? `${s.active}` : "")}
                  to={route.path}
                  onClick={doToggle}
                >
                  <li className="mb-4">{route.context}</li>
                </NavLink>
              ) : null}
              {route.role === "all" ? (
                <NavLink
                  key={key}
                  className={({ isActive }) =>
                    isActive &&
                    query.get("search") !== "view" &&
                    query.get("select") !== "check"
                      ? `${s.active}`
                      : ""
                  }
                  to={route.path}
                  onClick={doToggle}
                >
                  <li className="mb-4">{route.context}</li>
                </NavLink>
              ) : null}
            </div>
          ))}
        </ul>

        {service.isMobile ? (
          <>
            <li>
              <Link
                to="/login"
                onClick={logout}
                className={`${s.last_sidebar_item}`}
              >
                Logout
              </Link>
            </li>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Sidebar;
