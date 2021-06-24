import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import firebase from "../config/fbConfig";

const LearningMaterials = ({ profile, uid }) => {
  const [data2, setData] = useState([]);

  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const { push } = useHistory();

  useLayoutEffect(() => {
    firebase
      .firestore()
      .collection("Learning Material")
      .get()
      .then((doc) => {
        const data1 = [];

        doc.forEach((data) => {
          if (
            data.data().course === profile.course[0]["First Course Name"].name
          ) {
            if (profile.course[0]["First Course Name"].status) {
              data1.push(data.data());
            }
          }

          if (
            data.data().course === profile.course[1]["Second Course Name"].name
          ) {
            if (profile.course[1]["Second Course Name"].status) {
              data1.push(data.data());
            }
          }

          if (
            data.data().course === profile.course[2]["Third Course Name"].name
          ) {
            if (profile.course[2]["Third Course Name"].status) {
              data1.push(data.data());
            }
          }

          setData(data1);
        });
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
        className="container my-4 mt-lms"
        style={{
          position: "relative",
          left: isLaptop ? 0 : 150,
          width: isLaptop ? "100%" : "71vw",
        }}
      >
        <h1 className="text-center fw-bold">Learning Materials</h1>

        {data2.length
          ? data2.map((val, ind) => {
              return (
                <>
                  <Button
                    key={ind}
                    href={val.link}
                    target="_blank"
                    variant="contained"
                    className="custom-button mt-3"
                  >
                    {val.name}
                  </Button>
                  <br />
                </>
              );
            })
          : ""}

        <div className="mt-4 d-flex justify-content-center">
          <Button
            onClick={() => push("/learningMaterials")}
            variant="contained"
            className="custom-button mt-3"
          >
            Load Learning Materials
          </Button>
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

export default connect(mapStateToProps)(LearningMaterials);
