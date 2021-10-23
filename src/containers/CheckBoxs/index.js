import React, { useState } from "react";
import { sizeArrayCheckbox } from "../../Constants";
import CheckBox from "../../components/CheckBox";

export default function CheckBoxs() {
  const [checkBoxs, setCheckBoxs] = useState(
    new Array(sizeArrayCheckbox).fill(false)
  );

  return (
    <>
      <div style={{ display: "flex" }}>
        <CheckBox
          enabled={checkBoxs.every((checkBox) => checkBox)}
          onChange={(newVal) => {
            updateAll(newVal);
          }}
        />{" "}
        Select All
      </div>
      {checkBoxs.map((checkBox, index) => (
        <div style={{ display: "flex" }} id={index}>
          <CheckBox
            enabled={checkBox}
            onChange={(newVal) => {
              onChange(newVal, index);
            }}
          />
          Item {index}
        </div>
      ))}
    </>
  );

  function onChange(newVal, index) {
    checkBoxs[index] = newVal;
    setCheckBoxs([...checkBoxs]);
  }

  function updateAll(newVal) {
    setCheckBoxs(new Array(sizeArrayCheckbox).fill(newVal));
    console.log(checkBoxs);
  }
}
