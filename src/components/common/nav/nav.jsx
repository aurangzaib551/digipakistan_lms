import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useMediaQuery } from "react-responsive";

const Nav = ({ signOut, profile }) => {
  // State
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElExplore, setAnchorElExplore] = useState(null);
  const [no, setno] = useState(1);

  const onCloseDrawer = () => {
    setOpen((prevState) => !prevState);
  };

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
        position="relative"
        style={{ backgroundColor: "#02a39b", marginLeft: open ? 300 : 0 }}
      >
        <Toolbar className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <IconButton
              onClick={handleDrawer}
              style={{ outline: "none" }}
              className="me-2"
            >
              <i className="fas fa-bars text-white"></i>
            </IconButton>
            <h3 className="mb-0 fw-bold">LMS</h3>

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
              <MenuItem
                className="w-100 d-block"
                onClick={() => {
                  handleClose();
                  window.location.href =
                    "https://digipakistan.org/fastTrackTechnicalProgram";
                }}
              >
                Fast Track Technical Program
              </MenuItem>
              <MenuItem
                className="w-100 d-block"
                onClick={() => {
                  handleClose();
                  window.location.href =
                    "https://digipakistan.org/fastTrackNonTechnicalProgram";
                }}
              >
                Fast Track Non-Technical Program
              </MenuItem>
              <MenuItem
                className="w-100 d-block"
                onClick={() => {
                  handleClose();
                  window.location.href =
                    "https://digipakistan.org/associateCertificationProgram";
                }}
              >
                Associate Certification Program
              </MenuItem>
            </Menu>
          </div>
          <div style={{ marginRight: open ? 300 : 0 }}>
            <Button
              aria-haspopup="true"
              onClick={handleClick}
              className="d-flex align-items-center text-white"
            >
              <Avatar className="fw-bold">{profile.initials}</Avatar>
              <p className="mb-0 ms-2">{profile.fullName}</p>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              className="mt-5 profile-menu"
              onClose={handleClose}
            >
              <MenuItem
                className="profile-menu"
                onClick={() => {
                  handleClose();
                  go("/lectures");
                }}
              >
                My Courses
              </MenuItem>
              <MenuItem
                className="profile-menu"
                onClick={() => {
                  handleClose();
                  go("/profile");
                }}
              >
                Profile
              </MenuItem>
              <MenuItem className="profile-menu" onClick={handleClose}>
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
          {/* <Button
            onClick={() => {
              setTimeout(() => {
                signOut();
              }, 400);
            }}
            variant="outlined"
            className="outline"
            color="inherit"
          >
            Log Out
          </Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        variant="persistent"
        open={open}
        onClose={onCloseDrawer}
      >
        <div style={{ width: 300 }}>
          <div className="d-flex justify-content-end">
            <IconButton onClick={handleDrawer} className="outline m-3">
              <i className="fas fa-arrow-left"></i>
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => {
                go("/dashboard");
                handleDrawer();
              }}
            >
              <ListItemIcon>
                <i className="fas fa-home fa-2x"></i>
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                handleDrawer();
                go("/lectures");
              }}
            >
              <ListItemIcon>
                <i className="fas fa-university fa-2x"></i>
              </ListItemIcon>
              <ListItemText>Lectures</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                handleDrawer();
                go("/quizizz");
              }}
            >
              <ListItemIcon>
                <svg
                  id="Capa_1"
                  enableBackground="new 0 0 512 512"
                  height="35"
                  viewBox="0 0 512 512"
                  width="35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path d="m328.914 240.371-12.884-4.027v-55.094c0-9.704-7.896-17.6-17.601-17.6h-28.29c-9.704 0-17.6 7.896-17.6 17.6v4.318l-185.41 48.792h-49.529c-9.704 0-17.6 7.896-17.6 17.6v101.02c0 9.704 7.896 17.6 17.6 17.6h10.68v96.028c-4.81 2.655-8.077 7.775-8.077 13.647v16.163c0 8.592 6.989 15.581 15.581 15.581h48.488c8.592 0 15.581-6.989 15.581-15.581v-16.163c0-5.875-3.27-10.997-8.084-13.651v-47.534h14.73c3.553 0 6.618-2.493 7.343-5.972l6.528-31.355 132.169 27.825v4.021c0 9.705 7.896 17.601 17.6 17.601h28.29c9.705 0 17.601-7.896 17.601-17.601v-45l12.884-4.026c11.627-3.633 19.439-14.26 19.439-26.442v-71.31c.001-12.181-7.812-22.807-19.439-26.44zm-261.57 130.209 9.426 1.984v92.105h-33.49v-94.09h24.064zm17.51 125.839c0 .32-.261.581-.581.581h-48.489c-.32 0-.581-.261-.581-.581v-16.163c0-.32.261-.581.581-.581h48.488c.32 0 .581.261.581.581v16.163zm15.546-92.349h-8.63v-28.348l13.923 2.931zm198.03 12.12h-28.29c-1.434 0-2.6-1.167-2.6-2.601v-168.689c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v149.34l-166.747-35.104c-.007-.002-.015-.003-.022-.005l-10.161-2.139v-9.422c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v8.01h-24.83-18.18c-1.434 0-2.6-1.166-2.6-2.6v-101.02c0-1.434 1.166-2.6 2.6-2.6h43.01v63.21c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-64.931l176.93-46.56v8.822c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-28.65c0-1.434 1.166-2.6 2.6-2.6h28.29c1.434 0 2.601 1.166 2.601 2.6v60.523.157 171.659c-.001 1.433-1.168 2.6-2.601 2.6zm34.924-78.068c0 5.587-3.582 10.46-8.914 12.126l-8.409 2.628v-100.817l8.409 2.628c5.332 1.666 8.914 6.539 8.914 12.125z" />
                      <path d="m263.597 32.395c-20.846 0-37.805 16.96-37.805 37.806s16.959 37.805 37.805 37.805c7.84 0 15.129-2.4 21.175-6.502l4.061 4.061c1.465 1.464 3.385 2.196 5.304 2.196s3.839-.732 5.304-2.196c2.929-2.93 2.929-7.678 0-10.607l-4.163-4.163c3.868-5.93 6.126-13.001 6.126-20.593-.002-20.848-16.962-37.807-37.807-37.807zm0 60.61c-12.574 0-22.805-10.23-22.805-22.805s10.23-22.806 22.805-22.806 22.806 10.23 22.806 22.806c0 3.426-.764 6.676-2.124 9.595l-4.229-4.229c-2.93-2.928-7.678-2.928-10.607 0-2.929 2.93-2.929 7.678 0 10.607l4.394 4.394c-3.082 1.556-6.559 2.438-10.24 2.438z" />
                      <path d="m409.104 100.505v-60.61c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v60.61c0 4.143 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5z" />
                      <path d="m425.632 104.078c1.312 2.42 3.842 3.927 6.594 3.927h40.434c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-26.595l31.938-49.016c1.502-2.306 1.621-5.249.31-7.668-1.312-2.42-3.842-3.927-6.594-3.927h-38.249c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h24.41l-31.939 49.016c-1.502 2.306-1.621 5.249-.309 7.668z" />
                      <path d="m326.602 32.395c-4.143 0-7.5 3.357-7.5 7.5v41.706c0 9.118 4.364 16.53 12.97 22.028 4.53 2.896 9.645 4.367 15.202 4.376h.04c4.786 0 9.278-1.04 13.354-3.093 12.853-6.472 15.55-16.272 15.55-23.354v-41.663c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v41.663c0 2.926-.829 6.701-7.296 9.958-1.99 1.002-4.151 1.489-6.604 1.489-.008 0-.016 0-.023 0-2.691-.004-5.028-.663-7.145-2.016-5.019-3.206-6.047-6.072-6.047-9.389v-41.705c-.001-4.143-3.359-7.5-7.501-7.5z" />
                      <path d="m487.08 0h-268.21c-13.741 0-24.92 11.179-24.92 24.92v90.561c0 13.741 11.179 24.92 24.92 24.92h96.11c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-96.11c-5.47 0-9.92-4.45-9.92-9.92v-90.561c0-5.47 4.45-9.92 9.92-9.92h268.21c5.47 0 9.92 4.45 9.92 9.92v90.561c0 5.47-4.45 9.92-9.92 9.92h-63.18c-1.98 0-3.88.783-5.285 2.179l-37.936 37.673v-32.353c0-4.143-3.357-7.5-7.5-7.5h-23.199c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h15.699v42.869c0 3.028 1.821 5.76 4.618 6.924.931.388 1.91.576 2.88.576 1.943 0 3.854-.755 5.287-2.179l48.527-48.19h60.088c13.741 0 24.92-11.179 24.92-24.92v-90.56c.001-13.741-11.178-24.92-24.919-24.92z" />
                    </g>
                  </g>
                </svg>
              </ListItemIcon>
              <ListItemText>Quizizz</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                handleDrawer();
                go("/assignments");
              }}
            >
              <ListItemIcon>
                <svg
                  height="35"
                  viewBox="-61 0 512 512"
                  width="35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m390 30h-152.570312c-6.191407-17.460938-22.875-30-42.429688-30s-36.238281 12.539062-42.429688 30h-152.570312v482h390zm-270 30h60v-15c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v15h60v30h-150zm240 422h-330v-422h60v60h210v-60h60zm0 0" />
                  <path d="m272.574219 160.785156-69.851563 69.855469-117.890625 117.890625-31.820312 95.457031 95.460937-31.820312 187.742188-187.742188zm-140.308594 225.164063-31.820313 10.605469 10.605469-31.820313 112.882813-112.882813 21.214844 21.214844zm117.125-151.066407-4.242187-4.242187 27.425781-27.429687 21.210937 21.214843-27.425781 27.425781zm0 0" />
                </svg>
              </ListItemIcon>
              <ListItemText>Assignments</ListItemText>
            </ListItem>
          </List>
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
