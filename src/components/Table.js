import React, { useEffect } from "react";

const Table = ({ head, body, setBody }) => {
  // Component did mount
  useEffect(() => {
    setBody(
      body.sort((a, b) => {
        const surNameA = a[1].toUpperCase();
        const surNameB = b[1].toUpperCase();
        if (surNameA < surNameB) {
          return -1;
        }
        if (surNameA > surNameB) {
          return 1;
        }
      })
    );
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {head.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, i) => (
          <tr key={i}>
            {row.map((col, i) => (
              <td key={i}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
