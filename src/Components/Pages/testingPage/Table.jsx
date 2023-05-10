import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import MaterialTable from "material-table";
import { useState } from 'react';
const DataTable = () => {
    
    const [video, setVideo] = useState([])
    const token = localStorage.getItem('token')
    const getVideo = async () => {
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
    }
    useEffect(() => {
        getVideo();

    }, [video])
    const data = [
        { name: 'zazu', age: 12 },
        { name: 'zazu', age: 12 },
        { name: 'zazu', age: 12 },

    ]
    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Age', field: 'age' }
    ]
    return (
        <div style={{ maxWidth: '100%' }}>
            {/* <MaterialTable
                columns={columns}
                data={data}

                title="Demo Title"
            /> */}
        </div>
    );
};

export default DataTable;