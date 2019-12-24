import React from "react";
import PropsTypes from "prop-types";

import "./video.scss";

const Video = ({videoSrc, title}) => {
    return (
        <div className="banner-section__video">
            <iframe
                src="https://player.vimeo.com/video/381300857?autoplay=1&loop=1&muted=1&controls=0"
                allow="autoplay"
                frameBorder="0"
                title="Seventa promo"
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