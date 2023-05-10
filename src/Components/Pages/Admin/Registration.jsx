import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { toast, ToastContainer } from 'react-toastify'
import "firebase/auth";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
function Register() {
    let move = useNavigate();
    const data = useForm();
    const { watch } = useForm()
    const [number, setNumber] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [secondInput, setSecondInput] = useState("");
    const [showSecondInput, setShowSecondInput] = useState(false);
    const [showSecondButton, setSecondShowButton] = useState(false);
    const password = watch("password");
    const confirm_password = watch("confirm_password");
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
                // if (phoneNumber == "92") {
                //     return true
                // }
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
        await axios.post(`${process.env.REACT_APP_BASE_URL}register`, data);
        localStorage.setItem('role', "user");
        move("/login")
        console.log(data);
    }
    const handleNumberChange = (event) => {
        const inputNumber = event.target.value.trim();
        setNumber(inputNumber);
        setShowButton(inputNumber !== "");
    };
    const handleVerifyClick = (e) => {
        e.preventDefault();
        const numberRegex = /^[0-9]*$/;

        if (!numberRegex.test(number)) {
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
                                    <input type="text" id="name" className="form-control form-control-lg"
                                        placeholder="Enter Your Name"
                                        {...data.register("name", { required: true })}
                                    />
                                    {data.formState.errors.name && data.formState.errors.name.type == 'required' && <div className="error"> Please Your Name</div>}
                                </div>

                                {/* Email Input */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="email">
                                        Email address
                                    </label>
                                    <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter email address" {...data.register('email', {
                                        required: true, validate: ((data) => {
                                            if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(data)) { return true } else {
                                                return false;
                                            }
                                        })
                                    })}
                                    />
                                    {data.formState.errors.email ? (data.formState.errors.email.type === 'required' ?
                                        <div className="error">Please enter your Email</div> :
                                        <div className="error">Please enter a valid Email</div>) :
                                        null}     </div>

                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="form3Example3">
                                        Address
                                    </label>
                                    <input type="text" id="address" className="form-control form-control-lg"
                                        placeholder="Address"
                                        {...data.register("address", { required: true })}
                                    />
                                    {data.formState.errors.address && data.formState.errors.address.type == 'required' && <div className="error"> Please Your Address</div>}
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="password">
                                        Password
                                    </label>
                                    <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password" name='password'
                                        value={password}  {...data.register("password", { required: true })}
                                    />
                                    {data.formState.errors.password && data.formState.errors.password.type === "required" && (
                                        <div className="error">Please enter your password</div>
                                    )}

                                </div>
                                {/* confirm password */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="password">
                                        Confirm  Password
                                    </label>
                                    <input type="password" id="confirm_password" className="form-control form-control-lg" placeholder="Enter Confirm assword"
                                        name="confirm_password"
                                        {...data.register("confirm_password", { required: true })}
                                        value={confirm_password}
                                        {...data.register("confirm_password", {
                                            required: true,
                                            validate: (value) => value === password,
                                        })}
                                    />
                                    {data.formState.errors.confirm_password && data.formState.errors.confirm_password.type === "required" && (
                                        <div className="error">Please confirm your password</div>
                                    )}
                                    {/* {data.formState.errors.confirm_password && data.formState.errors.confirm_password.type === "validate" && (
                                        <div className="error">Passwords do not match</div>
                                    )} */}
                                </div>
                                {/* Mobile Number */}
                                <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="form3Example3">
                                        Mobile Number
                                    </label>
                                    <input type="number" id="number" className="form-control form-control-lg"
                                        placeholder="+923..." value={number} onChange={handleNumberChange}
                                    // {...data.register("mobile", { required: true })}
                                    />
                                    {data.formState.errors.number && data.formState.errors.number.type == 'required' && <div className="error"> Please Your Mobile Number</div>}
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