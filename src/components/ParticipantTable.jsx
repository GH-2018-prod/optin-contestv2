import React from "react";
import PropTypes from "prop-types";

const ParticipantTable = ({ rows }) => (
  
  <table id="table" className="table table-striped ">
    <thead className="table-dark h5">
      <tr>
        <th>_key</th>
        <th>EST</th>
        <th>domain</th>
        <th>origin</th>
        <th>startedAt</th>
        <th>url</th>
        <th>user_data</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        
        <tr key={index}>
          <td>{row._key}</td>
          <td>{row.EST}</td>
          <td>{row.domain}</td>
          <td>{row.origin}</td>
          <td>{row.startedAt}</td>
          <td>{row.url}</td>
          <td>{row.user_data}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

ParticipantTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ParticipantTable;
