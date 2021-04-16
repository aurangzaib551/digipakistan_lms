import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "react-responsive";
import { data } from "./data";

const Lectures = ({ profile, uid }) => {
  //   Object Destructuring
  const { push } = useHistory();
  const { course } = profile;

  const isLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const isLaptop2 = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const isTab = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 340px)",
  });

  // Checking LMS Status
  if (!profile.lms && !profile.admin) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };

  return profile.fullName || profile.name ? (
    <>
      <Nav />
      <div
        className="bg-white mt-3 mt-lms"
        style={{ marginLeft: isLaptop2 ? 50 : 335 }}
      >
        <h1 className="fw-bold text-uppercase">Lectures</h1>
      </div>
      <div
        className="container-lg courses mt-5"
        style={{
          marginLeft: isLaptop ? 300 : 0,
          width: isLaptop ? "65vw" : "100%",
        }}
      >
        {profile.admin ? (
          <React.Fragment>
            {data.map((val, ind) => {
              return (
                <div
                  key={ind}
                  className="d-flex flex-column flex-md-row mt-3 align-items-lg-center"
                >
                  <Paper className="p-3 w-100 course border mx-md-3">
                    <h6 className="fw-bold color">About Course</h6>
                    <h3 className="mb-0 fw-bold">{val.name}</h3>

                    <Button
                      onClick={() => go(val.link)}
                      variant="contained"
                      className="outline mt-2 custom-button"
                      color="primary"
                    >
                      Open Portal
                    </Button>
                  </Paper>
                </div>
              );
            })}
          </React.Fragment>
        ) : (
          course[0] && (
            <>
              <div className="d-flex flex-column flex-md-row align-items-lg-center">
                <img
                  src="https://i.ibb.co/tsdKqkT/lec-1.jpg"
                  alt={course[0]["First Course Name"].name}
                  width={isMobile ? "100%" : isTab ? "300" : "350"}
                  height={isTab ? "auto" : "193"}
                />
                <Paper className="p-3 w-100 course border mx-md-3">
                  <h6 className="fw-bold color">About Course</h6>
                  <h3 className="mb-0 fw-bold">
                    {course[0]["First Course Name"].name}
                  </h3>
                  <h6 className="mb-0 fw-light mt-2">
                    {course[0]["First Course Title"]}
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
                      {course[0]["First Course Name"].status
                        ? "Online"
                        : "Offline"}
                    </span>
                  </p>
                  {course[0]["First Course Name"].status ? (
                    <Button
                      onClick={() => go(course[0]["First Course Name"].link)}
                      variant="contained"
                      className="outline mt-2 custom-button"
                      color="primary"
                    >
                      Open Portal
                    </Button>
                  ) : (
                    <span className="fw-bold text-danger mt-2 d-inline-block">
                      To access this course complete your registeration process.
                    </span>
                  )}
                </Paper>
              </div>
              {course[1] && (
                <div className="d-flex flex-column flex-md-row align-items-lg-center mt-4">
                  <img
                    src="https://i.ibb.co/2qVGtvM/lec-2.jpg"
                    alt={course[1]["Second Course Name"].name}
                    width={isMobile ? "100%" : isTab ? "300" : "350"}
                    height={isTab ? "auto" : "193"}
                  />

                  <Paper className="p-3 w-100 course border mx-md-3">
                    <h6 className="fw-bold color">About Course</h6>
                    <h3 className="mb-0 fw-bold">
                      {course[1]["Second Course Name"].name}
                    </h3>
                    <h6 className="mb-0 fw-light mt-2">
                      {course[1]["Second Course Title"]}
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
                        className="outline mt-2 custom-button"
                        color="primary"
                      >
                        Open Portal
                      </Button>
                    ) : (
                      <span className="fw-bold text-danger mt-2 d-inline-block">
                        To access this course complete your registeration
                        process.
                      </span>
                    )}
                  </Paper>
                </div>
              )}
              {course[2] && (
                <div className="d-flex flex-column flex-md-row align-items-lg-center mt-4">
                  <img
                    src="https://i.ibb.co/DRf2J8d/lec-3.jpg"
                    alt={course[2]["Third Course Name"].name}
                    width={isMobile ? "100%" : isTab ? "300" : "350"}
                    height={isTab ? "auto" : "193"}
                  />
                  <Paper className="p-3 w-100 course border mx-md-3">
                    <h6 className="fw-bold color">About Course</h6>
                    <h3 className="mb-0 fw-bold">
                      {course[2]["Third Course Name"].name}
                    </h3>
                    <h6 className="mb-0 fw-light mt-2">
                      {course[2]["Third Course Title"]}
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
                        className="outline mt-2 custom-button"
                        color="primary"
                      >
                        Open Portal
                      </Button>
                    ) : (
                      <span className="fw-bold text-danger mt-2 d-inline-block">
                        To access this course complete your registeration
                        process.
                      </span>
                    )}
                  </Paper>
                </div>
              )}
            </>
          )
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
