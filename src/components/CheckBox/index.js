import React from "react";
export default function CheckBox({ enabled, onChange }) {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        onChange(!enabled);
      }}
    >
      [ {enabled ? "X" : " "} ]
    </div>
  );
}
