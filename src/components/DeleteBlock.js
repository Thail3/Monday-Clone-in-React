import React from "react";

function DeleteBlock() {
  const deleteTicket = () => {
    console.log("Delete");
  };

  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>
        x
      </div>
    </div>
  );
}

export default DeleteBlock;
