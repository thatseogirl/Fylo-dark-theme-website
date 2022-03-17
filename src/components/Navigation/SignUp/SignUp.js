import React from "react";
import { Formik, Field, Form } from "formik";
import Subscribe from "../../Body/Subscribe/Subscribe";
import Footer from "../../Footer/Footer";
import Navigation from "../Navigation";
import Validation from "./Validation";

export default function SignUp() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  };
  const userSchema = Validation;
  return (
    <div>
      <Navigation />
      <div className="signup">
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(values) => {
            console.log(values);
            alert("Account Created");
          }}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <div className="fixed-height">
                <div className="form_group">
                  {errors.firstName && touched.firstName ? (
                    <div className="error">{errors.firstName}</div>
                  ) : null}
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter Firstname"
                    className="form_group_field"
                  ></Field>
                </div>
                <div className="form_group">
                  {errors.lastName && touched.lastName ? (
                    <div className="error">{errors.lastName}</div>
                  ) : null}
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Lastname"
                    className="form_group_field"
                  ></Field>
                </div>
                <div className="form_group">
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    className="form_group_field"
                  ></Field>
                </div>
                <div className="form_group">
                  {errors.confirmEmail && touched.confirmEmail ? (
                    <div className="error">{errors.confirmEmail}</div>
                  ) : null}
                  <Field
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    placeholder="confirm email"
                    className="form_group_field"
                  ></Field>
                </div>
                <div className="form_group">
                  {errors.password && touched.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className="form_group_field"
                  ></Field>
                </div>
                <div className="form_group">
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error">{errors.confirmPassword}</div>
                  ) : null}
                  <Field
                    type="password"
                    id="congirmPassword"
                    name="confirmPassword"
                    placeholder="confirm password"
                    className="form_group_field"
                  ></Field>
                </div>
              </div>
              <button type="submit" className="form_group_field_button">
                create account
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
