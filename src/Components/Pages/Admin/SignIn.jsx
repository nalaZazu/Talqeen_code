import React from 'react'
import { useState } from 'react'

function SignIn() {
    const [value, setValue] = useState(
        {

        }
    )
    return (
        <React.Fragment>
            <section className="h-100 ">
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col text-warning">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">

                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample photo"
                                            className="img-fluid"
                                            style={{
                                                borderTopLeftRadius: ".25rem",
                                                borderBottomLeftRadius: ".25rem"
                                            }}
                                        />
                                    </div>
                                    <div className="col-xl-6 text-warning">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase text-warning">
                                                Registration form
                                            </h3>
                                            <div className="row text-warning">
                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label" htmlFor="form3Example1m">
                                                        First name
                                                    </label>
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            name='name'
                                                            id="form3Example1m"
                                                            className="form-control form-control-lg"
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 text-warning">
                                                    <label className="form-label" htmlFor="form3Example1n">
                                                        Last name
                                                    </label>
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Example1n"
                                                            lastname='lastname'
                                                            className="form-control form-control-lg"
                                                        />

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4 text-warning">
                                                <label className="form-label" htmlFor="form3Example8">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="form3Example8"
                                                    className="form-control form-control-lg"
                                                />

                                            </div>
                                            <div className="form-outline mb-4 text-warning">
                                                <label className="form-label" htmlFor="form3Example90">
                                                    Mobile
                                                </label>
                                                <input
                                                    type="number"
                                                    id="form3Example90"
                                                    className="form-control form-control-lg"
                                                />

                                            </div>
                                            <div className="form-outline mb-4 text-warning">
                                                <label className="form-label" htmlFor="form3Example99">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example99"
                                                    className="form-control form-control-lg"
                                                />

                                            </div>
                                            <div className="form-outline mb-4 text-warning">
                                                <label className="form-label" htmlFor="form3Example97">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="form3Example97"
                                                    className="form-control form-control-lg"
                                                />

                                            </div>
                                            <div className="form-outline mb-4 text-warning">
                                                <label className="form-label" htmlFor="form3Example97">
                                                    Confirm  Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="form3Example97"
                                                    className="form-control form-control-lg"
                                                />

                                            </div>
                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="button" className="btn btn-warning  btn-lg ms-2"
                                                    style={{ color: "white" }}>
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    )
}

export default SignIn