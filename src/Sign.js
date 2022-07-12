import React, { useContext } from "react";
import { Formik, form } from "formik";
import TextField from "./Textfiled";
import SelectFi from "./Selectfi";
import SelectFa from "./Selectfa";
import Gender from "./Gender";
import * as Yup from "yup";
import { Demandecontext } from "./Demandecontext";

export default function Sign() {
  const { demande, setdemande } = useContext(Demandecontext);
  const validate = Yup.object({
    fullname: Yup.string()
      .max(15, "Must be  15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    phone: Yup.string().max(8, "Must be  8 number ").required("Required"),
    phone: Yup.string().min(8, "Must be  8 number ").required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          phone: "",
          job: "",
          localisation: "",
          niveau: "",
          gender: "",
          file: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div>
            {console.log(formik.values)}

            <form>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-user" />{" "}
                  </span>
                </div>
                <TextField name="fullname" placeholder="Fullname" type="text" />
              </div>{" "}
              {/* form-group// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-envelope" />{" "}
                  </span>
                </div>
                <TextField
                  name="email"
                  placeholder="Email address"
                  type="email"
                />
              </div>{" "}
              {/* form-group// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-phone" />{" "}
                  </span>
                </div>
                <select className="custom-select" style={{ maxWidth: 120 }}>
                  <option selected>+216</option>
                  <option value={1}>+972</option>
                  <option value={2}>+198</option>
                  <option value={3}>+701</option>
                </select>
                <TextField
                  name="phone"
                  placeholder="Phone number"
                  type="text"
                />
              </div>{" "}
              {/* form-group// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-building" />{" "}
                  </span>
                </div>
                <SelectFi name="job " />
              </div>{" "}
              {/* form-group end.// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-lock" />{" "}
                  </span>
                </div>
                <TextField
                  name="localisation"
                  placeholder="Localisation"
                  type="text"
                />
              </div>{" "}
              {/* form-group// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-lock" />{" "}
                  </span>
                </div>
                <SelectFa name="niveau" />
              </div>{" "}
              {/* form-group// */}
              <Gender />
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={() => setdemande([...demande, initialValues])}
                >
                  {" "}
                  Publier
                </button>
              </div>{" "}
              {/* form-group// */}
              {/* form-group// */}
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
