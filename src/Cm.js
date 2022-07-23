import React from "react";
import Style from "./Compte.module.scss";

export default function Cm(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  return (
    <div>
      <label className={Style.label}>{label}</label>
      <br />
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
}
