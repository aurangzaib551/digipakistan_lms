import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import { useMediaQuery } from "react-responsive";
import Input from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

const HelpCenter = ({ profile, uid }) => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  // State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Getting values from input fields and setting in state (formData)
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  // Validating the input fields
  const validate = () => {
    const errors = {};

    // Regular Expressions
    const charactersRegEx = /^[a-zA-Z. ]+$/;
    const numberRegEx = /^[+0-9]{11,}$/;
    const emailRegEx = /^[\w_.-]+@([\w-]+\.)+\w{2,4}$/;

    if (formData.firstName.trim() === "") {
      errors.firstName = "First name mustn't be empty";
    } else if (!charactersRegEx.test(formData.firstName)) {
      errors.firstName = "Invalid First Name";
    }

    if (formData.lastName.trim() === "") {
      errors.lastName = "Last name mustn't be empty";
    } else if (!charactersRegEx.test(formData.lastName)) {
      errors.lastName = "Invalid Last Name";
    }

    if (formData.contactNumber.trim() === "") {
      errors.contactNumber = "Contact number mustn't be empty";
    } else if (!numberRegEx.test(formData.contactNumber)) {
      errors.contactNumber = "Invalid Contact Number";
    }

    if (formData.emailAddress.trim() === "") {
      errors.emailAddress = "Email address mustn't be empty";
    } else if (!emailRegEx.test(formData.emailAddress)) {
      errors.emailAddress = "Invalid Email Address";
    }

    if (formData.subject.trim() === "") {
      errors.subject = "Subject mustn't be empty";
    }

    if (formData.message.trim() === "") {
      errors.message = "Message mustn't be empty";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  // Sending Data
  const handleSubmit = (event) => {
    event.preventDefault();

    // Checking Errors in input fields
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    window.location.href = `mailto:helpdesk@digipakistan.org?subject=${formData.subject}&body=${formData.message}%0D%0A%0D%0ASender Name: ${formData.firstName}%20${formData.lastName} %0D%0ASender Contact Number: ${formData.contactNumber} %0ASender Email Address: ${formData.emailAddress}%0A%0D`;
    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      emailAddress: "",
      subject: "",
      message: "",
    });
  };

  // Checking LMS Status
  if (!profile.lms) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;
  return profile ? (
    <>
      <Nav />
      <div
        className="container my-4 mt-lms"
        style={{
          position: "relative",
          left: isLaptop ? 0 : 150,
          width: isLaptop ? "100%" : "71vw",
        }}
      >
        <h1 className="text-center fw-bold">Help Center</h1>

        <div className="ps-sm-3 px-3 d-flex flex-column justify-content-center">
          <h1 className="fw-bold mb-sm-0">Got a Question?</h1>
          <p className="text-justify">
            Is there something you can’t find an answer to or do you have
            something else you need help with? Let us know by filling out the
            form below!
          </p>

          <form onSubmit={handleSubmit} className="overflow-hidden">
            <div className="row g-4">
              <div className="col-sm-6 pe-4 pe-sm-0">
                <Input
                  variant="standard"
                  label="First Name"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                />
                {errors.firstName && (
                  <Alert severity="error" variant="filled">
                    {errors.firstName}
                  </Alert>
                )}
              </div>
              <div className="col-sm-6 pe-4">
                <Input
                  variant="standard"
                  label="Last Name"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                />
                {errors.lastName && (
                  <Alert severity="error" variant="filled">
                    {errors.lastName}
                  </Alert>
                )}
              </div>
              <div className="col-sm-6 pe-4 pe-sm-0">
                <Input
                  variant="standard"
                  label="Contact Number"
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  fullWidth
                />
                {errors.contactNumber && (
                  <Alert severity="error" variant="filled">
                    {errors.contactNumber}
                  </Alert>
                )}
              </div>
              <div className="col-sm-6 pe-4">
                <Input
                  variant="standard"
                  label="Email Address"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  fullWidth
                />
                {errors.emailAddress && (
                  <Alert severity="error" variant="filled">
                    {errors.emailAddress}
                  </Alert>
                )}
              </div>
              <div className="col-12 pe-4">
                <Input
                  variant="standard"
                  label="Subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  fullWidth
                />
                {errors.subject && (
                  <Alert severity="error" variant="filled">
                    {errors.subject}
                  </Alert>
                )}
              </div>
              <div className="col-12 pe-4">
                <Input
                  variant="standard"
                  label="Message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={8}
                />
                {errors.message && (
                  <Alert severity="error" variant="filled">
                    {errors.message}
                  </Alert>
                )}
              </div>
              <div className="col-12 pe-4">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className="custom-button"
                >
                  Send
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(HelpCenter);
