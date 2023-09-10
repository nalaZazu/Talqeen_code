import React, { useEffect, useState } from "react";
import { useReducer } from "react";


const initalState = {
    firstName: '',
    email: '',
    password: ''
}
const reducer = (state, action) => {
    console.log("state", state);
    switch (action.type) {
        case 'HANDLE_INPUT':
            return {
                ...state,
                [action.field]: action.payload
            }
    }
}
const Hooks = () => {
    const [state, dispatch] = useReducer(reducer, initalState)
    const [submitted, setSubmitted] = useState(false);
    const handleTextChange = (e) => {
        dispatch({
            type: 'HANDLE_INPUT',
            field: e.target.name,
            payload: e.target.value
        })
    }
    const hnadleCounterSub = () => {
        dispatch({
            type: 'SUBS'
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted with data:", state);
        setSubmitted(true);
    }
    useEffect(() => {
        if (submitted) {
            alert("Form submitted with data:\n" + JSON.stringify(state,
                null, 2));
        }
    }, [submitted, state])
    return <React.Fragment>
        <div className="layout_padding about_section">
            <h2 className="main-heading">Using of Reducer</h2>
            {/* <p>{state}</p> */}
            <form onSubmit={handleSubmit}>
                <input placeholder="name" name="firstName"
                    value={state.firstName} onChange={(e) => handleTextChange(e)} />
                <input placeholder="email" name="email"
                    value={state.email} onChange={(e) => handleTextChange(e)} />
                <input placeholder="password" name="password"
                    value={state.password} onChange={(e) => handleTextChange(e)} />
                <button type="submit" className="call_to-btn">Submit</button>
            </form>

            <div style={{ display: "flex", justifyContent: 'center' }}>
                {/* <button onClick={hnadleCounterAdd} className="call_to-btn">+</button> */}
                <button onClick={hnadleCounterSub} className="call_to-btn">-</button>
            </div>


        </div>


    </React.Fragment>;
};

export default Hooks;
