import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Row, Col } from "reactstrap";
import { userSchemaValidation } from "../Validation/UserValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { updateuser } from "../Featuters/UserSlice";
import { useParams, useNavigate } from "react-router-dom";

const Updateuser = () => {
  const { user_email, user_name, user_password } = useParams();

  const [name, setName] = useState(user_name);
  const [email, setEmail] = useState(user_email);
  const [password, setPassword] = useState(user_password);
  const [confirmPassword, setConfirmPassword] =
    useState(user_password);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const handleUpdate = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    dispatch(updateuser(userData));

    alert("User Updated Successfully");
    navigate("/register");
  };

  return (
    <Container>
      <Row className="formrow">
        <Col className="columndiv1">
          <Form
            className="div-form"
            onSubmit={handleSubmit(handleUpdate)}
          >
            <section className="form">
              <h1>Update User</h1>

              <FormGroup>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  {...register("name", {
                    onChange: (e) => setName(e.target.value),
                  })}
                />
                <p className="error">{errors.name?.message}</p>
              </FormGroup>

              <FormGroup>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  readOnly
                  {...register("email")}
                />
                <p className="error">{errors.email?.message}</p>
              </FormGroup>

              <FormGroup>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  {...register("password", {
                    onChange: (e) => setPassword(e.target.value),
                  })}
                />
                <p className="error">{errors.password?.message}</p>
              </FormGroup>

              <FormGroup>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  {...register("confirmPassword", {
                    onChange: (e) =>
                      setConfirmPassword(e.target.value),
                  })}
                />
                <p className="error">
                  {errors.confirmPassword?.message}
                </p>
              </FormGroup>

              <Button color="primary" type="submit">
                Update User
              </Button>
            </section>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Updateuser;