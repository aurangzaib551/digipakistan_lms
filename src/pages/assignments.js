import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";

const Assignments = ({ profile, uid }) => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });
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
        <h1 className="text-center fw-bold">Assignments</h1>

        {/* <Paper className="p-3 border">
          <h5 className="mb-0 fw-bold">
            Assignments will be uploaded as and when your instructor seems it is
            required for assessing your understanding of the topic under
            discussion
          </h5>
        </Paper> */}
        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Amazon FBA Business" && (
              <Button
                href="https://drive.google.com/drive/folders/1I4Nl6ZXtl0yozDCmY9e18S2TRfoZ0OV5?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Amazon FBA Business
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Amazon FBA Business" && (
              <Button
                href="https://drive.google.com/drive/folders/1I4Nl6ZXtl0yozDCmY9e18S2TRfoZ0OV5?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Amazon FBA Business
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Amazon FBA Business" && (
              <Button
                href="https://drive.google.com/drive/folders/1I4Nl6ZXtl0yozDCmY9e18S2TRfoZ0OV5?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Amazon FBA Business
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "CompTIA It Fundamentals" && (
              <Button
                href="https://drive.google.com/drive/folders/1D37im4a6tl57ot65Rd0cKf1EG_yZZTsP?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CompTIA It Fundamentals
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "CompTIA It Fundamentals" && (
              <Button
                href="https://drive.google.com/drive/folders/1D37im4a6tl57ot65Rd0cKf1EG_yZZTsP?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CompTIA It Fundamentals
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "CompTIA It Fundamentals" && (
              <Button
                href="https://drive.google.com/drive/folders/1D37im4a6tl57ot65Rd0cKf1EG_yZZTsP?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CompTIA It Fundamentals
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "ASP.NET Web Applications" && (
              <Button
                href="https://drive.google.com/drive/folders/1T0PTrdgI9aHdZWMF0H2EnOl7VrpX7GHa?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download ASP.NET Web Applications
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "ASP.NET Web Applications" && (
              <Button
                href="https://drive.google.com/drive/folders/1T0PTrdgI9aHdZWMF0H2EnOl7VrpX7GHa?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download ASP.NET Web Applications
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "ASP.NET Web Applications" && (
              <Button
                href="https://drive.google.com/drive/folders/1T0PTrdgI9aHdZWMF0H2EnOl7VrpX7GHa?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download ASP.NET Web Applications
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name === "PHP Laravel" && (
              <Button
                href="https://drive.google.com/drive/folders/1WqWjB1LxgiUmVMvWWYTkadc3c9Kh29Lr?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download PHP Laravel
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name === "PHP Laravel" && (
              <Button
                href="https://drive.google.com/drive/folders/1WqWjB1LxgiUmVMvWWYTkadc3c9Kh29Lr?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download PHP Laravel
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name === "PHP Laravel" && (
              <Button
                href="https://drive.google.com/drive/folders/1WqWjB1LxgiUmVMvWWYTkadc3c9Kh29Lr?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download PHP Laravel
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name === "MERN Stack" && (
              <Button
                href="https://drive.google.com/drive/folders/1tIKo0qJkMKjB7-U73VHQrj4VidCcrmC-?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download MERN Stack
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name === "MERN Stack" && (
              <Button
                href="https://drive.google.com/drive/folders/1tIKo0qJkMKjB7-U73VHQrj4VidCcrmC-?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download MERN Stack
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name === "MERN Stack" && (
              <Button
                href="https://drive.google.com/drive/folders/1tIKo0qJkMKjB7-U73VHQrj4VidCcrmC-?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download MERN Stack
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "SQL Server Specialist" && (
              <Button
                href="https://drive.google.com/drive/folders/1GXuJLd70q8YSnK0BSZq-w-_sR9GFF6An?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download SQL Server Specialist
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "SQL Server Specialist" && (
              <Button
                href="https://drive.google.com/drive/folders/1GXuJLd70q8YSnK0BSZq-w-_sR9GFF6An?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download SQL Server Specialist
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "SQL Server Specialist" && (
              <Button
                href="https://drive.google.com/drive/folders/1GXuJLd70q8YSnK0BSZq-w-_sR9GFF6An?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download SQL Server Specialist
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Oracle Database Administrator (OCP : 12C DBA)" && (
              <Button
                href="https://drive.google.com/drive/folders/1gu5gXmJZcGvZgWPMd4O29qiqSQO-vb0n?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Oracle Database Administrator (OCP : 12C DBA)
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Oracle Database Administrator (OCP : 12C DBA)" && (
              <Button
                href="https://drive.google.com/drive/folders/1gu5gXmJZcGvZgWPMd4O29qiqSQO-vb0n?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Oracle Database Administrator (OCP : 12C DBA)
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Oracle Database Administrator (OCP : 12C DBA)" && (
              <Button
                href="https://drive.google.com/drive/folders/1gu5gXmJZcGvZgWPMd4O29qiqSQO-vb0n?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Oracle Database Administrator (OCP : 12C DBA)
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Android Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1uULP30MBNHeQtfAwwh4RdJ4ldg3W1tgE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Android Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Android Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1uULP30MBNHeQtfAwwh4RdJ4ldg3W1tgE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Android Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Android Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1uULP30MBNHeQtfAwwh4RdJ4ldg3W1tgE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Android Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Kotlin Mobile Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1IInRss-YL8fX_P-yOahkC1RdoPVoUPQp?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Kotlin Mobile Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Kotlin Mobile Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1IInRss-YL8fX_P-yOahkC1RdoPVoUPQp?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Kotlin Mobile Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Kotlin Mobile Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1IInRss-YL8fX_P-yOahkC1RdoPVoUPQp?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Kotlin Mobile Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "IOS Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1lfWGVZBDkuRSxVtj-MA55f5nKWB6MqaL?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download IOS Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "IOS Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1lfWGVZBDkuRSxVtj-MA55f5nKWB6MqaL?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download IOS Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "IOS Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1lfWGVZBDkuRSxVtj-MA55f5nKWB6MqaL?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download IOS Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Xamarin Mobile Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/140JBK2mvhtmmysWyGX8zK1o8s9zujdSs?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Xamarin Mobile Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Xamarin Mobile Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/140JBK2mvhtmmysWyGX8zK1o8s9zujdSs?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Xamarin Mobile Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Xamarin Mobile Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/140JBK2mvhtmmysWyGX8zK1o8s9zujdSs?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Xamarin Mobile Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "React Native Web & Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/11DAJFZez-5k-5VyVJmupahC-g-_MQ0LR?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download React Native Web &amp; Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "React Native Web & Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/11DAJFZez-5k-5VyVJmupahC-g-_MQ0LR?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download React Native Web &amp; Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "React Native Web & Apps Development" && (
              <Button
                href="https://drive.google.com/drive/folders/11DAJFZez-5k-5VyVJmupahC-g-_MQ0LR?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download React Native Web &amp; Apps Development
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Game Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1r8Sdlq9abckHhK4xK5o7svW2fMPL61ea?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Game Development
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Game Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1r8Sdlq9abckHhK4xK5o7svW2fMPL61ea?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Game Development
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Game Development" && (
              <Button
                href="https://drive.google.com/drive/folders/1r8Sdlq9abckHhK4xK5o7svW2fMPL61ea?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Game Development
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Cisco CCNA Networking" && (
              <Button
                href="https://drive.google.com/drive/folders/1nVQeLwwR3jwr60lTomNYpQZylszj3E7B?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Cisco CCNA Networking
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Cisco CCNA Networking" && (
              <Button
                href="https://drive.google.com/drive/folders/1nVQeLwwR3jwr60lTomNYpQZylszj3E7B?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Cisco CCNA Networking
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Cisco CCNA Networking" && (
              <Button
                href="https://drive.google.com/drive/folders/1nVQeLwwR3jwr60lTomNYpQZylszj3E7B?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Cisco CCNA Networking
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "CompTIA Security + (SYO - 601)" && (
              <Button
                href="https://drive.google.com/drive/folders/1O3RBFy6QxgQNj1xuoTptcxR973Zk_7T3?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CompTIA Security + (SYO - 601)
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "CompTIA Security + (SYO - 601)" && (
              <Button
                href="https://drive.google.com/drive/folders/1O3RBFy6QxgQNj1xuoTptcxR973Zk_7T3?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CompTIA Security + (SYO - 601)
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "CompTIA Security + (SYO - 601)" && (
              <Button
                href="https://drive.google.com/drive/folders/1O3RBFy6QxgQNj1xuoTptcxR973Zk_7T3?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CompTIA Security + (SYO - 601)
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Certified Ethical Hacking" && (
              <Button
                href="https://drive.google.com/drive/folders/1vxPylWu3f67jJtSqca47RWmDWeRhLBE2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Ethical Hacking
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Certified Ethical Hacking" && (
              <Button
                href="https://drive.google.com/drive/folders/1vxPylWu3f67jJtSqca47RWmDWeRhLBE2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Ethical Hacking
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Certified Ethical Hacking" && (
              <Button
                href="https://drive.google.com/drive/folders/1vxPylWu3f67jJtSqca47RWmDWeRhLBE2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Ethical Hacking
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Certified Hacking Forensic Investigator" && (
              <Button
                href="https://drive.google.com/drive/folders/1pqkSe0Z8HFjMSP-zBNNmZTvB4b_9PaN2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Hacking Forensic Investigator
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Certified Hacking Forensic Investigator" && (
              <Button
                href="https://drive.google.com/drive/folders/1pqkSe0Z8HFjMSP-zBNNmZTvB4b_9PaN2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Hacking Forensic Investigator
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Certified Hacking Forensic Investigator" && (
              <Button
                href="https://drive.google.com/drive/folders/1pqkSe0Z8HFjMSP-zBNNmZTvB4b_9PaN2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Hacking Forensic Investigator
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Penetration Testing Security Analyst" && (
              <Button
                href="https://drive.google.com/drive/folders/1pqkSe0Z8HFjMSP-zBNNmZTvB4b_9PaN2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Penetration Testing Security Analyst
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Penetration Testing Security Analyst" && (
              <Button
                href="https://drive.google.com/drive/folders/1pqkSe0Z8HFjMSP-zBNNmZTvB4b_9PaN2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Penetration Testing Security Analyst
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Penetration Testing Security Analyst" && (
              <Button
                href="https://drive.google.com/drive/folders/1pqkSe0Z8HFjMSP-zBNNmZTvB4b_9PaN2?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Penetration Testing Security Analyst
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Certified Information System Auditor" && (
              <Button
                href="https://drive.google.com/drive/folders/1PSJGs1FkREa4PIqKg5FT6g5CCEUcBqNh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Certified Information System Auditor" && (
              <Button
                href="https://drive.google.com/drive/folders/1PSJGs1FkREa4PIqKg5FT6g5CCEUcBqNh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Certified Information System Auditor" && (
              <Button
                href="https://drive.google.com/drive/folders/1PSJGs1FkREa4PIqKg5FT6g5CCEUcBqNh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Certified Information Security Manager" && (
              <Button
                href="https://drive.google.com/drive/folders/1lwHVOdMOOC9tes9eDJWAJQPT6GYcukVU?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Information Security Manager
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Certified Information Security Manager" && (
              <Button
                href="https://drive.google.com/drive/folders/1lwHVOdMOOC9tes9eDJWAJQPT6GYcukVU?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Information Security Manager
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Certified Information Security Manager" && (
              <Button
                href="https://drive.google.com/drive/folders/1lwHVOdMOOC9tes9eDJWAJQPT6GYcukVU?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Certified Information Security Manager
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "AWS Solution Architect" && (
              <Button
                href="https://drive.google.com/drive/folders/1omSksir-fN1CriRSEoN9uas9tZm0lOm9?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Solution Architect
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "AWS Solution Architect" && (
              <Button
                href="https://drive.google.com/drive/folders/1omSksir-fN1CriRSEoN9uas9tZm0lOm9?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Solution Architect
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "AWS Solution Architect" && (
              <Button
                href="https://drive.google.com/drive/folders/1omSksir-fN1CriRSEoN9uas9tZm0lOm9?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Solution Architect
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "AWS SysOps Administrator" && (
              <Button
                href="https://drive.google.com/drive/folders/1RGuxxp94UM8UQMAl3Ms107qjxRP0LFIC?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS SysOps Administrator
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "AWS SysOps Administrator" && (
              <Button
                href="https://drive.google.com/drive/folders/1RGuxxp94UM8UQMAl3Ms107qjxRP0LFIC?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS SysOps Administrator
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "AWS SysOps Administrator" && (
              <Button
                href="https://drive.google.com/drive/folders/1RGuxxp94UM8UQMAl3Ms107qjxRP0LFIC?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS SysOps Administrator
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "AWS Developer Associate" && (
              <Button
                href="https://drive.google.com/drive/folders/1kH-RtCES_12XYMtiLqQy-nGxAFhOCKGh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Developer Associate
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "AWS Developer Associate" && (
              <Button
                href="https://drive.google.com/drive/folders/1kH-RtCES_12XYMtiLqQy-nGxAFhOCKGh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Developer Associate
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "AWS Developer Associate" && (
              <Button
                href="https://drive.google.com/drive/folders/1kH-RtCES_12XYMtiLqQy-nGxAFhOCKGh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Developer Associate
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Microsoft Azure Cloud Fundamentals" && (
              <Button
                href="https://drive.google.com/drive/folders/1wv9SGu0x-W_zwNZA_7A9k0T-XC6XLyGa?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Azure Cloud Fundamentals
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Microsoft Azure Cloud Fundamentals" && (
              <Button
                href="https://drive.google.com/drive/folders/1wv9SGu0x-W_zwNZA_7A9k0T-XC6XLyGa?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Azure Cloud Fundamentals
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Microsoft Azure Cloud Fundamentals" && (
              <Button
                href="https://drive.google.com/drive/folders/1wv9SGu0x-W_zwNZA_7A9k0T-XC6XLyGa?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Azure Cloud Fundamentals
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Microsoft Cloud Administrator 103 - 104" && (
              <Button
                href="https://drive.google.com/drive/folders/114GN3TDeZu95PZRmYY5gQFRVBRN5hShR?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Cloud Administrator 103 - 104
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Microsoft Cloud Administrator 103 - 104" && (
              <Button
                href="https://drive.google.com/drive/folders/114GN3TDeZu95PZRmYY5gQFRVBRN5hShR?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Cloud Administrator 103 - 104
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Microsoft Cloud Administrator 103 - 104" && (
              <Button
                href="https://drive.google.com/drive/folders/114GN3TDeZu95PZRmYY5gQFRVBRN5hShR?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Cloud Administrator 103 - 104
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Google Cloud Engineer" && (
              <Button
                href="https://drive.google.com/drive/folders/1qrtKVsxBljMgtkLW2rwqbqk929pZvDOQ?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Google Cloud Engineer
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Google Cloud Engineer" && (
              <Button
                href="https://drive.google.com/drive/folders/1qrtKVsxBljMgtkLW2rwqbqk929pZvDOQ?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Google Cloud Engineer
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Google Cloud Engineer" && (
              <Button
                href="https://drive.google.com/drive/folders/1qrtKVsxBljMgtkLW2rwqbqk929pZvDOQ?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Google Cloud Engineer
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Python For Everyone" && (
              <Button
                href="https://drive.google.com/drive/folders/1eM0itZ11b9lBKlVvXRuEVvvKNidffIBX?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Python for Everyone
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Python For Everyone" && (
              <Button
                href="https://drive.google.com/drive/folders/1eM0itZ11b9lBKlVvXRuEVvvKNidffIBX?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Python for Everyone
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Python For Everyone" && (
              <Button
                href="https://drive.google.com/drive/folders/1eM0itZ11b9lBKlVvXRuEVvvKNidffIBX?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Python for Everyone
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Machine Learning & AI" && (
              <Button
                href="https://drive.google.com/drive/folders/1W_hUvQoO5SyW3vdbmHwHVyvP5LJyiaV3?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Machine Learning &amp; AI
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Machine Learning & AI" && (
              <Button
                href="https://drive.google.com/drive/folders/1W_hUvQoO5SyW3vdbmHwHVyvP5LJyiaV3?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Machine Learning &amp; AI
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Machine Learning & AI" && (
              <Button
                href="https://drive.google.com/drive/folders/1W_hUvQoO5SyW3vdbmHwHVyvP5LJyiaV3?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Machine Learning &amp; AI
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name === "Data Science" && (
              <Button
                href="https://drive.google.com/drive/folders/1r-TRszkaaxKkOz_z_j03XQPF2Q33ca9k?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Data Science
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Data Science" && (
              <Button
                href="https://drive.google.com/drive/folders/1r-TRszkaaxKkOz_z_j03XQPF2Q33ca9k?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Data Science
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name === "Data Science" && (
              <Button
                href="https://drive.google.com/drive/folders/1r-TRszkaaxKkOz_z_j03XQPF2Q33ca9k?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Data Science
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Big Data & Headoop Ecosystem" && (
              <Button
                href="https://drive.google.com/drive/folders/1yA6UZj_yxMGv-ekurkkBFEFdkXdj4toY?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Big Data &amp; Headoop Ecosystem
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Big Data & Headoop Ecosystem" && (
              <Button
                href="https://drive.google.com/drive/folders/1yA6UZj_yxMGv-ekurkkBFEFdkXdj4toY?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Big Data &amp; Headoop Ecosystem
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Big Data & Headoop Ecosystem" && (
              <Button
                href="https://drive.google.com/drive/folders/1yA6UZj_yxMGv-ekurkkBFEFdkXdj4toY?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Big Data &amp; Headoop Ecosystem
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "QuickBooks ERP" && (
              <Button
                href="https://drive.google.com/drive/folders/1iTjKx4JvHDh04U9vhFW3RGugYafBicjt?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download QuickBooks ERP
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "QuickBooks ERP" && (
              <Button
                href="https://drive.google.com/drive/folders/1iTjKx4JvHDh04U9vhFW3RGugYafBicjt?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download QuickBooks ERP
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "QuickBooks ERP" && (
              <Button
                href="https://drive.google.com/drive/folders/1iTjKx4JvHDh04U9vhFW3RGugYafBicjt?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download QuickBooks ERP
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name === "SAP ERP" && (
              <Button
                href="https://drive.google.com/drive/folders/19A_Nky5Fk8OYTkTVejvpo_OeQd7DqXon?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download SAP ERP
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name === "SAP ERP" && (
              <Button
                href="https://drive.google.com/drive/folders/19A_Nky5Fk8OYTkTVejvpo_OeQd7DqXon?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download SAP ERP
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name === "SAP ERP" && (
              <Button
                href="https://drive.google.com/drive/folders/19A_Nky5Fk8OYTkTVejvpo_OeQd7DqXon?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download SAP ERP
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Project Management Professional (PMP)" && (
              <Button
                href="https://drive.google.com/drive/folders/1XR194YNUm_JFRJcphmLkx1cl_RDbbKHo?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Project Management Professional (PMP)
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Project Management Professional (PMP)" && (
              <Button
                href="https://drive.google.com/drive/folders/1XR194YNUm_JFRJcphmLkx1cl_RDbbKHo?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Project Management Professional (PMP)
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Project Management Professional (PMP)" && (
              <Button
                href="https://drive.google.com/drive/folders/1XR194YNUm_JFRJcphmLkx1cl_RDbbKHo?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Project Management Professional (PMP)
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Search Engine Optimization (SEO)" && (
              <Button
                href="https://drive.google.com/drive/folders/1PAJbkGrmm6r52Pnlh0C5o3B0GwqEkQFC?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Search Engine Optimization (SEO)
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Search Engine Optimization (SEO)" && (
              <Button
                href="https://drive.google.com/drive/folders/1PAJbkGrmm6r52Pnlh0C5o3B0GwqEkQFC?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Search Engine Optimization (SEO)
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Search Engine Optimization (SEO)" && (
              <Button
                href="https://drive.google.com/drive/folders/1PAJbkGrmm6r52Pnlh0C5o3B0GwqEkQFC?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Search Engine Optimization (SEO)
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Digital Marketing" && (
              <Button
                href="https://drive.google.com/drive/folders/1a4UoN7CUMpAOieivnHGhSC34Wn07WyOh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Digital Marketing
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Digital Marketing" && (
              <Button
                href="https://drive.google.com/drive/folders/1a4UoN7CUMpAOieivnHGhSC34Wn07WyOh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Digital Marketing
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Digital Marketing" && (
              <Button
                href="https://drive.google.com/drive/folders/1a4UoN7CUMpAOieivnHGhSC34Wn07WyOh?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Digital Marketing
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Social Media Marketing" && (
              <Button
                href="https://drive.google.com/drive/folders/1YW2UUFUzI5xlqOFxbywtt9_7aYu4nypV?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Social Media Marketing
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Social Media Marketing" && (
              <Button
                href="https://drive.google.com/drive/folders/1YW2UUFUzI5xlqOFxbywtt9_7aYu4nypV?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Social Media Marketing
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Social Media Marketing" && (
              <Button
                href="https://drive.google.com/drive/folders/1YW2UUFUzI5xlqOFxbywtt9_7aYu4nypV?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Social Media Marketing
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Graphic Design" && (
              <Button
                href="https://drive.google.com/drive/folders/10Z9Xl3ZE60NB20lOaGF3M4oSXZIeE28f?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Graphic Design
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Graphic Design" && (
              <Button
                href="https://drive.google.com/drive/folders/10Z9Xl3ZE60NB20lOaGF3M4oSXZIeE28f?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Graphic Design
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Graphic Design" && (
              <Button
                href="https://drive.google.com/drive/folders/10Z9Xl3ZE60NB20lOaGF3M4oSXZIeE28f?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Graphic Design
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "UI / UX Design" && (
              <Button
                href="https://drive.google.com/drive/folders/1tHd2mgmvMvqp8y2nkEjR0E7hDrgsy-aE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download UI / UX Design
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "UI / UX Design" && (
              <Button
                href="https://drive.google.com/drive/folders/1tHd2mgmvMvqp8y2nkEjR0E7hDrgsy-aE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download UI / UX Design
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "UI / UX Design" && (
              <Button
                href="https://drive.google.com/drive/folders/1tHd2mgmvMvqp8y2nkEjR0E7hDrgsy-aE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download UI / UX Design
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Interior Design" && (
              <Button
                href="https://drive.google.com/drive/folders/1tHd2mgmvMvqp8y2nkEjR0E7hDrgsy-aE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Interior Design
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Interior Design" && (
              <Button
                href="https://drive.google.com/drive/folders/1tHd2mgmvMvqp8y2nkEjR0E7hDrgsy-aE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Interior Design
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Interior Design" && (
              <Button
                href="https://drive.google.com/drive/folders/1tHd2mgmvMvqp8y2nkEjR0E7hDrgsy-aE?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Interior Design
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "3D Maya Max Animation" && (
              <Button
                href="https://drive.google.com/drive/folders/1WK-fQdFTr5Nt7_7zK2o8yf5ibgneUPZi?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download 3D Maya Max Animation
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "3D Maya Max Animation" && (
              <Button
                href="https://drive.google.com/drive/folders/1WK-fQdFTr5Nt7_7zK2o8yf5ibgneUPZi?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download 3D Maya Max Animation
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "3D Maya Max Animation" && (
              <Button
                href="https://drive.google.com/drive/folders/1WK-fQdFTr5Nt7_7zK2o8yf5ibgneUPZi?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download 3D Maya Max Animation
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Video Editing" && (
              <Button
                href="https://drive.google.com/drive/folders/144_V12TOB-l_QXztk931hViReRRY7EAs?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Video Editing
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Video Editing" && (
              <Button
                href="https://drive.google.com/drive/folders/144_V12TOB-l_QXztk931hViReRRY7EAs?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Video Editing
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Video Editing" && (
              <Button
                href="https://drive.google.com/drive/folders/144_V12TOB-l_QXztk931hViReRRY7EAs?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Video Editing
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name === "AutoCad" && (
              <Button
                href="https://drive.google.com/drive/folders/1hjP2rc2uPuDXfQkIaiwh2rXkjuTy7lag?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AutoCad
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name === "AutoCad" && (
              <Button
                href="https://drive.google.com/drive/folders/1hjP2rc2uPuDXfQkIaiwh2rXkjuTy7lag?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AutoCad
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name === "AutoCad" && (
              <Button
                href="https://drive.google.com/drive/folders/1hjP2rc2uPuDXfQkIaiwh2rXkjuTy7lag?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AutoCad
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Microsoft Office 365" && (
              <Button
                href="https://drive.google.com/drive/folders/1SaKaOb5ngKTJEbvDiDKrE6lTLVDDRiwY?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Office 365
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Microsoft Office 365" && (
              <Button
                href="https://drive.google.com/drive/folders/1SaKaOb5ngKTJEbvDiDKrE6lTLVDDRiwY?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Office 365
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Microsoft Office 365" && (
              <Button
                href="https://drive.google.com/drive/folders/1SaKaOb5ngKTJEbvDiDKrE6lTLVDDRiwY?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Microsoft Office 365
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Enterpreneurship" && (
              <Button
                href="https://drive.google.com/drive/folders/18o9l5mQKwtJZ9tc9gN3I9SNf3seTZUgp?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Enterpreneurship
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Enterpreneurship" && (
              <Button
                href="https://drive.google.com/drive/folders/18o9l5mQKwtJZ9tc9gN3I9SNf3seTZUgp?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Enterpreneurship
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Enterpreneurship" && (
              <Button
                href="https://drive.google.com/drive/folders/18o9l5mQKwtJZ9tc9gN3I9SNf3seTZUgp?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Enterpreneurship
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Digital Forensic Cyber Security" && (
              <Button
                href="https://drive.google.com/drive/folders/1zYe_dV-xfjyssg_gKAbz4OUw7U8y_ASc?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Digital Forensic Cyber Security
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Digital Forensic Cyber Security" && (
              <Button
                href="https://drive.google.com/drive/folders/1zYe_dV-xfjyssg_gKAbz4OUw7U8y_ASc?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Digital Forensic Cyber Security
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Digital Forensic Cyber Security" && (
              <Button
                href="https://drive.google.com/drive/folders/1zYe_dV-xfjyssg_gKAbz4OUw7U8y_ASc?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Digital Forensic Cyber Security
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Penetration Testing Cyber Security" && (
              <Button
                href="https://drive.google.com/drive/folders/1Lmoyi7ceOfXtrHBLri8vATIs8hr0UreK?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Penetration Testing Cyber Security
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Penetration Testing Cyber Security" && (
              <Button
                href="https://drive.google.com/drive/folders/1Lmoyi7ceOfXtrHBLri8vATIs8hr0UreK?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Penetration Testing Cyber Security
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Penetration Testing Cyber Security" && (
              <Button
                href="https://drive.google.com/drive/folders/1Lmoyi7ceOfXtrHBLri8vATIs8hr0UreK?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Penetration Testing Cyber Security
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "CISSP Cyber Security Professional" && (
              <Button
                href="https://drive.google.com/drive/folders/1_BrtqK2wn-s90TRGElKnuwVpsmyWMA5q?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CISSP Cyber Security Professional
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "CISSP Cyber Security Professional" && (
              <Button
                href="https://drive.google.com/drive/folders/1_BrtqK2wn-s90TRGElKnuwVpsmyWMA5q?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CISSP Cyber Security Professional
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "CISSP Cyber Security Professional" && (
              <Button
                href="https://drive.google.com/drive/folders/1_BrtqK2wn-s90TRGElKnuwVpsmyWMA5q?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download CISSP Cyber Security Professional
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Artificial Intelligence" && (
              <Button
                href="https://drive.google.com/drive/folders/18oGMdUBe74_cKyo7hfSXSfNxmWrwoQeD?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Artificial Intelligence
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Artificial Intelligence" && (
              <Button
                href="https://drive.google.com/drive/folders/18oGMdUBe74_cKyo7hfSXSfNxmWrwoQeD?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Artificial Intelligence
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Artificial Intelligence" && (
              <Button
                href="https://drive.google.com/drive/folders/18oGMdUBe74_cKyo7hfSXSfNxmWrwoQeD?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Artificial Intelligence
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "AWS Cloud Computing" && (
              <Button
                href="https://drive.google.com/drive/folders/1mm9oiOGA4hx_KSgN0JvFvcPlnRjJJclz?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Cloud Computing
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "AWS Cloud Computing" && (
              <Button
                href="https://drive.google.com/drive/folders/1mm9oiOGA4hx_KSgN0JvFvcPlnRjJJclz?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Cloud Computing
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "AWS Cloud Computing" && (
              <Button
                href="https://drive.google.com/drive/folders/1mm9oiOGA4hx_KSgN0JvFvcPlnRjJJclz?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download AWS Cloud Computing
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Internet of Things (IoT)" && (
              <Button
                href="https://drive.google.com/drive/folders/1Z9FhQKNe-ot3ZtCmJbBnuaRUCX1HOTLr?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Internet of Things (IoT)
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Internet of Things (IoT)" && (
              <Button
                href="https://drive.google.com/drive/folders/1Z9FhQKNe-ot3ZtCmJbBnuaRUCX1HOTLr?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Internet of Things (IoT)
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Internet of Things (IoT)" && (
              <Button
                href="https://drive.google.com/drive/folders/1Z9FhQKNe-ot3ZtCmJbBnuaRUCX1HOTLr?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Internet of Things (IoT)
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "BlockChain Technology" && (
              <Button
                href="https://drive.google.com/drive/folders/1aVO7No514EzMtHb_ZYATgbjQxsaysgZ8?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download BlockChain Technology
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "BlockChain Technology" && (
              <Button
                href="https://drive.google.com/drive/folders/1aVO7No514EzMtHb_ZYATgbjQxsaysgZ8?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download BlockChain Technology
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "BlockChain Technology" && (
              <Button
                href="https://drive.google.com/drive/folders/1aVO7No514EzMtHb_ZYATgbjQxsaysgZ8?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download BlockChain Technology
              </Button>
            )}
          </div>
        )}

        {profile.course[0] && (
          <div>
            {profile.course[0]["First Course Name"].name ===
              "Full Stack Web Development (MCSA)" && (
              <Button
                href="https://drive.google.com/drive/folders/10a06f-0BgI0BV6IDqr9JlxqpSaPp6Lji?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Full Stack Web Development (MCSA)
              </Button>
            )}
          </div>
        )}

        {profile.course[1] && (
          <div>
            {profile.course[1]["Second Course Name"].name ===
              "Full Stack Web Development (MCSA)" && (
              <Button
                href="https://drive.google.com/drive/folders/10a06f-0BgI0BV6IDqr9JlxqpSaPp6Lji?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Full Stack Web Development (MCSA)
              </Button>
            )}
          </div>
        )}

        {profile.course[2] && (
          <div>
            {profile.course[2]["Third Course Name"].name ===
              "Full Stack Web Development (MCSA)" && (
              <Button
                href="https://drive.google.com/drive/folders/10a06f-0BgI0BV6IDqr9JlxqpSaPp6Lji?usp=sharing"
                target="_blank"
                variant="contained"
                className="custom-button mt-3"
              >
                Download Full Stack Web Development (MCSA)
              </Button>
            )}
          </div>
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

export default connect(mapStateToProps)(Assignments);
