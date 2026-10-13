import { Container, Button, Form, FormGroup, Row, Col } from "reactstrap";
import { userSchemaValidation } from "../Validation/UserValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector ,useDispatch} from "react-redux";
import { useState } from "react";
import { addUser, deleteUser} from "../Featuters/UserSlice";
import {Link} from "react-router-dom";
const Register = () => {
  const [name,setname]=useState(" ");
  const [email,setemail]=useState(" ");
  const [password,setpassword]=useState(" ");
  const [confirmPassword,setconfirmPassword]=useState(" ");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const onSubmit = (data) => {
    try{
      const UserData={
        name:data.name,
        email:data.email,
        password:data.password,
      }
      dispatch(addUser(UserData));
    console.log("Form Data", data);
    alert("Validation Works")
  }
    catch(error)
    {
      console.log("error");

    }

  };
  const handleDelete =(email=>{
    dispatch(deleteUser(email));
  })

  const userList = useSelector((state)=>state.users.value);

  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1">
          <Form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <section className="form">

              
              <FormGroup className="form-control">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                  {...register("name",
                    {onChange:(e)=>setname(e.target.value)})}
                />
                <p className="error">{errors.name?.message}</p>
              </FormGroup>

              
              <FormGroup className="form-control">
                <input
                  id="Email"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  {...register("email",{onChange:(e)=>setemail(e.target.value)})}
                />
                <p className="error">{errors.email?.message}</p>
              </FormGroup>

              
              <FormGroup className="form-control">
                <input
                  id="Password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  {...register("password",{onChange:(e)=>setpassword(e.target.value)})}
                />
                <p className="error">{errors.password?.message}</p>
              </FormGroup>

             
              <FormGroup className="form-control">
                <input
                  id="ConfirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  type="password"
                  {...register("confirmPassword",{onChange:(e)=>setconfirmPassword(e.target.value)})}
                />
                <p className="error">{errors.confirmPassword?.message}</p>
              </FormGroup>

              

              
              <Button color="primary" type="submit">
                Register
              </Button>

            </section>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md = {6}>
        <table border={1}>
          <tbody>
            {userList.map((user)=>
          <tr key ={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td> <Button className="button" onClick={()=>handleDelete(user.email)}> 
              Delete</Button></td>
              <td>
                <Link to={`/update/${user.email}/${user.name}/${user.password}`}>
                <Button color="primary"> Update</Button>
                </Link>
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