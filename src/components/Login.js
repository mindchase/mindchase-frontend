import React from 'react'
import {Button , Form ,FormGroup,Label,Input} from 'reactstrap'
import {FacebookLoginButton }from 'react-social-login-buttons'
import 'bootstrap/dist/css/bootstrap.css'





function Login() {
    return (
        <Form className= "login-form">
            <h1>
             <span className="font-weight-bold">
                 Digital Workshop login
            </span>   
            </h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"></Input>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="Password" placeholder="Password"></Input>
            </FormGroup>

            <Button className="btn-lg btn-dark btn-block mt-3 mb-3">
                Log in
            </Button>
            <div className="text-center pt-3">
                or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"/>
            <div className="text-center">
                <a href="/sign-up">Sign up</a>
                <span className="p-2">|</span>
                <a href="/sign-up">Forget Password</a>


            </div>
        </Form>
    )
}

export default Login
