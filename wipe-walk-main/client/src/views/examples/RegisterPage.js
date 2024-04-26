import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [phoneFocus, setPhoneFocus] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/");
    } else {
      navigate("/register-page");
    }
  }, [navigate]);

  // const classes = useStyle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const submitHandle = async (data) => {
    const { name, email, password, phone } = data;

    //   setLoading(true)
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data, status } = await axios.post(
        "http://localhost:5000/api/user/signup",
        {
          name,
          email,
          phone,
          password,
        },
        config
      );

      console.log(data);

      localStorage.setItem("userInfo", JSON.stringify(data));
      //    setLoading(false)
      navigate("/");
    } catch (error) {
      console.log(error);
      //  setLoading(false)
      setError("Cannot use the existed data(email,phone)");
    }
  };

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                      {/* <Form className="form"  onSubmit={handleSubmit(submitHandle)}>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Name"
                            type="text"
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                            {...register("name", {
                              required: "Name is required",
                              minLength: { value: 2, message: "minimum length is 2" },
                            })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            {...register("email", {
                              required: "email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "This is not a valid email",
                              },
                            })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": phoneFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-mobile" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Phone"
                            type="text"
                            onFocus={(e) => setPhoneFocus(true)}
                            onBlur={(e) => setPhoneFocus(false)}
                            {...register("phone", {
                              required: "Number is required",
                              minLength: {
                                value: "10",
                                message: "Phone Number requires 10 digits",
                              },
                              maxLength: {
                                value: "10",
                                message: "maximum length is 10 digit",
                              },
                            })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="text"
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                            {...register("password", {
                              required: "Password is required",
                              minLength: { value: "6", message: "Minimum limit is 6" },
                            })}
                          />
                        </InputGroup>
                        <CardFooter>
                      <Button className="btn-round" color="primary" size="lg" type="submit">
                        Get Started
                      </Button>
                    </CardFooter>
                      </Form> */}
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit(submitHandle)}
                        sx={{ mt: 3 }}
                      >
                        {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              sx={{ input: { color: "white" } }}
                              autoComplete="given-name"
                              name="name"
                              required
                              fullWidth
                              id="name"
                              label="Name"
                              autoFocus
                              variant="standard"
                              {...register("name", {
                                required: "Name is required",
                                minLength: {
                                  value: 2,
                                  message: "minimum length is 2",
                                },
                              })}
                            />
                            <p style={{ color: "red", fontSize: "12px" }}>
                              {errors.name && errors.name.message}
                            </p>
                          </Grid>
                          {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid> */}
                          <Grid item xs={12}>
                            <TextField
                              sx={{ input: { color: "white" } }}
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              variant="standard"
                              {...register("email", {
                                required: "email is required",
                                pattern: {
                                  value: /^\S+@\S+$/i,
                                  message: "This is not a valid email",
                                },
                              })}
                            />
                            <p style={{ color: "red", fontSize: "12px" }}>
                              {errors.email && errors.email.message}
                            </p>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              sx={{ input: { color: "white" } }}
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                              variant="standard"
                              {...register("password", {
                                required: "Password is required",
                                minLength: {
                                  value: "6",
                                  message: "Minimum limit is 6",
                                },
                              })}
                            />
                            <p style={{ color: "red", fontSize: "12px" }}>
                              {errors.password && errors.password.message}
                            </p>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              sx={{ input: { color: "white" } }}
                              required
                              variant="standard"
                              label="Phone"
                              placeholder="Enter Phone"
                              type="text"
                              name="phone"
                              fullWidth
                              // onChange={(e)=>setPhone(e.target.value)}
                              {...register("phone", {
                                required: "Number is required",
                                minLength: {
                                  value: "10",
                                  message: "Phone Number requires 10 digits",
                                },
                                maxLength: {
                                  value: "10",
                                  message: "maximum length is 10 digit",
                                },
                              })}
                            />
                            <p style={{ color: "red", fontSize: "12px" }}>
                              {errors.phone && errors.phone.message}
                            </p>
                          </Grid>
                          <Grid item xs={12}></Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          color="primary"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item style={{ marginTop: "-2rem" }}>
                            <Link href="/login-page" variant="body2">
                              Already have an account? Sign in
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
