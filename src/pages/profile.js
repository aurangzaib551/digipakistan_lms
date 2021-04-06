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

const Profile = ({ profile, uid, data }) => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  // State
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [url, setURL] = useState("");

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
            setURL(url);
          });
      }
    );
  };

  if (url) {
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
        setURL("");
      });
  }

  return profile ? (
    <>
      <Nav />
      <div
        className="bg-white mt-3 mt-lms"
        style={{ marginLeft: isLaptop ? 50 : 390 }}
      >
        <h1 className="fw-bold text-uppercase">Profile</h1>
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
          <div className="d-flex flex-column align-items-center">
            <Paper className="py-3 border" square>
              <div className="d-flex flex-column mx-3 align-items-center">
                <div className="circle-avatar">
                  <IconButton onClick={handleClick} className="p-0">
                    {profile.picture ? (
                      <Avatar
                        className="avatar"
                        alt={profile.fullName}
                        src={profile.picture}
                      ></Avatar>
                    ) : (
                      <Avatar className="avatar">{profile.initials}</Avatar>
                    )}
                  </IconButton>
                </div>
                <h3 className="fw-bold text-nowrap mx-3 my-2 text-center">
                  {profile.fullName}
                </h3>
              </div>
            </Paper>

            {image && (
              <Button
                onClick={handleUpload}
                disabled={loading}
                variant="contained"
                className="custom-button mt-3"
                fullWidth
              >
                {loading ? <CircularProgress className="loader" /> : "Upload"}
              </Button>
            )}

            {progress > 0 && (
              <>
                <LinearProgress
                  variant="determinate"
                  style={{ width: "100%" }}
                  value={progress}
                  className="mt-3"
                />
                <h5>{progress + "%"}</h5>
              </>
            )}
            <input
              type="file"
              className="d-none"
              accept="image/*"
              name="image"
              ref={file}
              onChange={handleFile}
            />
          </div>

          {data.CNIC ? (
            <Paper className="p-3 w-100 border ms-lg-3" square>
              <h3 className="fw-bold color mb-0">Personal Details</h3>
              <div className="row mt-2">
                <div className="col-4 d-flex align-items-center">
                  <h5 className="fw-bold mb-0">Roll #</h5>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <span className="fw-bold">:</span>
                  <h5 className="ms-5 fw-normal mb-0">{profile.rollNumber}</h5>
                </div>
                <div className="col-4 d-flex align-items-center mt-4">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                </div>
                <div className="col-8 mt-4 d-flex align-items-center">
                  <span className="fw-bold">:</span>
                  <h5 className="ms-5 fw-normal mb-0 text-capitalize">
                    {profile.fullName}
                  </h5>
                </div>
                <div className="col-4 d-flex align-items-center mt-4">
                  <h5 className="fw-bold mb-0">Father Name</h5>
                </div>
                <div className="col-8 mt-4 d-flex align-items-center">
                  <span className="fw-bold">:</span>
                  <h5 className="ms-5 mb-0 fw-normal text-capitalize">
                    {profile.fatherName}
                  </h5>
                </div>
                <div className="col-4 d-flex align-items-center mt-4">
                  <h5 className="fw-bold mb-0">Email</h5>
                </div>
                <div className="col-8 mt-4 d-flex align-items-center">
                  <span className="fw-bold">:</span>
                  <h5 className="ms-5 mb-0 fw-normal break">{data.Email}</h5>
                </div>
                <div className="col-4 d-flex align-items-center mt-4">
                  <h5 className="fw-bold mb-0">Mobile #</h5>
                </div>
                <div className="col-8 mt-4 d-flex align-items-center">
                  <span className="fw-bold">:</span>
                  <h5 className="ms-5 mb-0 fw-normal break">
                    {data["Mobile Number"]}
                  </h5>
                </div>
                <div className="col-4 mt-4 d-flex align-items-center">
                  <h5 className="fw-bold mb-0">D.O.B</h5>
                </div>
                <div className="col-8 mt-4 d-flex align-items-center">
                  <span className="fw-bold">:</span>
                  <h5 className="ms-5 mb-0 fw-normal">
                    {data["Date of Birth"]}
                  </h5>
                </div>
                <div className="col-4 d-flex align-items-center mt-4">
                  <h5 className="fw-bold mb-0 mb-0">City</h5>
                </div>
                <div className="col-8 mt-4 d-flex align-items-center">
                  <span className="fw-bold">:</span>
                  <h5 className="ms-5 mb-0 fw-normal text-capitalize">
                    {data.City}
                  </h5>
                </div>
                <div className="col-4 d-flex align-items-center mt-4">
                  <h5 className="fw-bold mb-0 mb-0">CNIC</h5>
                </div>
                <div className="col-8 mt-4 d-flex align-items-center">
                  <span className="fw-bold">:</span>
                  <h5 className="ms-5 mb-0 fw-normal break">{data.CNIC}</h5>
                </div>
              </div>
            </Paper>
          ) : (
            <CircularProgress style={{ color: "#02a39b" }} />
          )}
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
)(Profile);
