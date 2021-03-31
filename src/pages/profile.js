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
        className="container profile my-5 mt-lms"
        style={{
          position: "relative",
          left: isLaptop ? 0 : 150,
          width: isLaptop ? "100%" : "71vw",
        }}
      >
        <div className="d-flex flex-column align-items-center">
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
          <TableContainer className="mt-3 border" component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell className="fw-bold" component="th" scope="row">
                    Roll #
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {profile.rollNumber}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="fw-bold" component="th" scope="row">
                    Full Name
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {profile.fullName}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="fw-bold" component="th" scope="row">
                    Father Name
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {profile.fatherName}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="fw-bold" component="th" scope="row">
                    Email
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.Email}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="fw-bold" component="th" scope="row">
                    Mobile #
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data["Mobile Number"]}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="fw-bold" component="th" scope="row">
                    D.O.B
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data["Date of Birth"]}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="fw-bold" component="th" scope="row">
                    City
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.City}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="fw-bold" component="th" scope="row">
                    CNIC
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.CNIC}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <CircularProgress style={{ color: "#02a39b" }} />
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
    data: state.firestore.data.Applications
      ? state.firestore.data.Applications[state.firebase.auth.uid]
      : "",
  };
};

export default compose(
  firestoreConnect([{ collection: "Applications" }]),
  connect(mapStateToProps)
)(Profile);
