// import axios from 'axios'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import $ from 'jquery'
import 'datatables.net'
// import DataTable from 'react-data-table-component'


// export default function Pannel() {
//     const [userData, setuserData] = useState([])
//     const token = localStorage.getItem('token')
//     const getUser = async () => {
//         let reqOptions = {
//             url: `${process.env.REACT_APP_BASE_URL}admin/users`,
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             },
//         }
//         let response = await axios.request(reqOptions);
//         setuserData(response.data.data);
//         console.log(response.data.data);
//     }
//     useEffect(() => {
//         getUser()
//     }, [])

//     const colums = [
//         {
//             name: 'Name',
//             selector: row => row.name,
//             sortable: true,

//         },
//         {
//             name: 'email',
//             selector: row => row.email,
//         },

//         {
//             name: 'role',
//             selector: row => row.role,
//         }
//     ]

//     return (
//         <React.Fragment>
//             <div className='conatiner mt-5'>
//                 <DataTable
//                     columns={colums}
//                     data={userData}
//                 />
//             </div>


//         </React.Fragment>
//     )
// }

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Pannel() {
//     const [userData, setuserData] = useState([])
//     // const token = localStorage.getItem('token')
//     // const getUser = async () => {
//     //     let reqOptions = {
//     //         url: `https://jsonplaceholder.typicode.com/todos`,
//     //         method: "GET",
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //             'Authorization': 'Bearer ' + token
//     //         },
//     //     }
//     //     let response = await axios.request(reqOptions);
//     //     setuserData(response);
//     //     console.log(response);
//     // }
//     // useEffect(() => {
//     //     getUser()
//     // }, [userData])

//     // const totalPages = 5;
//     // const [currentPage, setCurrentPage] = useState(1);
//     // function handlePageChange(pageNumber) {
//     //     setCurrentPage(pageNumber);
//     // }
//     // function getPaginationNumbers() {
//     //     const paginationNumbers = [];
//     //     for (let i = 1; i <= totalPages; i++) {
//     //         paginationNumbers.push(i);
//     //     }
//     //     return paginationNumbers;
//     // }
//     // function handlePageChange(pageNumber) {
//     //     setCurrentPage(pageNumber);
//     // }
//     // function getPaginationNumbers() {
//     //     const paginationNumbers = [];
//     //     for (let i = 1; i <= totalPages; i++) {
//     //         paginationNumbers.push(i);
//     //     }
//     //     return paginationNumbers;
//     // }
//     // const paginationNumbers = getPaginationNumbers();

//     // const displayData = userData.map((post, index) => {
//     //     const { id, title } = post
//     //     return (
//     //         <tr>
//     //             <th scope="row" key={index}>{index + 1}</th>
//     //             <td>{title}</td>
//     //         </tr >
//     //     )
//     // })
//     return (
//         // <>
//         //     <nav>
//         //         <ul className="pagination">
//         //             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//         //                 <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
//         //             </li>
//         //             {paginationNumbers.map((number) => (
//         //                 <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
//         //                     <button className="page-link" onClick={() => handlePageChange(number)}>{number}</button>
//         //                 </li>
//         //             ))}
//         //             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//         //                 <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//         //             </li>
//         //         </ul>
//         //     </nav>
//         //     {
//         //         displayData
//         //     }
//         // </>
//         <>

//         </>
//     );
// }

// export default Pannel

// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';

// const Sidebar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   return (
//     <div className={`sidebar-wrapper ${showSidebar ? 'active' : ''}`}>
//       <Button variant="primary" onClick={toggleSidebar}>
//         Toggle Sidebar
//       </Button>
//       <ul>
//         <li>Menu Item 1</li>
//         <li>Menu Item 2</li>
//         <li>Menu Item 3</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// import React, { useState, useEffect } from "react";

// function UserTable() {
//   const [users, setUsers] = useState([]);
//   const [userCount, setUserCount] = useState(0);

//   useEffect(() => {
//     // Fetch user data and update the state
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setUserCount(data.length);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>User Table</h2>
//       <p>Number of users: {userCount}</p>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <UserTable />
//     </div>
//   );
// }

// export default Dashboard;

// import { useState } from 'react';

// function InputWithButton() {
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleButtonClick = () => {
//     console.log(`Button clicked with input text: ${inputText}`);
//   };

//   return (
//     <div>
//       <input type="text" value={inputText} onChange={handleInputChange} />
//       {inputText && <button onClick={handleButtonClick}>Button</button>}
//     </div>
//   );
// }
// export default InputWithButton


// import { useState } from 'react';

// function InputWithButton() {
//   const [inputText, setInputText] = useState('');
//   const [buttonClicked, setButtonClicked] = useState(false);
//   const [secondInputText, setSecondInputText] = useState('');

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleButtonClick = () => {
//     setButtonClicked(true);
//   };

//   const handleSecondInputChange = (e) => {
//     setSecondInputText(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputText} onChange={handleInputChange} />
//       {inputText && !buttonClicked && <button onClick={handleButtonClick}>Button</button>}
//       {buttonClicked && (
//         <div>
//           <input type="text" value={secondInputText} onChange={handleSecondInputChange} />
//         </div>
//       )}
//     </div>
//   );
// }
// export default InputWithButton

// import React, { useState, useEffect } from 'react';

// function InputWithButton() {
//   const [filterOptions, setFilterOptions] = useState({
//     all: true,
//     funny: false,
//     educational: false,
//     music: false
//   });
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       let filteredData = [];
//       if (filterOptions.all) {
//         filteredData = data;
//       } else {
//         if (filterOptions.funny) {
//           filteredData = filteredData.concat(data.filter(video => video.category === 'funny'));
//         }
//         if (filterOptions.educational) {
//           filteredData = filteredData.concat(data.filter(video => video.category === 'educational'));
//         }
//         if (filterOptions.music) {
//           filteredData = filteredData.concat(data.filter(video => video.category === 'music'));
//         }
//       }
//       setVideos(filteredData);
//     };
//     fetchData();
//   }, [filterOptions]);

//   const handleFilterChange = (event) => {
//     const { name, checked } = event.target;
//     setFilterOptions({
//       ...filterOptions,
//       [name]: checked
//     });
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           <input type="checkbox" name="all" checked={filterOptions.all} onChange={handleFilterChange} />
//           All
//         </label>
//         <label>
//           <input type="checkbox" name="funny" checked={filterOptions.funny} onChange={handleFilterChange} />
//           Funny
//         </label>
//         <label>
//           <input type="checkbox" name="educational" checked={filterOptions.educational} onChange={handleFilterChange} />
//           Educational
//         </label>
//         <label>
//           <input type="checkbox" name="music" checked={filterOptions.music} onChange={handleFilterChange} />
//           Music
//         </label>
//       </div>
//       <div>
//         {videos.map(video => (
//           <div key={video.id}>
//             <h2>{video.name}</h2>
//             <p>{video.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default InputWithButton;


import axios from "axios";
import DataTable from "react-data-table-component";
import UserEdit from './User/UserEdit';
import { Link } from 'react-router-dom';

// const InputWithButton = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         setUsers(response.data);
//         setFilteredUsers(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const handleFilterChange = (e) => {
//     const filter = e.target.value;
//     if (e.target.checked) {
//       setFilteredUsers([...filteredUsers, filter]);
//     } else {
//       setFilteredUsers(filteredUsers.filter(f => f !== filter));
//     }
//   };
//   // const filteredUsers = users.filter(user => {
//   //   if (selectedFilter.length === 0) {
//   //     return true;
//   //   } else {
//   //     return selectedFilter.includes(user.username[0]);
//   //   }
//   // });

//   return (
//     <div>
//       <h1>Filter Example</h1>
//       {users.length === 0 ? (
//         <div>Loading...</div>
//       ) : (
//         <div>
//           <h2>Users</h2>
//           <ul>
//             {users.map((user) => (
//               <li key={user.id}>{user.username}</li>
//             ))}
//           </ul>
//           <h2>Filter</h2>
//           <div>
//             <input type="checkbox" value="user" onChange={handleFilterChange} />
//             <label>All</label>
//           </div>
//           <div>
//             <input type="checkbox" value="Bret" onChange={handleFilterChange} />
//             <label>Bret</label>
//           </div>
//           <div>
//             <input type="checkbox" value="Antonette" onChange={handleFilterChange} />
//             <label>Antonette</label>
//           </div>
//           <h2>Filtered Users</h2>
//           <ul>
//             {filteredUsers.map((user) => (
//               <li key={user.id}>{user.username}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputWithButton;


// const InputWithButton = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [isAllSelected, setIsAllSelected] = useState(false);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const handleCheckboxChange = (event, user) => {
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setSelectedUsers([...selectedUsers, user]);
//     } else {
//       setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser.id !== user.id));
//     }
//   };

//   const handleAllCheckboxChange = (event) => {
//     setIsAllSelected(event.target.checked);
//     if (event.target.checked) {
//       setSelectedUsers(users);
//     } else {
//       setSelectedUsers([]);
//     }
//   };

//   return (
//     <div>
//       <h1>Selected Users:</h1>
//       <ul>
//         {selectedUsers.map(selectedUser => (
//           <li key={selectedUser.id}>{selectedUser.name}</li>
//         ))}
//       </ul>
//       <h1>All Users:</h1>
//       <div>
//         <label>
//           <input type="checkbox" checked={isAllSelected} onChange={handleAllCheckboxChange} />
//           All
//         </label>
//       </div>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <label>
//               <input type="checkbox" checked={selectedUsers.some(selectedUser => selectedUser.id === user.id)} onChange={(event) => handleCheckboxChange(event, user)} />
//               {user.name}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InputWithButton;



// const InputWithButton = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // validate the form fields
//     const errors = [];
//     if (!name.trim()) {
//       errors.push('Name is required.');
//     }
//     if (!email.trim()) {
//       errors.push('Email is required.');
//     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//       errors.push('Invalid email address.');
//     }
//     if (!password.trim()) {
//       errors.push('Password is required.');
//     } else if (password.length < 6) {
//       errors.push('Password must be at least 6 characters long.');
//     }
//     if (password !== confirmPassword) {
//       errors.push('Passwords do not match.');
//     }

//     if (errors.length > 0) {
//       setErrors(errors);
//     } else {
//       // submit the form data
//       console.log('Form submitted successfully.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(event) => setConfirmPassword(event.target.value)}
//         />
//       </div>
//       <div>
//         <button type="submit">Register</button>
//       </div>
//       {errors.length > 0 && (
//         <ul>
//           {errors.map((error, index) => (
//             <li key={index}>{error}</li>
//           ))}
//         </ul>
//       )}
//     </form>
//   );
// };

// export default InputWithButton;

// reCAPTCHA solved

// const configCaptch = () => {
//     const auth = getAuth();
//     window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//         'size': 'invisible',
//         'callback': (response) => {
//             // reCAPTCHA solved, allow signInWithPhoneNumber.
//             onSignInSubmit();
//         }
//     }, auth);
// }
// // for phone Number 
// const onSignInSubmit = (number) => {
//     console.log(number, "for phone verification")
//     configCaptch();
//     const phoneNumber = "+" + number;
//     const appVerifier = window.recaptchaVerifier;
//     const auth = getAuth();
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//             window.confirmationResult = confirmationResult;
//             if (phoneNumber == "92") {
//                 return true
//             }
//             setShowSecondInput(true);

//         }).catch((error) => {
//             console.log(error, "testing error")
//         });
// }
// // for the opt  verification
// const verifyCodeOpt = () => {
//     window.confirmationResult.confirm(secondInput).then((result) => {
//         // User signed in successfully.
//         const user = result.user;
//         alert("verification opt")
//         console.log(user);
//         // ...
//     }).catch((error) => {
//         // User couldn't sign in (bad verification code?)
//         toast.error("Opt is not Valid")
//         console.log(error, "opt error testing");
//         // ...
//     });
// }
// const handleNumberChange = (event) => {
//     const inputNumber = event.target.value.trim();
//     setNumber(inputNumber);
//     setShowButton(inputNumber !== "");
// };
// const handleVerifyClick = () => {
//     const numberRegex = /^[0-9]*$/;

//     if (!numberRegex.test(number)) {
//         toast.error("Number is not vaild")
//     }
//     else {
//         toast.success("Send a OPT")
//         onSignInSubmit(number)
//     }
// };
// const handleSecondInputChange = (event) => {
//     const input = event.target.value.trim();
//     setSecondInput(input);
//     setSecondShowButton(input !== "")
// };
// const handleSubmit = () => {
//     console.log(`Number submitted: ${number}`);
//     console.log(`Second input submitted: ${secondInput}`);
// };




{/* Email Input */ }
{/* <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="email">
                                        Email address
                                    </label>
                                    <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter email address" {...data.register('email', {
                                        required: true, validate: ((data) => {
                                            if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(data)) { return true } else {
                                                return false;
                                            }
                                        })
                                    })} */}
{/* /> */ }
{/* {data.formState.errors.email ? data.formState.errors.email.type == 'required' <div className="error"> Please Your Email</div> :
                                     data.formState.errors.email.type == 'validate'
                                         <div className="error"> Please enter your Email</div>} */}
{/* {data.formState.errors.email && data.formState.errors.email.type == 'required' && <div className="error"> Please Your Email </div>}

                                </div> */}

{/* <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="form3Example3">
                                        Address
                                    </label>
                                    <input type="text" id="address" className="form-control form-control-lg"
                                        placeholder="Address"
                                        {...data.register("address", { required: true })}
                                    />
                                    {data.formState.errors.address && data.formState.errors.address.type == 'required' && <div className="error"> Please Your Address</div>}
                                </div> */}
{/* Password input */ }
{/* <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="password">
                                        Password
                                    </label>
                                    <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password" {...data.register("password", { required: true })} />
                                    {data.formState.errors.password && data.formState.errors.password.type == 'required' && <div className="error"> Please enter your password</div>}
                                    {data.formState.errors.password && data.formState.errors.password.type == 'minLength' && <div className="error"> Please Enter 8 character</div>}
                                </div> */}
{/* confirm password */ }
{/* <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="password">
                                        Confirm  Password
                                    </label>
                                    <input type="password" id="confirm_password" className="form-control form-control-lg" placeholder="Enter Confirm  password" {...data.register("confirm_password", { required: true })}
                                    />
                                    {data.formState.errors.confirm_password && data.formState.errors.confirm_password.type == 'required' && <div className="error"> Please Your confirm_password</div>}
                                </div> */}
{/* Mobile Number */ }
{/* <div className="form-outline mb-2">
                                    <label className="form-label text-warning" htmlFor="form3Example3">
                                        Mobile Number
                                    </label>
                                    <input type="number" id="number" className="form-control form-control-lg"
                                        placeholder="923..." value={number} onChange={handleNumberChange}
                                    // {...data.register("mobile", { required: true })}
                                    />
                                    {showButton &&
                                        <div className="text-center text-lg-start mt-2 pt-2 ">
                                            <button id="sign-in-button" className="btn btn-warning btn-lg w-25" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", color: "#fefeff" }}
                                                onClick={handleVerifyClick}> Send
                                            </button>
                                            <ToastContainer />
                                        </div>
                                    }
                                    {data.formState.errors.number && data.formState.errors.number.type == 'required' && <div className="error"> Please Your Mobile Number</div>}


                                    {/* OPT Number */}
//   {
//     showSecondInput && <div className="form-outline mb-2">
//         <label className="form-label text-warning" htmlFor="form3Example3">
//             Enter Your Opt
//         </label>
//         <input type="number" id="secondInput" className="form-control form-control-lg"
//             placeholder='Enter a Opt' value={secondInput}
//             onChange={handleSecondInputChange}
//         />
//     </div>
// }
// {showSecondButton && <div className="text-center text-lg-start mt-2 pt-2 ">
//     <button type="button" id="sign-in-button" className="btn btn-warning btn-lg w-25" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", color: "#fefeff" }}
//         onClick={verifyCodeOpt}  > Verify</button>

// </div>}
{/* </div>  */ }



// import React from 'react';

// const Error = ({ message }) => (
//   <div className="error">{message}</div>
// );

// const InputWithButton = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (username === '' || password === '') {
//       setError('Please enter both username and password');
//     } else {
//       // handle form submission
//     }
//   };

//   const handleChange = (event) => {
//     if (error) {
//       setError(null);
//     }
//     if (event.target.name === 'username') {
//       setUsername(event.target.value);
//     } else if (event.target.name === 'password') {
//       setPassword(event.target.value);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" name="username" value={username} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" name="password" value={password} onChange={handleChange} />
//       </div>
//       {error && <Error message={error} />}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default InputWithButton;

// const InputWithButton = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Validation logic here
//   };

//   const validateForm = () => {
//     let errors = {};
//     let formIsValid = true;

//     if (!name) {
//       formIsValid = false;
//       errors['name'] = 'Please enter your name.';
//     }

//     if (!email) {
//       formIsValid = false;
//       errors['email'] = 'Please enter your email address.';
//     }

//     if (!password) {
//       formIsValid = false;
//       errors['password'] = 'Please enter your password.';
//     }

//     setErrors(errors);

//     return formIsValid;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//         <div className="error">{errors['name']}</div>
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//         <div className="error">{errors['email']}</div>
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <div className="error">{errors['password']}</div>
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default InputWithButton;

// const InputWithButton = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let formIsValid = true;
//     const errors = {};

//     if (!username) {
//       formIsValid = false;
//       errors['username'] = 'Please enter your username.';
//     }

//     if (!password) {
//       formIsValid = false;
//       errors['password'] = 'Please enter your password.';
//     }

//     setErrors(errors);
//     return formIsValid;
//   }

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (validateForm()) {
//       // Submit form
//     }
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     if (name === 'username') {
//       setUsername(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleInputChange} />
//         {errors.username && <span className="text-danger">{errors.username}</span>}
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleInputChange} />
//         {errors.password && <span className="text-danger">{errors.password}</span>}
//       </div>
//       <button type="submit" className="btn btn-primary">Login</button>
//     </form>
//   );
// }

// export default InputWithButton;



// function InputWithButton() {
//   const [videos, setVideos] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     // Fetch videos data from API on component mount
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res => {
//         setVideos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const handleAddVideo = () => {
//     // Open modal box
//     setShowModal(true);
//     console.log("hello and click it ")
//   }

//   const handleSaveVideo = () => {
//     // Make API call to save new video
//     axios.post('/api/videos', {
//       title: title,
//       description: description
//     })
//       .then(res => {
//         // Add new video to videos state and close modal box
//         setVideos([...videos, res.data]);
//         setShowModal(false);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   return (
//     <div>
//       <button onClick={handleAddVideo}>Add Video</button>

//       {showModal && (
//         <div className="modal">
//           <form>
//             <label>Title:</label>
//             <input type="text" value={title} onChange={e => setTitle(e.target.value)} />

//             <label>Description:</label>
//             <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>

//             <button onClick={handleSaveVideo}>Save</button>
//           </form>
//         </div>
//       )}

//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {videos.map(video => (
//             <tr key={video.id}>
//               <td>{video.title}</td>
//               <td>{video.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default InputWithButton;



// function InputWithButton() {
//   const [videos, setVideos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [videosPerPage] = useState(10);

//   useEffect(() => {
//     // Fetch videos data from API on component mount
//     axios.get('/api/videos')
//       .then(res => {
//         setVideos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const indexOfLastVideo = currentPage * videosPerPage;
//   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
//   const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(videos.length / videosPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const renderPageNumbers = pageNumbers.map(number => {
//     return (
//       <li key={number}>
//         <a href="#" onClick={() => setCurrentPage(number)}>
//           {number}
//         </a>
//       </li>
//     );
//   });

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentVideos.map(video => (
//             <tr key={video.id}>
//               <td>{video.title}</td>
//               <td>{video.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <ul id="page-numbers">
//         {renderPageNumbers}
//       </ul>
//     </div>
//   );
// }

// export default InputWithButton;


// function InputWithButton() {
//   const [videos, setVideos] = useState([]);
//   const [visibleVideos, setVisibleVideos] = useState([]);
//   const [videosPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);


//   const getVideo = async () => {
//     const token = localStorage.getItem('token')

//     let reqOptions = {
//       url: `https://jsonplaceholder.typicode.com/posts`,
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//     }
//     let response = await axios.request(reqOptions);
//     setVideos(response.data);
//     setVisibleVideos(response.data.slice(0, videosPerPage));
//   }
//   useEffect(() => {
//     getVideo();
//   }, [videos])
//   // useEffect(() => {
//   //   // Fetch videos data from API on component mount
//   //   axios.get(`${process.env.REACT_APP_BASE_URL}admin/videos`)
//   //     .then(res => {
//   //       setVideos(res.data);
//   //       setVisibleVideos(res.data.slice(0, videosPerPage));
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     });
//   // }, []);

//   const handleSeeMore = () => {
//     const lastIndex = currentPage * videosPerPage;
//     setVisibleVideos(videos.slice(0, lastIndex + videosPerPage));
//     setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {visibleVideos.map(video => (
//             <tr key={video.id}>
//               <td>{video.title}</td>
//               <td>{video.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {visibleVideos.length < videos.length && (
//         <button onClick={handleSeeMore}>See More</button>
//       )}
//     </div>
//   );
// }

// export default InputWithButton;


// function InputWithButton() {
//   const handleDelete = async (post) => {
//     setuserData(userData.filter((d) => d.id !== post.id))
//     await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/users/${post.id}`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + token
//         },
//     });
// }
//   const columns = useMemo(
// 		() => [
// 			{

// 				cell: () => <button type="button" class="btn btn-warning  text-light" style={{ color: "white !important " }} onClick={() => handleDelete(post)}>
//         <i class="fas fa-trash-alt"></i>
//     </button>,
// 				ignoreRowClick: true,
// 				allowOverflow: true,
// 				button: true,
// 			},
// 			{
// 				name: 'Name',
// 				selector: row => row.name,
// 				sortable: true,
// 				grow: 2,
// 			},
// 			{
// 				name: 'email',
// 				selector: row => row.type,
// 				sortable: true,
// 			},


// 		],
// 		[],
// 	);

//   const [userData, setuserData] = useState([])
//     const token = localStorage.getItem('token')
//     const getUser = async () => {
//         let reqOptions = {
//             url: `${process.env.REACT_APP_BASE_URL}admin/users`,
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             },
//         }
//         let response = await axios.request(reqOptions);
//         setuserData(response.data.data);
//         console.log(response.data.data);
//     }
//     useEffect(() => {
//         getUser()
//     }, [])



//   return (
//     <React.Fragment>
//       <div className="container mt-5">
//         <DataTable
//           columns={columns}
//           data={userData}
//           pagination 
//         />

// 	{/* <DataTable
// 		title="Contact List"
// 			columns={columns}
// 			data={filteredItems}
// 			pagination
// 			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
// 			subHeader
// 			subHeaderComponent={subHeaderComponentMemo}
// 			selectableRows
// 			persistTableHead
// 	/> */}

//       </div>
//     </React.Fragment>
//   )
// }

// export default InputWithButton;


// function InputWithButton() {
//   const tableRef = useRef(null)
//   const [userData, setuserData] = useState([])
//   const token = localStorage.getItem('token')

//   useEffect(async () => {

//     let reqOptions = {
//       url: `${process.env.REACT_APP_BASE_URL}admin/users`,
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//     }
//     let response = await axios.request(reqOptions);
//     setuserData(response.data.data);
//     console.log(response.data.data);
//     $(tableRef.current).DataTable()
//   }, [])

//   return (
//     <table ref={tableRef}>

//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           {
//             userData.map((item) => {
//               return (
//                 <>
//                   <td>{item.name}</td>
//                 </>
//               )
//             })
//           }
//         </tr>

//       </tbody>
//     </table>
//   )
// }

// export default InputWithButton;


// function InputWithButton() {
//   const tableRef = useRef(null)
//   const [data, setData] = useState([])

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setData(response.data)
//         $(tableRef.current).DataTable()
//       })
//   }, [])

//   return (
//     <table ref={tableRef}>

//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map(item => (
//           <tr key={item.id}>
//             <td>{item.title}</td>

//             <td>{item.body}</td>
//           </tr>
//         ))}
//       </tbody>

//     </table>
//   )
// }

// export default InputWithButton


// function InputWithButton() {
//   const [userData, setuserData] = useState([])
//   const token = localStorage.getItem('token')
//   const getUser = async () => {
//     let reqOptions = {
//       url: `${process.env.REACT_APP_BASE_URL}admin/users`,
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//     }
//     let response = await axios.request(reqOptions);
//     setuserData(response.data.data);

//   }
//   var json = [
//     {
//       "name": "Ram",
//       "age": "21",
//       "sex": "Male",
//       "occupation": "Doctor"
//     },
//     {
//       "name": "Mohan",
//       "age": "32",
//       "sex": "Male",
//       "occupation": "Teacher"
//     },
//     {
//       "name": "Rani",
//       "age": "42",
//       "sex": "Female",
//       "occupation": "Nurse"
//     },
//     {
//       "name": "Johan",
//       "age": "23",
//       "sex": "Female",
//       "occupation": "Software Engineer"
//     },
//     {
//       "name": "Shajia",
//       "age": "39",
//       "sex": "Female",
//       "occupation": "Farmer"
//     }
//   ];
//   useEffect(() => {
//     $('#table3').DataTable({
//       data: userData,
//       columns: [
//           { data: 'name' },
//           { data: 'age' },
//           { data: 'sex' },
//           { data: 'occupation' }
//       ],
//       "pageLength": 5
//   });
//     getUser()
//   }, [userData])


//   return (
//     <React.Fragment>
//       <table id="table3">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Sex</th>
//             <th>Occupation</th>
//           </tr>
//         </thead>
//       </table>

//     </React.Fragment>
//   )
// }

// export default InputWithButton



// function InputWithButton() {
//   const [data, setData] = useState([])
//   const tableRef = useRef(null)

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts ')
//       .then(response => {
//         setData(response.data)
//       })
//     $(tableRef.current).DataTable({
//       paging: true,
//       pageLength: 10
//     })
//   }, [])

//   return (
//     <table ref={tableRef}>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map(item => (
//           <tr key={item.id}>
//             <td>{item.title}</td>
//             <td>{item.body}</td>
//             <td>{item.email}</td>
//           </tr>
//         ))}
//       </tbody>
//       <div className="pagination-container">
//         <button onClick={() => $(tableRef.current).DataTable().page('previous').draw(false)}>
//           Previous
//         </button>
//         <button onClick={() => $(tableRef.current).DataTable().page('next').draw(false)}>
//           Next
//         </button>
//       </div>

//     </table>
//   )
// }
// export default InputWithButton



// function InputWithButton() {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [userData, setuserData] = useState([])
//   const token = localStorage.getItem('token') 
//   useEffect(() => {

//     console.log('state', selectedRows);
//   }, [selectedRows]);

//   const getUser = async () => {
//     let reqOptions = {
//       url: `${process.env.REACT_APP_BASE_URL}admin/users`,
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//     }
//     let response = await axios.request(reqOptions);
//     setuserData(response.data.data);

//   }
//   const handleDelete = async (post) => {
//     setuserData(userData.filter((d) => d.id !== post.id))
//     await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/users/${post.id}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//     });
//   }
//   useEffect(() => {
//     getUser();
//   }, [userData])


//   // const handleChange = useCallback(state => {
//   //   setSelectedRows(state.selectedRows);
//   // }, []);
//   let display = userData.map((post, index) => {
//     let { id, name, status, email, password, role, mobile } = post
//     return (
//       <tr>
//         <th scope="row" key={id}>{index + 1}</th>
//         <td>{name}</td>
//         <td>{status}</td>
//         <td>{email}</td>
//         <td>{password}</td>
//         <td>{role}</td>
//         <td>{mobile}</td>
//         <td>
//           <button type="button" class="btn btn-warning  text-light" style={{ color: "white !important " }} onClick={() => handleDelete(post)}>
//             <i class="fas fa-trash-alt"></i>
//           </button>
//           <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
//             <UserEdit id={id} name={name} status={status} email={email} role={role} password={password} />
//           </button>
//         </td>
//       </tr>
//     )
//   })
//   const columns = useMemo(
//     () => [
//       {


//         ignoreRowClick: true,
//         allowOverflow: true,
//         button: true,
//       },
//       {
//         name: 'Name',
//         selector: row => row.name,
//         sortable: true,
//         grow: 2,
//       },
//       {
//         name: 'Type',
//         selector: row => row.type,
//         sortable: true,
//       },
//       {
//         name: 'Calories (g)',
//         selector: row => row.calories,
//         sortable: true,
//         right: true,
//       },
//       {
//         name: 'Fat (g)',
//         selector: row => row.fat,
//         sortable: true,
//         right: true,
//       },
//       {
//         name: 'Carbs (g)',
//         selector: row => row.carbs,
//         sortable: true,
//         right: true,
//       },
//       {
//         name: 'Protein (g)',
//         selector: row => row.protein,
//         sortable: true,
//         right: true,
//       },
//       {
//         name: 'Sodium (mg)',
//         selector: row => row.sodium,
//         sortable: true,
//         right: true,
//       },
//       {
//         name: 'Calcium (%)',
//         selector: row => row.calcium,
//         sortable: true,
//         right: true,
//       },
//       {
//         name: 'Iron (%)',
//         selector: row => row.iron,
//         sortable: true,
//         right: true,
//       },
//     ],
//     [],
//   );
//   return (
//     <React.Fragment>
//       <DataTable
//         title="Desserts"
//         data={display}
//         columns={columns}
//         selectableRows
//         // onSelectedRowsChange={handleChange}
//       />

//     </React.Fragment>
//   )
// }

// export default InputWithButton




// const InputWithButton = () => {
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     // Fetch table data from API
//     const fetchTableData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       setTableData(data);
//     };
//     fetchTableData();
//   }, []);

//   useEffect(() => {
//     // Initialize DataTable plugin on table element
//     const table = $('#table').DataTable();

//     // Reload table data whenever tableData state changes
//     table.clear().rows.add(tableData).draw();
//   }, [tableData]);

//   return (
//     <table id="table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Category</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tableData.map((item) => (
//           <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.title}</td>
//             <td>{item.body}</td>

//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default InputWithButton;


// function InputWithButton() {
//   const [userData, setuserData] = useState([])
//   const token = localStorage.getItem('token')
//   const columns = [
//     {
//       name: 'name',
//       selector: row => row.name,
//     },
//     {
//       name: 'email',
//       selector: row => row.email,
//     },
//   ];
//   const getUser = async () => {
//     let reqOptions = {
//       url: `${process.env.REACT_APP_BASE_URL}admin/users`,
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//     }
//     let response = await axios.request(reqOptions);
//     setuserData(response.data.data);

//   }
//   useEffect(() => {
//     getUser();
//   }, [userData])
//   let display = userData.map((post, index) => {
//     let { id, name, status, email, password, role, mobile } = post
//     return (
//       <tr>
//         <th scope="row" key={id}>{index + 1}</th>
//         <td>{name}</td>
//         <td>{status}</td>
//         <td>{email}</td>
//         <td>{password}</td>
//         <td>{role}</td>
//         <td>{mobile}</td>

//       </tr>
//     )
//   })


//   return (
//     <DataTable
//       columns={columns}
//       data={userData}
//       pagination
//     />
//   );
// };

// export default InputWithButton

function InputWithButton() {
  const [isDataVisible, setIsDataVisible] = useState(false);
  const token = localStorage.getItem('token')
  const [video, setVideo] = useState([])
  const getVideo = async () => {
    console.log(id, "getvideo id in getvideo");
    let reqOptions = {
      url: `${process.env.REACT_APP_BASE_URL}admin/videos`,
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    }
    let response = await axios.request(reqOptions);
    setVideo(response.data.data);
    console.log(response.data.data, "single video data");
  }
  const toggleData = () => {
    setIsDataVisible(!isDataVisible);
  };
  useEffect(() => {
    getVideo()
  }, [])
  const single = video.map((item) => {
    return (
      <div className="col-md-4" key={id}>
        <div className="card mb-4 product-wap rounded-0 p-0">
          <Link to={`/videodetail/${item.id}`}>
            <div className="card rounded-0 p-0">
              <img className="card-img rounded-0 img-fluid" src={`${process.env.REACT_APP_BASE_IMG}images/${item.image}`} alt={item.name} />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              </div>
            </div>
          </Link>
          <div className="card-body">
            <Link to={`/videodetail/${item.id}`} className="h3 text-decoration-none">  <p>{item.description.slice(0, 100) + '...'}</p></Link>
          </div>
        </div>
      </div>
    )
    // }
  }
  );
  return (
    <div>
      <button onClick={toggleData}>
        {isDataVisible ? 'Show Less' : 'Show More'}
      </button>
      {isDataVisible && (
        <div>
          {single.length > 0 ? single :"no Video"}
        </div>
      )}
    </div>
  );
}
export default InputWithButton;