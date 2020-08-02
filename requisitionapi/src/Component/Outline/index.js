import React from "react";
import { IconText } from "../";
import organizationIcon from "../../images/organization-icon.svg";
import locationIcon from "../../images/location-icon.svg";
import repositorieIcon from "../../images/repositorie-icon.svg";
import followersIcon from "../../images/followers-icon.svg";
import "./style.css";

const Outline = ({
  avatar_url,
  name,
  bio,
  company,
  location,
  public_repos,
  followers,
  following
}) => {
  return (
    <div>
      <div>
        <img src={avatar_url} alt={`${name} user`} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
      <div className="icon-box">
        {company && (
          <IconText
            icon={organizationIcon}
            alt="organization icon"
            classIcon="icon"
          >
            {company}
          </IconText>
        )}
        {location && (
          <IconText
            icon={locationIcon}
            alt="organization icon"
            classIcon="icon"
          >
            {location}
          </IconText>
        )}
        {public_repos && (
          <IconText
            icon={repositorieIcon}
            alt="organization icon"
            classIcon="icon"
          >
            {public_repos}
          </IconText>
        )}
        {followers && (
          <IconText
            icon={followersIcon}
            alt="organization icon"
            classIcon="icon"
          >
            {followers}
          </IconText>
        )}
        {following && (
          <IconText
            icon={followersIcon}
            alt="organization icon"
            classIcon="icon"
          >
            {following}
          </IconText>
        )}
      </div>
    </div>
  );
};

export default Outline;