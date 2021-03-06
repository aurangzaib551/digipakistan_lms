import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import Avatar from "@material-ui/core/Avatar";

const Profile = ({ profile, uid }) => {
  // Checking LMS Status
  if (!profile.lms) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  return profile ? (
    <>
      <Nav />
      <div className="container profile my-5">
        <div className="d-flex justify-content-center">
          <Avatar className="avatar">{profile.initials}</Avatar>
        </div>
        <h1 className="fw-bold">
          Name:{" "}
          <span className="fw-normal text-capitalize">{profile.fullName}</span>
        </h1>
        <h1 className="fw-bold">
          Father Name:{" "}
          <span className="fw-normal text-capitalize">
            {profile.fatherName}
          </span>
        </h1>
        <h1 className="fw-bold">
          Roll #:{" "}
          <span className="fw-normal text-capitalize">
            {profile.rollNumber}
          </span>
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

export default connect(mapStateToProps)(Profile);
