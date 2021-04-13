import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import Paper from "@material-ui/core/Paper";
import { useMediaQuery } from "react-responsive";

const Policy = ({ profile, uid }) => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });
  // Checking LMS Status
  if (!profile.lms) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  return profile ? (
    <>
      <Nav />
      <div
        className="bg-white mt-3 mt-lms"
        style={{ marginLeft: isLaptop ? 50 : 390 }}
      >
        <h1 className="fw-bold text-uppercase">Policy</h1>
      </div>
      <div
        style={{
          backgroundColor: "#eee",
          height: isLaptop ? "auto" : 700,
        }}
      >
        <div
          className="container d-flex flex-lg-row flex-column profile py-5"
          style={{
            position: "relative",
            left: isLaptop ? 0 : 150,
            width: isLaptop ? "100%" : "71vw",
          }}
        >
          <Paper elevation={10} className="p-3 border w-100">
            <h3 className="fw-bold">DISCLAIMER:</h3>
            <p className="mb-0">
              All the training material uploaded in DigiPAKISTAN LMS is
              exclusive, confidential and may also be legally privileged. It is
              intended solely for the use of registered students of their
              respective course. Downloading, dissemination, distribution,
              copying or disclosure of any course material, entirely or
              partially is strictly prohibited unless authorized by
              DigiPAKISTAN. Violation of this notice is unlawful and may trigger
              legal proceedings.
            </p>
          </Paper>
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

export default connect(mapStateToProps)(Policy);
