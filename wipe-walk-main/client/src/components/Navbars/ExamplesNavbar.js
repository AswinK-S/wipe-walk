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
import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledTooltip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  FormGroup,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

export default function ExamplesNavbar() {
  const [modal, setModal] = useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [logout, setLogout] = useState(false);
  const [userId, setUserId] = useState();
  const navigate = useNavigate();
  const loc = JSON.parse(localStorage.getItem("userInfo"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = () => {
    if (loc) {
      setUserId(loc._id);
    }
  };

  //   Logout handling
  const logoutHandle = () => {
    localStorage.removeItem("userInfo");
    setLogout(true);
    navigate("/");
    setFormModal(false);
  };

  useEffect(() => {
    console.log("rendered");
  }, [logout]);

  useEffect(() => {
    data();
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Modal
        modalClassName="modal-black"
        isOpen={formModal}
        toggle={() => setFormModal(false)}
      >
        <div>
          <div className="modal-header justify-content-center">
            <button className="close" onClick={() => setFormModal(false)}>
              <i className="tim-icons icon-simple-remove text-white" />
            </button>
            <div className="text-muted text-center ml-auto mr-auto">
              <h3 className="mb-0">Are you sure want to Logout</h3>
            </div>
          </div>
          <div className="modal-body">
            <Button onClick={logoutHandle}>Yes</Button>
            <Button onClick={() => setFormModal(false)}>No</Button>
          </div>
        </div>
      </Modal>

      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
            <span>Wipe Walk </span>
          </NavbarBrand>
          {/* <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Creative Tim
          </UncontrolledTooltip> */}
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Wipe Walk
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Pricing-page">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/About-page">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/support">
                Support
              </NavLink>
            </NavItem>
            {loc ? (
              <div style={{display:"flex"}}>
                <Button className="btn-simple btn-round"
              color="primary" style={{cursor:"none"}}>
                Welcome {loc.name}
                  </Button>
                <Button color="danger" className="btn-round" onClick={() => setFormModal(true)}>
                Logout
                  </Button>
              </div>
            ) : (
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <NavItem>
                  <Button
                    className="nav-link d-lg-block btn-round"
                    color="primary"
                    href="/login-page"
                  >
                    Sign In
                  </Button>
                </NavItem>
                <NavItem>
                  <Button
                    className="nav-link d-lg-block btn-round"
                    color="primary"
                    href="/register-page"
                  >
                    Sign Up
                  </Button>
                </NavItem>
              </div>
            )}

            {/* <NavItem>
              <NavLink tag={Link} to="/">
                Back to Kit
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                Have an issue?
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
