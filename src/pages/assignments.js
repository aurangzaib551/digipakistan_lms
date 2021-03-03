import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";

const Assignments = ({ profile, uid }) => {
  // Checking LMS Status
  if (!profile.lms) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;
  return profile ? (
    <>
      <Nav />
      <div className="container my-5">
        <h1 className="text-center fw-bold">
          Your assignments will be uploaded soon
        </h1>
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

export default connect(mapStateToProps)(Assignments);
