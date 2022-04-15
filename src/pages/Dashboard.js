import React from "react";
import TicketCard from "../components/TicketCard";

function Dashboard() {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Video",
      owner: "Man Kind",
      avatar:
        "https://res.cloudinary.com/dk7xxtqnj/image/upload/v1649405472/vq1xnkg5dwrqlfdx6txv.jpg",
      status: "done",
      priority: 5,
      progress: 40,
      description: "Work in progress",
      timestamp: "2022-02-11T07:36:17+0000",
    },
    {
      category: "Q1 2022",
      title: "create Video content",
      owner: "june Jo",
      avatar:
        "https://res.cloudinary.com/dk7xxtqnj/image/upload/v1646124162/zoiklyftkouksx5lm6q8.jpg",
      status: "working on it",
      priority: 2,
      progress: 70,
      description: "Work in progress",
      timestamp: "2022-02-13T07:36:17+0000",
    },
    {
      category: "Q2 2022",
      color: "white",
      title: "web dev",
      owner: "Man Kind",
      avatar:
        "https://res.cloudinary.com/dk7xxtqnj/image/upload/v1645343363/k24wpk6wmuusgnwhb9zf.jpg",
      status: "working on it",
      priority: 3,
      progress: 10,
      description: "Work in progress",
      timestamp: "2022-02-15T07:36:17+0000",
    },
  ];

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,255,255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);

  return (
    <div className="dashboard">
      <h1>My Projects</h1>

      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                ?.filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
