import React, { useEffect } from "react";
import useCSV from "../helpers/hooks/useCSV";

const Table = ({ csv }) => {
  const { head, data, sortBy } = useCSV(csv);

  return (
    <>
      {data ? (
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
                {Object.entries(row).map(([_, col], i) => (
                  <td key={i}>{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data to display</p>
      )}
    </>
  );
};

export default Table;
