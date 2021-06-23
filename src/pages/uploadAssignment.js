import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import firebase from "../config/fbConfig";
import queryString from "querystring";

const UploadAssignments = ({ profile, uid, ...props }) => {
  const [data, setData] = useState([]);

  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const { push } = useHistory();

  useLayoutEffect(() => {
    firebase
      .firestore()
      .collection("Assignment Link")
      .get()
      .then((doc) => {
        const data1 = [];

        doc.forEach((data) => {
          data1.push(data.data());

          setData(data1);
        });
      });
  }, []);

  const query = queryString.parse(props.location.search);

  // Checking LMS Status
  if (!profile.lms && !profile.admin) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  return profile ? (
    <>
      <Nav />
      <div
        className="container my-4 mt-lms"
        style={{
          position: "relative",
          left: isLaptop ? 0 : 150,
          width: isLaptop ? "100%" : "71vw",
        }}
      >
        <h1 className="text-center fw-bold">Upload Assignments</h1>

        {query.firstLink ? (
          <Button
            href={query.firstLink}
            target="_blank"
            variant="contained"
            className="custom-button mt-3"
          >
            Upload {query["?firstName"]}
          </Button>
        ) : (
          "Uploading links will be updated soon"
        )}

        <br />

        {query.secondLink && (
          <Button
            href={query.secondLink}
            target="_blank"
            variant="contained"
            className="custom-button mt-3"
          >
            Upload {query.secondName}
          </Button>
        )}

        <br />

        {query.thirdLink && (
          <Button
            href={query.thirdLink}
            target="_blank"
            variant="contained"
            className="custom-button mt-3"
          >
            Upload {query.thirdName}
          </Button>
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

export default connect(mapStateToProps)(UploadAssignments);
