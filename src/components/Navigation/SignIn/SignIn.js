import { Formik, Field, Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "../../Body/Subscribe/Subscribe";
import Footer from "../../Footer/Footer";
import Navigation from "../Navigation";
import Validation from "./Validation";

export default function SignIn() {
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
      <div className="signin">
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(values) => {console.log(values)
          alert("Account Created, please LogIn")
        }}
        >
          {({ values , errors, touched }) => (
            <Form className="formgroup">
              <div>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter Firstname"
                ></Field>
                {errors.firstName && touched.firstName ? (
                  <div className="error">{errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Lastname"
                ></Field>
              </div>
              <div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                ></Field>
              </div>
              <div>
                <Field
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  placeholder="confirm email"
                ></Field>
              </div>
              <div>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                ></Field>
              </div>
              <div>
                <Field
                  type="password"
                  id="congirmPassword"
                  name="confirmPassword"
                  placeholder="confirm password"
                ></Field>
              </div>
              {/* <Link type="submit" to="/Login">
                Create Account
              </Link> */}
              <button type="submit">Create Account</button>
              <div className="existinguser">
                <p>
                  Already have an Account?
                  <Link to="/Login">LogIn</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
