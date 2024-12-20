import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import ParticipantTable from "../components/ParticipantTable";
import TableActions from "../components/TableActions";

function Dashboard() {
  const [rows, setRows] = useState([])
  const [count, setCount] = useState(0)
  const user = useSelector((state) => state.user.user); // Obtén el usuario desde Redux

    const updateRows = (newRows) => {
      setRows(newRows);
      setCount(newRows.length);
  };

  return (
    <div className="container mt-3">

      <div className="container mt-3">
        <Header title="Get your participants list" />
        <TableActions updateRows={updateRows}/>
        <p className="m-5 h2">
          Rows: <span>{count}</span>
        </p>
        <ParticipantTable rows={rows}/>
      </div>
    </div>
  );
}

export default Dashboard;
