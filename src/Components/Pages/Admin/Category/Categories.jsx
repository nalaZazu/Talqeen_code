import React, { useEffect, useState } from 'react'
import AddCategories from './AddCategories'
import axios from 'axios'
import CategoryEdit from './CategoryEdit'
import AdminSide from '../AdminSide'
import { Link } from 'react-router-dom'
function Categories() {
    // api data get 
    const [categoryItem, setcategoryItem] = useState([])
    const token = localStorage.getItem('token')
    // counter Number
    const [userCount, setUserCount] = useState(0);
    // for page number 
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const getPaginationNumbers = () => {
        const paginationNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            paginationNumbers.push(i);
        }
        return paginationNumbers;
    }
    const paginationNumbers = getPaginationNumbers();

    const getCategory = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/video/category`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        setcategoryItem(response.data.data);
        setUserCount(response.data.data.length)
    }
    useEffect(() => {
        getCategory();
    }, [])
    const deleteData = async (row) => {
        setcategoryItem(categoryItem.filter((d) => d.id !== row.id))
        const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/video/category/${row.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
    }

    const displayData = categoryItem.map((post, index) => {
        const { id, name } = post
        return (
            <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{name}</td>
                <td>
                    <button type="button" class="btn btn-warning text-light"
                        onClick={() => {
                            deleteData(post)
                        }}>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
                        <CategoryEdit id={id} name={name} />
                    </button>
                </td>
            </tr >
        )
    })
    return (
        <React.Fragment>
            <div class="grid-container">
                {/* <header className="header">
                    <div className="menu-icon">
                        <span className="material-icons-outlined">
                            <i class="fas fa-bars"></i>
                        </span>
                    </div>
                </header> */}
                <aside id="sidebar">
                    <div class="sidebar-title">
                        <div class="sidebar-brand">
                            <Link to='/dashboard' className='text-warning text-decoration-none'>
                                <span class="material-icons-outlined">
                                    Admin-Logo
                                </span>
                            </Link>
                        </div>
                    </div>
                   
                    <AdminSide />
                </aside>
                <main className="main-container">
                    <div className="main-title">
                        <p className="font-weight-bold">CATEGORY</p>
                        <p className='text-warning font-weight-bold'>Number of Category: {userCount}</p>
                        <AddCategories />
                    </div>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"> Categories Name</th>
                                <th scope="col" >Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayData
                            }
                        </tbody>
                    </table>
                  

                </main>
            </div>
        </React.Fragment>
    )
}

export default Categories