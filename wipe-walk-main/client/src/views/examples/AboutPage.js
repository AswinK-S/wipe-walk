/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function AboutPage() {
  const [tabs, setTabs] = React.useState(1);
  // React.useEffect(() => {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     document.documentElement.className += " perfect-scrollbar-on";
  //     document.documentElement.classList.remove("perfect-scrollbar-off");
  //     let tables = document.querySelectorAll(".table-responsive");
  //     for (let i = 0; i < tables.length; i++) {
  //       ps = new PerfectScrollbar(tables[i]);
  //     }
  //   }
  //   document.body.classList.toggle("profile-page");
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //       document.documentElement.className += " perfect-scrollbar-off";
  //       document.documentElement.classList.remove("perfect-scrollbar-on");
  //     }
  //     document.body.classList.toggle("profile-page");
  //   };
  // }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 style={{marginBottom:"5rem"}}>Celebrating Every Step: <br /> Our Story at Wipe Walk</h1>
                {/* <h5 className="text-on-back">Wipe Walk</h5> */}
                <p className="profile-description" style={{marginBottom:"3rem"}}>
                At Wipe Walk, our journey began with a simple passion for shoe care and a commitment to exceptional service. Founded by shoe enthusiasts, our mission is to breathe new life into every pair, ensuring they look their best with every step you take.
                </p>
                <br />
                <p className="profile-description" style={{marginBottom:"3rem"}}>
                With years of experience and a meticulous approach to cleaning, we've earned the trust of countless customers who rely on us to rejuvenate their footwear. From sneakers to stilettos, no shoe is too worn or too dirty for our expert hands.
                </p>
                <br />
          
                {/* <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://dribbble.com/creativetim"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div> */}
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
              <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/about two.webp")}
                      style={{marginTop:"-3rem", marginBottom:"2rem"}}
                    />
              </Col>
            </Row>
            <Row>
           <Col lg="12" md="12">
           <div>
           <p style={{marginBottom:"3rem"}}>
                But beyond our expertise lies our dedication to you, our valued customers. We pride ourselves on delivering not just clean shoes, but confidence and peace of mind with every service. Your satisfaction is our top priority, and we go above and beyond to exceed your expectations at every turn.
                Join us in celebrating the joy of clean, refreshed footwear. Step into our world, and let us show you why we're the premier destination for shoe cleaning and care. Welcome to Wipe Walk – where every shoe finds its shine, and every customer finds their stride.
                </p>
           </div>
           </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
