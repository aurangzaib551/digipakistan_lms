import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signOut } from "../store/actions/authActions";
import Loader from "../loader/loader";

const Info = ({ profile, uid, signOut }) => {
  // Checking LMS Status
  if (profile.lms) return <Redirect to="/dashboard" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  return profile.fullName ? (
    <div className="container my-5">
      <h1 className="text-center mx-3 display-4 fw-bold">
        Your Payment hasn't been verified.
      </h1>
      <div className="d-flex justify-content-center mt-3">
        <Button
          onClick={() => {
            setTimeout(() => {
              signOut();
            }, 400);
          }}
          variant="contained"
          className="outline"
          color="primary"
        >
          Log Out
        </Button>
      </div>
    </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
