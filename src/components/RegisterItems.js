import { Form, Button, Row, Col, Container } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react"



const initialState = {
    name: "",
    phone: "",
    company: "",
    email: "",
    Address: "",
    password: "",
    confirmpassword: "",
}

const passVerificationError = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpc1Chr: false,

}

const RegisterItems = () => {
    const [newUser, setnewUser] = useState(initialState)
    const [passwordError, setPasswordError] = useState(passVerificationError);

    useEffect(() => {

    }, [newUser])

    const handleOnChange = (e) => {
        const { value, name } = e.target
        setnewUser({ ...newUser, [name]: value });
        if (name == "password") {
            const isLenthy = value.lenght > 8
            const hasUpper = /[A-Z]/.test(value)
            const hasLower = /[a-z]/.test(value)
            const hasNumber =/[0-9]/.test(value)
            const hasSpc1Chr = /[!,@,#,&,*,&]/.test(value)
            setPasswordError({ ...passwordError, isLenthy, hasUpper, hasLower, hasNumber, hasSpc1Chr, })
        }
    }





    console.log(newUser);
    return (
        <div className="bg-success py-3">
            <Row>
                <Col className="text-center py-2">
                    <h1>Individual Registration Form</h1>
                </Col>
            </Row>


            <Row>
                <Col>
                    <Form className="bg-info container-sm py-4 px-5 ">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="name" value={newUser.name} placeholder="Enter username" className="inputs" onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control className="inputs" name="phone" type="number" value={newUser.phone} placeholder="Enter phonenumber" onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onChange={handleOnChange} type="email" placeholder="Enter E-mail" name="email" value={newUser.email} className="inputs" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control onChange={handleOnChange} type="text" placeholder="Enter company name" name="company" value={newUser.company} className="inputs" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={handleOnChange} type="text" placeholder="Enter Address" name="Address" className="inputs" value={newUser.Address} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleOnChange} type="password" placeholder="Enter Your password" name="password" value={newUser.password} className="inputs" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={handleOnChange} type="password" placeholder="Confirm password" name="confirmpassword" className="inputs" value={newUser.confirmpassword} />
                       </Form.Group>
                        <Button variant="primary" type="submit" className="my-3">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>

    )
}
export default RegisterItems;
