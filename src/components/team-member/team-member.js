import React from "react";
import PropsTypes from "prop-types";

import "./team-member.scss"

const TeamMember = ({ photo, name, position }) => (
    <div className="team-member">
        <img className="team-member__photo" src={photo.src} alt={photo.title} />
        <h3 className="team-member__name">{name}</h3>
        <p className="team-member__position">{position}</p>
    </div>
);

TeamMember.propsTypes = {
    name: PropsTypes.string.isRequired,
    position: PropsTypes.string.isRequired,
    photo: PropsTypes.object.isRequired,
};

export default TeamMember;