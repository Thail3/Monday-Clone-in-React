import React from "react";
import defaultAvatar from "../images/avatar.jpg";

function AvatarDisplay({ ticket }) {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={ticket.avatar ? ticket.avatar : defaultAvatar}
          alt={"photo of  " + ticket.owner}
        />
      </div>
    </div>
  );
}

export default AvatarDisplay;
