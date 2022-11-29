import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Previous.sass";

function Previous({ route }) {
  const navigate = useNavigate()
  return (
    <div id="Previous_Main_Container" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
}
export default Previous;
