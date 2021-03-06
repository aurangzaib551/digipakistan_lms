import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../../loader/loader";
import Nav from "../../components/common/nav/nav";
import Button from "@material-ui/core/Button";
import firebase from "../../config/fbConfig";

const AWSSysOpsAdministrator = ({ profile, uid }) => {
  // State
  const [subTopic, setSubTopic] = useState(false);
  const [lectures, setLectures] = useState([]);
  const [subLectures, setSubLectures] = useState([]);
  const [video, setVideo] = useState("");
  const [msg, setMsg] = useState("");

  useLayoutEffect(() => {
    firebase
      .firestore()
      .collection("AWS SysOps Administrator")
      .onSnapshot(function (querySnapshot) {
        var data = [];

        querySnapshot.forEach(function (doc) {
          data.push(doc.data());
        });
        if (data.length === 0) {
          setMsg("Lectures will be uploaded soon");
        } else if (data.length > 0) {
          setMsg("");
        }
        setLectures(data);
      });
  }, []);

  // Checking LMS Status
  if (!profile.lms) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;
  return profile ? (
    <>
      <Nav />
      <div className="container lectures my-5">
        {msg && <h1 className="fw-bold text-center">{msg + "..."}</h1>}
        <div className="d-flex flex-column flex-sm-row h-100">
          {!subTopic && (
            <div className="topics pe-2">
              {lectures[0] && (
                <>
                  <div>
                    {lectures.map((lecture, index) => {
                      return (
                        <>
                          <div key={index}>
                            <Button
                              onClick={() =>
                                setTimeout(() => {
                                  setSubTopic(true);
                                  setSubLectures(lecture.watch);
                                }, 400)
                              }
                              variant="contained"
                              fullWidth
                              className="outline mt-2"
                              color="primary"
                            >
                              {lecture.topic}
                            </Button>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}

          {subTopic && (
            <div className="topics pe-2">
              <Button
                variant="text"
                onClick={() =>
                  setTimeout(() => {
                    setSubTopic(false);
                    setVideo("");
                  }, 400)
                }
                className="outline"
              >
                <i className="fas fa-arrow-left"></i>&nbsp;&nbsp;Go Back
              </Button>
              {subLectures[0] && (
                <div>
                  {subLectures.map((subLecture, index) => {
                    return (
                      <>
                        <div key={index}>
                          <Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                              setVideo("");
                              setVideo(subLecture.video);
                            }}
                            className="outline mt-2"
                            color="primary"
                          >
                            {subLecture.subTopic}
                          </Button>
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          <div className="video">
            <iframe
              title={Math.random()}
              width="100%"
              height="100%"
              src={`${video ? video + "?rel=0" : ""}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
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

export default connect(mapStateToProps)(AWSSysOpsAdministrator);
