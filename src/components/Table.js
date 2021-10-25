import React from "react";
import useCSV from "#/helpers/hooks/useCSV";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const angleIcon = {
  asc: <FaAngleUp />,
  desc: <FaAngleDown />,
};

const Table = ({ csv }) => {
  const { head, data, lastSorted, sortBy } = useCSV(csv);

  if (data) {
    return (
      <table>
        <thead>
          <tr>
            {head.map((col, i) => (
              <th key={i} onClick={() => sortBy(col)}>
                {col}
                {col === lastSorted.col && angleIcon[lastSorted.direction]}
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
