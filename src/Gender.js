import React from "react";
import { useField } from "formik";
import ss from "./Ajoutdemande.module.scss";

export default function Gender({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className="form-group" {...field} {...props}>
        <label>Gender:</label>
        <br />
        <label className={ss?.la}>
          <input
            type="radio"
            name="gender"
            required
            defaultValue="Male"
            defaultChecked
            className={ss?.la}
          />{" "}
          Male
        </label>
        <label className={ss?.la}>
          <input type="radio" name="gender" required defaultValue="Female" />{" "}
          Female
        </label>
        <label className={ss?.la}>
          <input type="radio" name="gender" required defaultValue="Other" />{" "}
          Other
        </label>
        <span className="Error" />
      </div>
    </div>
  );
}
