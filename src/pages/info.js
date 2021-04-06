import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signOut } from "../store/actions/authActions";
import Loader from "../loader/loader";
import fbConfig from "../config/fbConfig";

const Info = ({ profile, uid, signOut }) => {
  // Object Destructuring
  const { push } = useHistory();

  // Checking LMS Status
  if (profile.lms) return <Redirect to="/dashboard" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  // Checking user is logged in or not
  if (profile.admin)
    return fbConfig
      .auth()
      .signOut()
      .then(() => {
        push("/");
        window.location.reload();
      });

  return profile.fullName ? (
    <div className="container my-5">
      <h1 className="text-center mx-3 display-4 fw-bold">
        We appreciate your interest but regret to inform that you are not
        providing access to LMS Portal due to non-verification of registration
        charges. If you think this is an error on the part of the programme, you
        can mail us at{" "}
        <a href="mailto:accounts@digipakistan.org">accounts@digipakistan.org</a>
      </h1>
      <h1 className="text-center mx-3 display-4 fw-bold">
        Roll # <span className="fw-light">{profile.rollNumber}</span>
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
