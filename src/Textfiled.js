import React from "react";
import { ErrorMessage, useField } from "formik";

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <input
        className={`form-control  ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      />

      <ErrorMessage component="div" name={field.name} />
    </div>
  );
}
