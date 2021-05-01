import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import Paper from "@material-ui/core/Paper";
import { useMediaQuery } from "react-responsive";
import firebase from "../config/fbConfig";

const Announcements = ({ profile, uid }) => {
  const [announcements, setAnnouncements] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  useEffect(() => {
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
  console.log(announcements);
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
