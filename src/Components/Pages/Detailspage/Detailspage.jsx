import React, { useRef, useState } from 'react'
import YouTube from '@u-wave/react-youtube';
import { useParams } from 'react-router';
let videoIdList = ["AOMpxsiUg2Q", "XM-HJT8_esM", "r2pdwduPS5U"];

export default function Detailspage() {
    const { id } = useParams()
    const [player, setPlayer] = useState(null);
    const [videoId, setVideoId] = useState(videoIdList[0])
    // const post = player.filter((dataItem) => dataItem.id === id);
    // const youtubeID = post.url.split('v=')[1];

    const a = useRef(0);

    const handleEnd = () => {
        setVideoId(videoIdList[++a.current]);
    };
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    // const onReady = (e) => {
    //     setPlayer(e.target);
    // };
    return (
        <React.Fragment>
            <section className=' layout_padding' >
                <div className="container">
                    <div className="row">
                        <h2 className="main-heading  ">
                            Video Title
                        </h2>
                        <div className="col-lg-12  mt-5 ">
                            <YouTube video={videoId}
                                width={'100%'}
                                height={500}
                                onEnd={handleEnd}
                                onReady={onReady}
                            autoplay
                            // controls={false}
                            />
                        </div>
                        {/* <div className="col-lg-5   mt-5">
                            {
                                videoIdList.map((item) => {
                                    return (
                                        <div className="card d-flex m-2" style={{ flexDirection: "row" }} onClick={() => {
                                            setVideoId(item.videoIdList)
                                        }}>
                                            <img className="w-25" src={"http://img.youtube.com/vi/" + item.videoId + "/0.jpg"} />
                                            <p className='p-2'>{item.videotitle}</p>
                                        </div>
                                    )
                                })
                            }

                        </div> */}
                    </div>
                </div>

            </section >
        </React.Fragment >
    )
}
