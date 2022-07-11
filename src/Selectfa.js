import React from "react";
import { useField } from "formik";

export default function Selectfa({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <select className="form-control" {...field} {...props}>
        <option selected> Select le Niveau de formation</option>
        <option>bac+1</option>
        <option>bac+2</option>
        <option>bac+3</option>
        <option>bac+4</option>
        <option>bac+5 et plus</option>
        <option>BTS - BTP</option>
      </select>
    </div>
  );
}
