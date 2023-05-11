import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { toast, ToastContainer } from 'react-toastify'
import "firebase/auth";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
function Register() {
    let move = useNavigate();
    const [number, setNumber] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [secondInput, setSecondInput] = useState("");
    const [showSecondInput, setShowSecondInput] = useState(false);
    const [showSecondButton, setSecondShowButton] = useState(false);
    // for password 
    const formSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        address: Yup.string().required('Address is required'),
        password: Yup.string()
            .required('Password is mendatory')
            .min(10, 'Password must be at 10 char long'),
        confirm_password: Yup.string()
            .required('confirm_Password is aslo  mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
        number: Yup
            .string()
            .matches(
                /^\+(?:[0-9] ?){6,14}[0-9]$/,
                "Please enter a valid phone number with country code"
            )
            .required("Phone number is required"),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const data = useForm(formOptions);
    // reCAPTCHA solved
    const configCaptch = () => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            }
        }, auth);
    }
    // for phone Number 
    const onSignInSubmit = (number) => {
        console.log(number, "for phone verification")
        configCaptch();
        const phoneNumber = "+" + number;
        const appVerifier = window.recaptchaVerifier;
        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setShowSecondInput(true);
            }).catch((error) => {
                console.log(error, "testing error")
            });
    }
    // for the opt  verification
    const verifyCodeOpt = () => {
        window.confirmationResult.confirm(secondInput).then((result) => {
            // User signed in successfully.
            const user = result.user;
            toast.success("Opt is Valid")
            console.log(user);
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            toast.error("Opt is not Valid")
            console.log(error, "opt error testing");
        });
    }
    const SignIn = async (data) => {
        console.log(data);
        await axios.post(`${process.env.REACT_APP_BASE_URL}register`, data);
        localStorage.setItem('role', "user");
        move("/login")

    }
    const handleNumberChange = (event) => {
        const inputNumber = event.target.value.trim();
        setNumber(inputNumber);
        setShowButton(inputNumber !== "");
    };
    const handleVerifyClick = (e) => {
        e.preventDefault();
        if (number.length !== 12) {
            toast.error("Number is not vaild")
        }
        else {
            toast.success("Send a OPT")
            onSignInSubmit(number)
        }
    };
    const handleSecondInputChange = (event) => {
        const input = event.target.value.trim();
        setSecondInput(input);
        setSecondShowButton(input !== "")
    };
    return (
        <React.Fragment>
            <section className="h-100 " style={{ margin: "30px 0 210px 0" }}>
                <div className="container-fluid h-custom h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <h1 style={{ textAlign: "center", color: "#fec913" }}>Register</h1>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-2">
                            <form onSubmit={data.handleSubmit(SignIn)}>
                                {/* Name input */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="form3Example3">
                                        Name
                                    </label>
                                    <input type="text" id="name"
                                        placeholder="Enter Your Name"
                                        className={`form-control ${data.formState.errors.address ? 'is-invalid' : ''}`}
                                        {...data.register("name")}
                                    />
                                    <div className="error">{data.formState.errors.name?.message}</div>
                                </div>
                                {/* Email Input */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="email">
                                        Email address
                                    </label>
                                    <input type="email" id="email" className={`form-control ${data.formState.errors.email ? 'is-invalid' : ''}`}
                                        {...data.register("email")} placeholder="Enter email address"
                                    />
                                     <div className="error">{data.formState.errors.email?.message}</div>
                                </div>

                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="form3Example3">
                                        Address
                                    </label>
                                    <input type="text" id="address"
                                        placeholder="Address"
                                        className={`form-control ${data.formState.errors.address ? 'is-invalid' : ''}`}
                                        {...data.register("address")}
                                    />
                                    <div className="error">{data.formState.errors.address?.message}</div>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="Enter a Password"
                                        {...data.register('password')}
                                        className={`form-control ${data.formState.errors.password ? 'is-invalid' : ''}`}
                                    />
                                    <div className="error">{data.formState.errors.password?.message}</div>
                                </div>
                                {/* confirm password */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="password">
                                        Confirm  Password
                                    </label>
                                    <input
                                        name="confirm_password"
                                        type="password"
                                        placeholder="Enter Confirm password"
                                        {...data.register('confirm_password')}
                                        className={`form-control ${data.formState.errors.confirm_password ? 'is-invalid' : ''}`} />
                                    <div className="error">{data.formState.errors.confirm_password?.message}</div>
                                </div>
                                {/* Mobile Number */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="form3Example3">
                                        Mobile Number
                                    </label>
                                    <input type="number" id="number"
                                        placeholder="923..." value={number} onChange={handleNumberChange}
                                        className={`form-control ${data.formState.errors.number ? 'is-invalid' : ''}`}
                                        data={data.register('number')}
                                    />
                                    <div className="error">{data.formState.errors.number?.message}</div>
                                    {showButton &&
                                        <div className="text-center text-lg-start mt-2 pt-2 ">
                                            <button id="sign-in-button" className="btn btn-warning btn-lg w-25" style={{ color: "#fefeff" }}
                                                onClick={handleVerifyClick}> Send
                                            </button>
                                            <ToastContainer />
                                        </div>
                                    }
                                    {/* OPT Number */}
                                    {
                                        showSecondInput && <div className="form-outline mb-2">
                                            <label className="form-label text-warning" htmlFor="form3Example3">
                                                Enter Your Opt
                                            </label>
                                            <input type="number" id="secondInput" className="form-control form-control-lg"
                                                placeholder='Enter a Opt' value={secondInput}
                                                onChange={handleSecondInputChange}
                                            />
                                        </div>
                                    }
                                    {showSecondButton && <div className="text-center text-lg-start mt-2 pt-2 ">
                                        <button type="button" id="sign-in-button" className="btn btn-warning btn-lg w-25" style={{ color: "#fefeff" }}
                                            onClick={verifyCodeOpt}  > Verify</button>
                                    </div>}
                                </div>
                                {/* <input name="tel" ref={data.register('tel')} />
                                {data.formState.errors.tel && <p>{data.formState.errors.tel.message}</p>} */}
                                <div className="text-center text-lg-start mt-2 pt-2 ">
                                    <button type="submit" className="btn btn-warning btn-lg w-100" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", color: "#fefeff" }}> Register
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Do you have account?{" "}
                                        <Link to="/login" className="link-warning">login </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </React.Fragment>
    )
}

export default Register