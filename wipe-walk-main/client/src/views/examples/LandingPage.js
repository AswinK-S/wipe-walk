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
import React, { useState, useRef } from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import classnames from "classnames";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import "./landingPage.css"
// reactstrap components
import {
  Button,
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
  UncontrolledTooltip,
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
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import bigChartData from "variables/charts.js";
import axios from "axios";

export default function LandingPage(args) {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const [modal, setModal] = useState(false);
  const [demoModal, setDemoModal] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const loc = JSON.parse(localStorage.getItem("userInfo"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");

  const [bookingError, setBookingError] = useState('')

  const handleChange3 = (event) => {
    event.preventDefault();
    setService(event.target.value);
    setBookingError('')

  };

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_hu4yzrp";
    const templateId = "template_jyuuocz";
    const publicKey = "zz1TgSrkKQUci0wOI";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_address: address,
      from_service: service,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setService("");
        toast("Your Order is Placed !!", {
          position: toast.POSITION?.TOP_RIGHT,
        });
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  // booking data
  const submitOrderData = async (e) => {
    e.preventDefault()
    try {
      if (!/^[a-zA-Z]{3,}$/.test(name)) {
        console.log('name err');
        return setBookingError('Please fill all the fields correctly')
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        console.log('email err');

        return setBookingError('Please fill all the fields correctly')
      }

      if (!/^\d{10}$/.test(phone)) {
        console.log('phone err');
        return setBookingError('Please fill all the fields correctly')
      }

      if (address.trim() === '' || service.trim() === '') {
        console.log('addrs err');
        return setBookingError('Please fill all the fields correctly')
      }

      setBookingError('')
      const bookingDetails = { name, email, phone, address, service }

      console.log('bkng dtls--->', bookingDetails);

      //api call for booking
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }

      const result = await axios.post('api/user/bookNow', { bookingDetails }, config)
      console.log('bkng rslt-->',result);
      if(result.data.message ==="Successfully Booked"){
        toast("Your Order is Placed !!", {
          position: toast.POSITION?.TOP_RIGHT,
        });
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setService("");
        setFormModal(false)
        
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Modal
        modalClassName="modal-black"
        isOpen={formModal}
        toggle={() => setFormModal(false)}
      >
        {loc ? (
          <div>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Schedule a Pickup</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="text-center text-muted mb-4 mt-3">
                <small></small>
              </div>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Your Name</label>
                      <Input
                        placeholder="name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value)
                          setBookingError('')
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Email address</label>
                      <Input
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setBookingError('')
                        }}

                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Phone</label>
                      <Input
                        placeholder="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value)
                          setBookingError('')

                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        placeholder="address"
                        type="text"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value)
                          setBookingError('')

                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>service</label>
                      <br />
                      <NativeSelect
                        id="demo-customized-select-native"
                        value={service}
                        onChange={handleChange3}
                        label="service"
                        style={{ color: "grey" }}
                      >
                        <option aria-label="None" value="" />
                        <option>Cleaning</option>
                        <option>Polishing</option>
                        <option>Sole Replace</option>
                        <option>Innersole Replace</option>
                        <option>Base Replace</option>
                        <option>Stitching</option>
                      </NativeSelect>
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  className="btn-round float-right my-4"
                  color="primary"
                  data-placement="right"
                  id="tooltip341148792"
                  type="submit"
                  onClick={submitOrderData}
                >
                  Submit
                </Button>
                {bookingError ? (<>{bookingError}</>) : (<></>)}

              </Form>
            </div>
          </div>
        ) : (
          <div>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Oops!! Sign In with Us...</h3>
              </div>
            </div>
            <div className="modal-body">
              {/* <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="..." src={require("assets/img/error.svg")} />
                </Button>
              </div> */}
              <div className="text-center text-muted mb-4 mt-3">
                <small></small>
              </div>
              <Button
                className="my-4 btn-round float-right"
                href="/login-page"
                color="primary"
                type="button"
                data-placement="center"
              >
                Sign in
              </Button>
            </div>
          </div>
        )}
      </Modal>
      <ToastContainer />
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Welcome to Wipe Walk <br />
                  <span className="text-white">
                    Where Shoes Find Renewed Life!
                  </span>
                </h1>
                <p className="text-white mb-3">
                  Discover the magic of immaculate footwear with our expert
                  cleaning services. From dusty to dazzling, we transform every
                  pair, ensuring you stride in style and comfort. Trust us to
                  revitalize your shoes – because every step deserves a fresh
                  start.
                </p>
                <div className="btn-wrapper mb-3">
                  <Button
                    className="btn-round"
                    color="success"
                    onClick={() => setFormModal(true)}
                  >
                    Book Now
                  </Button>
                  {/* <p className="category text-success d-inline">Book Now</p>
                  <Button
                    className="btn-link"
                    color="success"
                    onClick={() => setFormModal(true)}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button> */}
                </div>

                {/* <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div> */}
              </Col>
              <Col lg="4" md="5">
                <Player
                  src="https://lottie.host/555cf204-3d7b-4b86-8438-2bc2abd72337/1fThwypjbD.json"
                  className="player"
                  loop
                  autoplay
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("assets/img/about one.webp")}
                    style={{ marginTop: "-3rem", marginBottom: "2rem" }}
                  />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      About <br /> Wipe Walk
                    </h1>
                    <p>
                      At Wipe Walk, our journey began with a simple passion for
                      shoe care and a commitment to exceptional service. Founded
                      by shoe enthusiasts, our mission is to breathe new life
                      into every pair, ensuring they look their best with every
                      step you take.
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="/About-page"
                    >
                      Learn More{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Your best benefit</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        {/* <i className="tim-icons icon-money-coins" /> */}
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/cleaning.png")}
                          style={{ width: "80px", background: "antiquewhite" }}
                        />
                      </div>
                      <h4 className="info-title">Cleaning</h4>
                      <hr className="line-primary" />
                      <p>Formal, Casual, Athletic, Sandals, Sports Shoes...</p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        {/* <i className="tim-icons icon-chart-pie-36" /> */}
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/shoe polishing.png")}
                          style={{ width: "80px", background: "antiquewhite" }}

                        />
                      </div>
                      <h4 className="info-title">Polishing</h4>
                      <hr className="line-warning" />
                      <p>Leather, Canvas, Suede, Rubber and Mesh</p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        {/* <i className="tim-icons icon-single-02" /> */}
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/Sole Replace.webp")}
                          style={{ width: "80px", background: "antiquewhite" }}

                        />
                      </div>
                      <h4 className="info-title">Sole Replace</h4>
                      <hr className="line-success" />
                      <p>We Replace All Type Of Shoe Soles</p>
                    </div>
                  </Col>
                </Row>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        {/* <i className="tim-icons icon-money-coins" /> */}
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/Innersole Replace.webp")}
                          style={{ width: "80px", background: "antiquewhite" }}

                        />
                      </div>
                      <h4 className="info-title">Innersole Replace</h4>
                      <hr className="line-primary" />
                      <p>We Replace All Type Of Shoe Innersoles</p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        {/* <i className="tim-icons icon-chart-pie-36" /> */}
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/base replace.png")}
                          style={{ width: "80px", background: "antiquewhite" }}

                        />
                      </div>
                      <h4 className="info-title">Base Replace</h4>
                      <hr className="line-warning" />
                      <p>We Replace All Type Of Shoe Bases</p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        {/* <i className="tim-icons icon-single-02" /> */}
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/Stitching.webp")}
                          style={{ width: "80px", background: "antiquewhite" }}

                        />
                      </div>
                      <h4 className="info-title">Stitching</h4>
                      <hr className="line-success" />
                      <p>We Have Well Experienced Professionals</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          className="section section-lg section-coins"
          style={{ marginTop: "100px" }}
        >
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Pricing <span className="text-info"> fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4" style={{ marginBottom: "5rem" }}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/Catalog item icon_Action_20210128114359616.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Shoe – Canvas/Sports</h4>
                        {/* <span>Plan</span> */}
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>₹ 275</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4" style={{ marginBottom: "5rem" }}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/Catalog item icon_wash and fold_20210128114348337.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Shoe – Boots</h4>
                        {/* <span>Plan</span> */}
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>₹ 475</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get plan
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4" style={{ marginBottom: "5rem" }}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/Catalog item icon_wash and iron_20210128114408309.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">
                          Shoe – Leather/Formal
                        </h4>
                        {/* <span>Plan</span> */}
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>₹ 375</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4" style={{ marginBottom: "5rem" }}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/Riding-Boots_20220111111405351.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Shoe – Riding</h4>
                        {/* <span>Plan</span> */}
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>₹ 550</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4" style={{ marginBottom: "5rem" }}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/calf-boots_20220111111424844.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Calf Boots</h4>
                        {/* <span>Plan</span> */}
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>₹ 499</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4" style={{ marginBottom: "5rem" }}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/heels.png")}
                      style={{ width: "11rem" }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Heels</h4>
                        {/* <span>Plan</span> */}
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>₹ 325</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4" style={{ marginBottom: "5rem" }}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/logan-over-the-knee-boots-gedebe.jpg")}
                      style={{ width: "10rem" }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">High Boots</h4>
                        {/* <span>Plan</span> */}
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>₹ 550</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4" style={{ marginBottom: "5rem" }}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/Purple_Flower_Sandals.webp")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Sandles</h4>
                        {/* <span>Plan</span> */}
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>₹ 225</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
