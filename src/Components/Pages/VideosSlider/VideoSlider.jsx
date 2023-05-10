import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
function VideoSlider() {
    // let video = VideosSlider;
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    const { id } = useParams()
    const [user, setUser] = useState([])
    const token = localStorage.getItem('token')
    const sendData = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/video/category`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        setUser(response.data.data);
        console.log(response.data.data, "from user side ");
    }
    useEffect(() => {
        sendData();
    }, [])
    return (
        <React.Fragment>
            {/* <section className="vehicle_section layout_padding">
                <div className="container">
                    <h2 className="main-heading ">
                        Vehicles Facility
                    </h2>
                    <p className="text-center video_para mt-3">
                        There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of
                        passages of Lorem Ipsum available, but the majority h
                    </p>
                    {/* <div className="layout_padding-top">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {
                                video.map((item) => {
                                    let { img } = item;
                                    return (
                                        <Carousel.Item interval={3000}>
                                            <img
                                                className="d-block mx-auto w-75"
                                                src={img}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div> */}

            {/* 
                </div>
            </section> */}
            <section className="teacher_section layout_padding h-100">
                <div className="container h-100">
                    <div className='row'>

                        <h2 className="main-heading ">
                            Category
                        </h2>
                        <p className="text-center video_para mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum voluptatum eveniet aliquam, repudiandae molestiae in ipsa tenetur doloremque incidunt sit temporibus accusamus omnis ad eum ex placeat distinctio vitae!
                        </p>

                        <div className="teacher_container layout_padding2">
                            <div className="card-deck">
                                {
                                    user.map((item) => {
                                        let { id, name, image } = item
                                        return (
                                            <div class="col-6 col-md-4">
                                                <div className="card" key={id}>
                                                    <Link to={`/singlecateroy/${id}`} className='text-decoration-none'>
                                                        <img className="card-img-top" src={image} alt={name} />
                                                        <div className="card-body">
                                                            <h5 className="card-title text-wrap text-break w-100">{name}</h5>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </React.Fragment >
    )
}

export default VideoSlider