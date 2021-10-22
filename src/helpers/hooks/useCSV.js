import { useState, useEffect } from "react";
import { parseCSV } from "../utils/csv";
import {
  sortFirstName,
  sortSurName,
  sortIssueCount,
  sortDateOfBirth,
} from "../utils/sort";

function useCSV(csv, initSortBy = "sur_name") {
  const [head, setHead] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (csv) {
      const table = parseCSV(csv);
      setHead(table.head);
      setData(table.data);
    }
  }, [csv]);

  useEffect(() => {
    if (head) {
      sortBy(initSortBy);
    }
  }, [head]);

  const sortBy = (col, order = "asc") => {
    let sorted;
    switch (col) {
      case "first_name":
        sorted = data.sort(sortFirstName);
        break;
      case "sur_name":
        sorted = data.sort(sortSurName);
        break;
      case "issue_count":
        sorted = data.sort(sortIssueCount);
        break;
      case "date_of_birth":
        sorted = data.sort(sortDateOfBirth);
        break;
      default:
        sorted = data;
        break;
    }

    if (order === "desc") {
      sorted.reverse();
    }

    setData([...sorted]);
  };

  return { head, data, sortBy };
}

export default useCSV;
