import React from "react";
import PropsTypes from "prop-types";

import "./video.scss";

const Video = ({videoSrc, title}) => {
    return (
        <div className="banner-section__video">
            <iframe
                src={videoSrc}
                title={title}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
            />
        </div>
    );
};

Video.propsTypes = {
    videoSrc: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
};

Video.defaultProps = {
    title: '',
};

export default Video;