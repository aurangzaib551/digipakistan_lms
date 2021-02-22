import React, { useState, useLayoutEffect } from "react";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { signIn, clearAll } from "../store/actions/authActions";
import { Redirect, useHistory } from "react-router-dom";
import ToastServive from "react-material-toast";

const toast = ToastServive.new({
  place: "topRight",
  duration: 2,
  maxCount: 1,
});

const LogIn = (props) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //   Object Destructuring
  const { replace } = useHistory();
  const { login, msg, clearAll, isLoggedIn } = props;

  useLayoutEffect(() => {
    if (msg === "Sign in successfully") {
      toast.success(msg, () => {
        clearAll();
        setFormData({
          email: "",
          password: "",
        });
        replace("/dashboard");
      });
    } else if (msg) {
      toast.error(msg, () => clearAll());
    }
  }, [msg, clearAll, replace]);

  if (!isLoggedIn) return <Redirect to="/dashboard" />;

  //   Getting values
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Sending Data
  const handleSubmit = (e) => {
    e.preventDefault();

    setBtnLoading(true);

    // logging in user
    login(formData, setBtnLoading);
  };

  return (
    <div className="login container my-5">
      <div className="d-flex justify-content-center">
        <img
          src="https://i.ibb.co/LYC7rpt/logoPNG.png"
          alt="DigiPAKISTAN"
          width="200"
          height="200"
        />
      </div>

      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center mx-3 fw-bold">Log In</h1>

        <form className="form" onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            required
            className="mt-3"
            value={formData.email}
            onChange={handleChange}
            label="Email Address"
            fullWidth
          />
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-3"
            label="Password"
            required
            fullWidth
          />

          <Button
            type="submit"
            disabled={btnLoading}
            variant="contained"
            className="custom-button mt-3"
            fullWidth
          >
            {btnLoading && <CircularProgress className="loader me-2" />}{" "}
            {btnLoading ? "Logging in" : "Log In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    msg: state.auth.msg,
    isLoggedIn: state.firebase.auth.isEmpty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (formData, setBtnLoading) =>
      dispatch(signIn(formData, setBtnLoading)),
    clearAll: () => dispatch(clearAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
