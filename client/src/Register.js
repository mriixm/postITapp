import React from "react";
import {
  Form,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { userSchemaValidation } from "../Validations/UserValidations";
import { addUser } from "../Feature/UserSlice";

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const userlist = useSelector((state) => state.users.value) || [];


  const onSubmit = (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      dispatch(addUser(userData));

      console.log("Form Data:", data);
      alert("Validation All Good!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1">
          <Form
            className="div-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <section className="form">

            
              <FormGroup className="form-group">
                <input
                  type="text"
                  className="name"
                  placeholder="Enter your name..."
                  {...register("name")}
                />

                <p className="error">
                  {errors.name?.message}
                </p>
              </FormGroup>

              
              <FormGroup className="form-group">
                <input
                  type="email"
                  className="email"
                  placeholder="Enter your email..."
                  {...register("email")}
                />

                <p className="error">
                  {errors.email?.message}
                </p>
              </FormGroup>

              
              <FormGroup className="form-group">
                <input
                  type="password"
                  className="password"
                  placeholder="Enter your password..."
                  {...register("password")}
                />

                <p className="error">
                  {errors.password?.message}
                </p>
              </FormGroup>

          
              <FormGroup className="form-group">
                <input
                  type="password"
                  className="ConfirmPassword"
                  placeholder="Confirm your password..."
                  {...register("confirmPassword")}
                />

                <p className="error">
                  {errors.confirmPassword?.message}
                </p>
              </FormGroup>

              {/* Submit Button */}
              <Button
                color="primary"
                className="button"
                type="submit"
              >
                Register
              </Button>

            </section>
          </Form>
        </Col>
      </Row>

      {/* User Table */}
      <Row className="mt-4">
        <Col md={6}>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>

            <tbody>
              {userlist.length > 0 ? (
                userlist.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
