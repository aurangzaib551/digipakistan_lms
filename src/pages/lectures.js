import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Lectures = ({ profile, uid }) => {
  //   Object Destructuring
  const { push } = useHistory();
  const { course } = profile;

  // Checking LMS Status
  if (!profile.lms) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };

  return profile.fullName ? (
    <>
      <Nav />
      <div className="container courses mt-5 d-flex flex-column flex-md-row align-items-center align-items-md-start flex-wrap flex-lg-nowrap justify-content-between">
        {course[0] && (
          <>
            <Paper className="p-3 text-center course mt-4 border mx-md-3">
              <h3 className="mb-0 fw-bold">
                {course[0]["First Course Title"]}
              </h3>
              <h6 className="mb-0 fw-light mt-2">
                {course[0]["First Course Name"].name}
              </h6>
              <p className="mb-0 fw-bold mt-2">
                status:{" "}
                <span
                  className={
                    course[0]["First Course Name"].status
                      ? "badge bg-success"
                      : "badge bg-danger"
                  }
                >
                  {course[0]["First Course Name"].status ? "Online" : "Offline"}
                </span>
              </p>
              {course[0]["First Course Name"].status ? (
                <Button
                  onClick={() => go(course[0]["First Course Name"].link)}
                  variant="contained"
                  className="outline mt-2"
                  color="primary"
                >
                  Open Portal
                </Button>
              ) : (
                <span className="fw-bold text-danger mt-2 d-inline-block">
                  Go to our website and pay your this course fee
                </span>
              )}
            </Paper>
            {course[1]["Second Course Title"] && (
              <Paper className="p-3 course text-center mt-4 border mx-md-3">
                <h3 className="mb-0 fw-bold">
                  {course[1]["Second Course Title"]}
                </h3>
                <h6 className="mb-0 fw-light mt-2">
                  {course[1]["Second Course Name"].name}
                </h6>
                <p className="mb-0 fw-bold mt-2">
                  status:{" "}
                  <span
                    className={
                      course[1]["Second Course Name"].status
                        ? "badge bg-success"
                        : "badge bg-danger"
                    }
                  >
                    {course[1]["Second Course Name"].status
                      ? "Online"
                      : "Offline"}
                  </span>
                </p>
                {course[1]["Second Course Name"].status ? (
                  <Button
                    onClick={() => go(course[1]["Second Course Name"].link)}
                    variant="contained"
                    className="outline mt-2"
                    color="primary"
                  >
                    Open Portal
                  </Button>
                ) : (
                  <span className="fw-bold text-danger mt-2 d-inline-block">
                    Go to our website and pay your this course fee
                  </span>
                )}
              </Paper>
            )}
            {course[2]["Third Course Title"] && (
              <Paper className="p-3 course text-center mt-4 border mx-md-3">
                <h3 className="mb-0 fw-bold">
                  {course[2]["Third Course Title"]}
                </h3>
                <h6 className="mb-0 fw-light mt-2">
                  {course[2]["Third Course Name"].name}
                </h6>
                <p className="mb-0 fw-bold mt-2">
                  status:{" "}
                  <span
                    className={
                      course[2]["Third Course Name"].status
                        ? "badge bg-success"
                        : "badge bg-danger"
                    }
                  >
                    {course[2]["Third Course Name"].status
                      ? "Online"
                      : "Offline"}
                  </span>
                </p>
                {course[2]["Third Course Name"].status ? (
                  <Button
                    onClick={() => go(course[2]["Third Course Name"].link)}
                    variant="contained"
                    className="outline mt-2"
                    color="primary"
                  >
                    Open Portal
                  </Button>
                ) : (
                  <span className="fw-bold text-danger mt-2 d-inline-block">
                    Go to our website and pay your this course fee
                  </span>
                )}
              </Paper>
            )}
          </>
        )}
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

export default connect(mapStateToProps)(Lectures);
