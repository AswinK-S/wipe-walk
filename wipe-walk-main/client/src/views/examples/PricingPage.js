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

export default function PricingPage() {
  const [tabs, setTabs] = React.useState(1);
//   React.useEffect(() => {
//     if (navigator.platform.indexOf("Win") > -1) {
//       document.documentElement.className += " perfect-scrollbar-on";
//       document.documentElement.classList.remove("perfect-scrollbar-off");
//       let tables = document.querySelectorAll(".table-responsive");
//       for (let i = 0; i < tables.length; i++) {
//         ps = new PerfectScrollbar(tables[i]);
//       }
//     }
//     document.body.classList.toggle("profile-page");
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       if (navigator.platform.indexOf("Win") > -1) {
//         ps.destroy();
//         document.documentElement.className += " perfect-scrollbar-off";
//         document.documentElement.classList.remove("perfect-scrollbar-on");
//       }
//       document.body.classList.toggle("profile-page");
//     };
//   }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
      <section className="section section-lg section-coins">
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Pricing{" "}
                  <span className="text-info"> fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4" style={{marginBottom:"5rem"}}>
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
              <Col md="4" style={{marginBottom:"5rem"}}>
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
              <Col md="4" style={{marginBottom:"5rem"}}>
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
                        <h4 className="text-uppercase">Shoe – Leather/Formal</h4>
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
              <Col md="4" style={{marginBottom:"5rem"}}>
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
              <Col md="4" style={{marginBottom:"5rem"}}>
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
              <Col md="4" style={{marginBottom:"5rem"}}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/heels.png")}
                      style={{width:"11rem"}}
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
              <Col md="4" style={{marginBottom:"5rem"}}>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/logan-over-the-knee-boots-gedebe.jpg")}
                      style={{width:"10rem"}}
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
              <Col md="4" style={{marginBottom:"5rem"}}>
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
