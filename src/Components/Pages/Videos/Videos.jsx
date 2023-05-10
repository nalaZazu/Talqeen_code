import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
function Videos() {
    // here get the array item and store into variable
    const token = localStorage.getItem('token')
    const [video, setVideo] = useState([])
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
        console.log(response.data.data, "single video data");
    }
    useEffect(() => {
        getVideo();
    }, [video])
    const single = video.map((item) => {
        let { id, image, name, description } = item
        return (
            <div className="col-md-4" key={id}>
                <div className="card mb-4 product-wap rounded-0 p-0">
                    <Link to={`/videodetail/${id}`}>
                        <div className="card rounded-0 p-0">
                            <img className="card-img rounded-0 img-fluid" src={`${process.env.REACT_APP_BASE_IMG}images/${image}`} alt={name} />
                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            </div>
                        </div>
                    </Link>
                    <div className="card-body">
                        <Link to={`/videodetail/${id}`} className="h3 text-decoration-none">  <p>{description.slice(0, 100) + '...'}</p></Link>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <React.Fragment>
            {/* Halmet tag for SEO */}
            <Helmet>
                <title> Video services - WebTechSofts</title>
                <meta property="og:site_name" content="WebTechSofts" />
            </Helmet>
            <section className='h-100'>
                <div className="container py-5 mt-5 h-100">
                    <div className="row">
                        <div className=" single_video layout_padding">
                            <div className="row">
                                {
                                    single
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    )
}

export default Videos