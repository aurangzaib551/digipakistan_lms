import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import Paper from "@material-ui/core/Paper";
import { useMediaQuery } from "react-responsive";
import firebase from "../config/fbConfig";
import { Button } from "@material-ui/core";

const Announcements = ({ profile, uid }) => {
  const [announcements, setAnnouncements] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const { push } = useHistory();

  useEffect(() => {
    firebase
      .firestore()
      .collection("Notifications")
      .onSnapshot((snap) => {
        let data1 = [];
        snap.forEach((doc) => {
          if (doc.exists) {
            data1.push(doc.data());
            setNotifications(data1);
          }
        });
      });

    firebase
      .database()
      .ref("/Announcements")
      .on("value", (snap) => {
        if (snap.exists) {
          var data = [];
          snap.forEach((doc) => {
            data.push(doc.val());
            setAnnouncements(data);
          });
        }
      });
  }, []);

  // Checking LMS Status
  if (!profile.lms && !profile.admin) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  return profile ? (
    <>
      <Nav />
      <div
        className="bg-white mt-3 mt-lms"
        style={{ marginLeft: isLaptop ? 50 : 390 }}
      >
        <h1 className="fw-bold text-uppercase">Announcements</h1>
      </div>
      <div
        style={{
          backgroundColor: "#eee",
          height: isLaptop ? "auto" : 700,
        }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            left: isLaptop ? 0 : 170,
            width: isLaptop ? "100%" : "50vw",
          }}
        >
          <div className="pt-4 d-flex justify-content-center">
            <Button
              onClick={() => push("/announcements")}
              variant="contained"
              className="custom-button"
            >
              Load Data
            </Button>
          </div>

          {notifications.length > 0 ? (
            <div>
              {notifications.map((notification, ind) => {
                let time = Date(notification.createdAt.nanoseconds);
                return profile.admin ? null : (
                  <React.Fragment>
                    {profile.course[0] && (
                      <React.Fragment>
                        {profile.course[0]["First Course Name"].name ===
                          notification.course && (
                          <React.Fragment>
                            {profile.course[0]["First Course Name"].status && (
                              <div className="p-3" key={ind}>
                                <h6
                                  dangerouslySetInnerHTML={{
                                    __html: notification.name,
                                  }}
                                  className="fw-bold title mb-0"
                                ></h6>
                                <p className="small mb-0">{time}</p>
                              </div>
                            )}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    )}

                    {profile.course[1] && (
                      <React.Fragment>
                        {profile.course[1]["Second Course Name"].name ===
                          notification.course && (
                          <React.Fragment>
                            {profile.course[1]["Second Course Name"].status && (
                              <div className="p-3" key={ind}>
                                <h6
                                  dangerouslySetInnerHTML={{
                                    __html: notification.name,
                                  }}
                                  className="fw-bold title mb-0"
                                ></h6>
                                <p className="small mb-0">{time}</p>
                              </div>
                            )}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    )}

                    {profile.course[2] && (
                      <React.Fragment>
                        {profile.course[2]["Third Course Name"].name ===
                          notification.course && (
                          <React.Fragment>
                            {profile.course[2]["Third Course Name"].status && (
                              <div className="p-3" key={ind}>
                                <h6
                                  dangerouslySetInnerHTML={{
                                    __html: notification.name,
                                  }}
                                  className="fw-bold title mb-0"
                                ></h6>
                                <p className="small mb-0">{time}</p>
                              </div>
                            )}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          ) : (
            <div className="p-3">
              <h6 className="fw-bold mb-0">0 Notifications</h6>
            </div>
          )}
          <div className="py-3">
            {announcements.map((val, ind) => {
              return (
                <Paper
                  key={ind}
                  elevation={10}
                  className="p-3 mt-3 border w-100"
                >
                  <h3 className="fw-bold">{val.title}</h3>
                  <p>{val.message}</p>
                </Paper>
              );
            })}
          </div>
          {/* <h3 className="fw-bold">Dear Student!</h3>
            <p>
              We are determined to provide excellent service to our students.
              Please be informed that start date of the course has been delayed
              due to software up-gradation to incorporate latest features. Now
              the course will start on 12th April 2021. In Sha Allah
            </p> */}
          {/* <p className="mb-0">Thanks for your cooperation.</p>
            <p className="mb-0">Regards</p>
            <h6 className="mb-0 fw-bold">Team DigiPAKISTAN</h6> */}
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

export default connect(mapStateToProps)(Announcements);
