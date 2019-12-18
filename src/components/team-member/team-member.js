import React from "react";
import PropsTypes from "prop-types";

import "./team-member.scss"

const TeamMember = props => (
    <div className="team-member">
        <img className="team-member__photo" src={props.photo} alt={props.name}/>
        <h3 className="team-member__name">{props.name}</h3>
        <p className="team-member__position">{props.position}</p>
    </div>
);

TeamMember.propsTypes = {
    name: PropsTypes.string.isRequired,
    position: PropsTypes.string.isRequired,
    photo: PropsTypes.string.isRequired,
};

export default TeamMember;