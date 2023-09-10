import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { videoArray } from "../../Constant/videoArray";
function Videos() {
  // here get the array item and store into variable
  //   const token = localStorage.getItem("token");
  //   const [video, setVideo] = useState([]);

  //   console.log("video sufyan", video);
  //   const getVideo = async () => {
  //     let reqOptions = {
  //       url: `${process.env.REACT_APP_BASE_URL}admin/videos`,
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //     };
  //     let response = await axios.request(reqOptions);
  //     setVideo(response.data.data);
  //     console.log(response.data.data, "single video data");
  //   };
  //   useEffect(() => {
  //     getVideo();
  //   }, []);

  const single = videoArray?.map((item) => {
    let { id, img, name, description } = item;
    return (
      <div className="col-md-4" key={id}>
        <div className="card mb-4 product-wap rounded-0 p-0">
          <Link to={`/videodetail/${id}`}>
            <div className="card rounded-0 p-0">
              <img
                className="card-img rounded-0 img-fluid"
                // src={`${process.env.REACT_APP_BASE_IMG}images/${image}`}
                src={img}
                alt={name}
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"></div>
            </div>
          </Link>
          <div className="card-body">
            <Link to={`/videodetail/${id}`} className="h3 text-decoration-none">
              {" "}
              <p>{description}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      {/* Halmet tag for SEO */}
      <Helmet>
        <title> Video services - WebTechSofts</title>
        <meta property="og:site_name" content="WebTechSofts" />
      </Helmet>
      <section className="h-100">
        <div className="container py-5 mt-5 h-100">
          <h2 className="main-heading ">Category</h2>
          <div className="row">
            <div className=" single_video layout_padding">
              {videoArray && videoArray.length > 0 ? (
                <div className="row">{single}</div>
              ) : (
                "No video"
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Videos;
