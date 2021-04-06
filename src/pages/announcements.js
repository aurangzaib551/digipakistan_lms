import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import Avatar from "@material-ui/core/Avatar";
import { useMediaQuery } from "react-responsive";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { CircularProgress, IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import firebase from "../config/fbConfig";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";

const Announcements = ({ profile, uid, data }) => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  // State
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const file = React.createRef();

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleClick = () => {
    file.current.click();
  };

  // Checking LMS Status
  if (!profile.lms) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  const handleUpload = () => {
    setLoading(true);
    const upload = firebase.storage().ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // error function
      },
      () => {
        // complete function
        firebase
          .storage()
          .ref("images")
          .child(`${image.name}`)
          .getDownloadURL()
          .then((url) => {
            firebase
              .firestore()
              .collection("users")
              .doc(uid)
              .update({
                picture: url,
              })
              .then(() => {
                setLoading(false);
                setImage("");
                setProgress(0);
              });
          });
      }
    );
  };

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
          className="container d-flex flex-lg-row flex-column profile py-5"
          style={{
            position: "relative",
            left: isLaptop ? 0 : 150,
            width: isLaptop ? "100%" : "71vw",
          }}
        >
          <Paper elevation={10} className="p-3 border w-100">
            <h3 className="fw-bold">Dear Student!</h3>
            <p>
              We are determined to provide excellent service to our students.
              Please be informed that start date of the course has been delayed
              due to software up-gradation to incorporate latest features. Now
              the course will start on 12th April 2021. In Sha Allah
            </p>
            <p className="mb-0">Thanks for your cooperation.</p>
            <p className="mb-0">Regards</p>
            <h6 className="mb-0 fw-bold">Team DigiPAKISTAN</h6>
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
    data: state.firestore.data.Applications
      ? state.firestore.data.Applications[state.firebase.auth.uid]
      : "",
  };
};

export default compose(
  firestoreConnect([{ collection: "Applications" }]),
  connect(mapStateToProps)
)(Announcements);
