import React, { useEffect, useMemo } from "react";
import useCSV from "../helpers/hooks/useCSV";

const Table = ({ csv }) => {
  const { head, data, sortBy } = useCSV(csv);

  if (data) {
    return (
      <table>
        <thead>
          <tr>
            {head.map((col, i) => (
              <th key={i} onClick={() => sortBy(col)}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.entries(row).map(([_, value], i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <p>No data to display</p>;
  }
};

export default Table;
