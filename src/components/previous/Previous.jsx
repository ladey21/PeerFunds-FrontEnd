import React from "react";
import { Link } from "react-router-dom";
import "./css/Previous.sass";

function Previous({ route }) {
  return (
    <div id="Previous_Main_Container">
      <Link to={route}>
        <i className="fa-solid fa-chevron-left"></i>
      </Link>
    </div>
  );
}
export default Previous;
