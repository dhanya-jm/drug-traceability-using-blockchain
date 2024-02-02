import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function SignUp() {
  const initialState = {
    fname: "",
    cname: "",
    email: "",
    password: "",
    userType: "",
    secretKey: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fname, cname, email, password, userType, secretKey } = formData;

    if (userType === "Admin" && secretKey !== "#$dk61918#") {
      alert("Invalid Admin");
    } else {
      console.log(fname, cname, email, password);

      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          cname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
            setFormData(initialState); // Reset form fields to initial values
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div style={{ paddingTop: "100px" }} className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            Register As
            <Row>
              <Col>
                <Form.Check
                  type="radio"
                  name="userType"
                  value="User"
                  label="User"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="userType"
                  value="Admin"
                  label="Admin"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>
          {formData.userType === "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                name="secretKey"
                className="form-control"
                placeholder="Secret Key"
                value={formData.secretKey}
                onChange={handleChange}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              name="fname"
              className="form-control"
              placeholder="First name"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Manufacture Name</label>
            <input
              type="text"
              name="cname"
              className="form-control"
              placeholder="Enter Company Name"
              value={formData.cname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
