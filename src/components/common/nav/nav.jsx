import React, { useState, useLayoutEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useMediaQuery } from "react-responsive";
import { Badge, ListItemIcon } from "@material-ui/core";
import firebase from "../../../config/fbConfig";

const Nav = ({ signOut, profile }) => {
  // State
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [anchorElExplore, setAnchorElExplore] = useState(null);
  const [no, setno] = useState(1);
  const [notifications, setNotifications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const onCloseDrawer = () => {
    setTimeout(() => {
      setOpen((prevState) => !prevState);
    }, 400);
  };

  useLayoutEffect(() => {
    setLoading(true);

    firebase
      .firestore()
      .collection("Notifications")
      .onSnapshot((snap) => {
        let data = [];
        snap.forEach((doc) => {
          if (doc.exists) {
            data.push(doc.data());
            setNotifications(data);
            setLoading(false);
          } else {
            setLoading(false);
          }
        });
      });

    firebase
      .database()
      .ref("/Announcements")
      .on("value", (snap) => {
        let data = [];

        snap.forEach((doc) => {
          if (doc.exists) {
            data.push(doc.val());
            setAnnouncements(data);
            setLoading(false);
          } else {
            setLoading(false);
          }
        });
      });
  }, []);

  // Object Destructuring
  const { push } = useHistory();

  const handleDrawer = () => {
    setTimeout(() => {
      setOpen((prevState) => !prevState);
    }, 400);
  };

  //   Go to next page
  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 300);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleClickExplore = (event) => {
    setAnchorElExplore(event.currentTarget);
  };

  const handleCloseExplore = () => {
    setAnchorElExplore(null);
  };

  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  if (isLaptop === true && no === 1) {
    setno(2);
    setOpen(false);
  } else if (isLaptop === false && no === 2) {
    setno(1);
    setOpen(true);
  }

  return (
    <nav>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#02a39b",
          left: open && isLaptop === false ? "300px" : 0,
        }}
      >
        <Toolbar className="d-flex flex-column flex-sm-row py-2 justify-content-between">
          <div className="d-flex align-items-center">
            <IconButton
              onClick={handleDrawer}
              style={{ outline: "none" }}
              className="me-2"
            >
              <i className="fas fa-bars text-white"></i>
            </IconButton>
            <h3 className="mb-0 fw-bold">LMS</h3>

            {profile.admin ? null : (
              <>
                <Button
                  aria-haspopup="true"
                  onClick={handleClickExplore}
                  variant="outlined"
                  color="inherit"
                  className="fw-bold ms-3"
                >
                  Explore
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorElExplore}
                  keepMounted
                  open={Boolean(anchorElExplore)}
                  className="mt-5"
                  onClose={handleCloseExplore}
                >
                  {profile.course[0] && (
                    <MenuItem
                      className="w-100 d-block"
                      onClick={() => {
                        handleClose();
                        push(
                          profile.course[0]["First Course Name"].status
                            ? profile.course[0]["First Course Name"].link
                            : "/dashboard"
                        );
                      }}
                    >
                      {profile.course[0]["First Course Name"].name}
                    </MenuItem>
                  )}
                  {profile.course[1] && (
                    <MenuItem
                      className="w-100 d-block"
                      onClick={() => {
                        handleClose();
                        push(
                          profile.course[1]["Second Course Name"].status
                            ? profile.course[1]["Second Course Name"].link
                            : "/dashboard"
                        );
                      }}
                    >
                      {profile.course[1]["Second Course Name"].name}
                    </MenuItem>
                  )}
                  {profile.course[2] && (
                    <MenuItem
                      className="w-100 d-block"
                      onClick={() => {
                        handleClose();
                        push(
                          profile.course[2]["Third Course Name"].status
                            ? profile.course[2]["Third Course Name"].link
                            : "/dashboard"
                        );
                      }}
                    >
                      {profile.course[2]["Third Course Name"].name}
                    </MenuItem>
                  )}
                </Menu>
              </>
            )}
          </div>
          <div className="d-flex" style={{ marginRight: open ? 300 : 0 }}>
            <IconButton
              onClick={handleClick3}
              className="d-flex align-items-center text-white"
            >
              <Badge color="secondary" variant="dot">
                <i className="fas fa-bell"></i>
              </Badge>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl3}
              keepMounted
              open={Boolean(anchorEl3)}
              className="notifications mt-5"
              onClose={handleClose3}
            >
              <div className="p-3 pb-0">
                <h6 className="fw-bold title mb-0">
                  {announcements.length} new announcement
                </h6>
              </div>
              {notifications.length > 0 ? (
                <div>
                  {notifications.map((notification, ind) => {
                    let time = Date(notification.createdAt.nanoseconds);
                    return (
                      <div className="p-3" key={ind}>
                        <h6 className="fw-bold title mb-0">
                          {notification.name}
                        </h6>
                        <p className="small mb-0">{time}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-3">
                  <h6 className="fw-bold mb-0">0 Notifications</h6>
                </div>
              )}
            </Menu>
            <IconButton
              onClick={handleClick2}
              className="d-flex align-items-center text-white"
            >
              <i className="fas fa-envelope"></i>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl2}
              keepMounted
              open={Boolean(anchorEl2)}
              className="mt-5"
              onClose={handleClose2}
            >
              <h6 className="fw-bold mb-0 p-3">
                <a href="mailto:helpdesk@digipakistan.org" className="link">
                  helpdesk@digipakistan.org
                </a>
              </h6>
            </Menu>
            <Button
              aria-haspopup="true"
              onClick={handleClick}
              className="d-flex align-items-center text-white"
            >
              {profile.picture ? (
                <Avatar
                  className="avatar"
                  alt={profile.fullName}
                  src={profile.picture}
                ></Avatar>
              ) : (
                <Avatar className="avatar">{profile.initials}</Avatar>
              )}
              <p className="mb-0 ms-2 text-capitalize">
                {profile.fullName || profile.name}
              </p>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              className="profile-menu"
              onClose={handleClose}
            >
              <MenuItem
                className="profile-menu"
                onClick={() => {
                  handleClose();
                  go("/lectures");
                }}
              >
                {profile.admin ? "All Courses" : "My Courses"}
              </MenuItem>
              {profile.admin ? null : (
                <MenuItem
                  className="profile-menu"
                  onClick={() => {
                    handleClose();
                    go("/profile");
                  }}
                >
                  Profile
                </MenuItem>
              )}
              <MenuItem
                onClick={() => {
                  go("/help");
                  handleClose();
                }}
                className="profile-menu"
              >
                Help Center
              </MenuItem>
              <MenuItem
                className="profile-menu"
                onClick={() => {
                  handleClose();
                  signOut();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        variant={isLaptop ? "temporary" : "persistent"}
        open={open}
        onClose={onCloseDrawer}
      >
        <div className="bg overflow-hidden">
          <div style={{ width: 300 }}>
            <div className="d-flex bg-white justify-content-center">
              <img
                src="https://i.ibb.co/Sd0qZ7X/dplmslogo.png"
                alt="DigiPAKISTAN"
                height="67"
              />
            </div>

            <List>
              <ListItem
                button
                onClick={() => {
                  go("/dashboard");
                }}
              >
                <ListItemIcon>
                  <i className="fas fa-home text-white fa-2x"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="fw-bold">Dashboard</span>
                </ListItemText>
              </ListItem>
              {profile.admin ? null : (
                <ListItem
                  button
                  onClick={() => {
                    go("/profile");
                  }}
                >
                  <ListItemIcon>
                    <i className="fas text-white fa-2x fa-users"></i>
                  </ListItemIcon>
                  <ListItemText>
                    <span className="fw-bold">Profile</span>
                  </ListItemText>
                </ListItem>
              )}
              {profile.admin && (
                <ListItem
                  button
                  onClick={() => {
                    go("/registerTeacher");
                  }}
                >
                  <ListItemIcon>
                    <i className="fas fa-chalkboard-teacher text-white fa-2x"></i>
                  </ListItemIcon>
                  <ListItemText>
                    <span className="fw-bold">Register Teacher</span>
                  </ListItemText>
                </ListItem>
              )}
              <ListItem
                button
                onClick={() => {
                  go("/lectures");
                }}
              >
                <ListItemIcon>
                  <i className="fas fa-university text-white fa-2x"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="fw-bold">Lectures</span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  go("/quizizz");
                }}
              >
                <ListItemIcon>
                  <i className="fas fa-question-circle text-white fa-2x"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="fw-bold">Quizzes</span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  go("/assignments");
                }}
              >
                <ListItemIcon>
                  <i className="fas fa-clipboard-list text-white fa-2x"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="fw-bold">Assignments</span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  go("/help");
                }}
              >
                <ListItemIcon>
                  <i className="fas fa-hands-helping text-white fa-2x"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="fw-bold">Help Center</span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  go("/announcements");
                }}
              >
                <Badge color="secondary" variant="dot">
                  <ListItemIcon>
                    <i className="fas fa-bullhorn text-white fa-2x"></i>
                  </ListItemIcon>
                  <ListItemText>
                    <span className="fw-bold">Announcements</span>
                  </ListItemText>
                </Badge>
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  go("/policy");
                }}
              >
                <ListItemIcon>
                  <i className="fas fa-clipboard-check text-white fa-2x"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="fw-bold">Privacy Policy</span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  signOut();
                }}
              >
                <ListItemIcon>
                  <i className="fas fa-sign-out-alt text-white fa-2x"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="fw-bold">Sign Out</span>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
