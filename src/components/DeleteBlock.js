import React from "react";
import axios from "axios";

function DeleteBlock({ documentId }) {
  const deleteTicket = async () => {
    const res = await axios.delete(
      `http://localhost:8000/tickets/${documentId}`
    );
    const success = res.status === 200;
    if (success) {
      window.location.reload();
    }
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
