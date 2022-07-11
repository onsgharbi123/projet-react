import React from "react";
import { useField } from "formik";

export default function SelectFi({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <select className="form-control" {...field} {...props}>
        <option selected> Select job type</option>
        <option>web development</option>
        <option>Designer</option>
        <option>Manager</option>
        <option>Accaunting</option>
      </select>
    </div>
  );
}
