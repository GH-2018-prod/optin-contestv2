import React, { useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import firebaseDB from "../firebase/firebaseConfig";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const TableActions = ({ updateRows }) => {
  const [tableName, setTableName] = useState("");

  const fetchData = async () => {
    if (!tableName) {
      alert("Please enter a table name!");
      return;
    }

    const db = getDatabase();
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, tableName));
      if (snapshot.exists()) {
        const data = [];
        snapshot.forEach((childSnapshot) => {
          const record = {
            _key: childSnapshot.key,
            ...childSnapshot.val(),
          };
          data.push(record);
        });
        updateRows(data); // Actualiza las filas en el componente padre
      } else {
        alert("No data found!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const downloadExcel = () => {
    const tableElement = document.getElementById("table");
    if (!tableElement) {
      alert("No table data available to download.");
      return;
    }

    // Crea un libro de trabajo de Excel a partir del elemento de la tabla
    const workbook = XLSX.utils.table_to_book(tableElement);
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    // Guarda el archivo con `file-saver`
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "ParticipantsList.xlsx");
  };

  return (
    <div className="row mb-3">
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Insert database table name"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary btn-lg mt-4"
          onClick={fetchData}
        >
          GET LIST
        </button>
        <button
          className="btn btn-secondary btn-lg mt-4"
          onClick={downloadExcel}
        >
          DOWNLOAD LIST
        </button>
      </div>
    </div>
  );
};

export default TableActions;
