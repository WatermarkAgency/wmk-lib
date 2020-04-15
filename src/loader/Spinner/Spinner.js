import React from "react";
import "wmk-lib/dist/Spinner.css";

const Spinner = () => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
      position: "absolute",
      top: 0,
      left: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5
    }}
  >
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
