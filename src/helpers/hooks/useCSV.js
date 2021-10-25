import { useState, useEffect, useCallback } from "react";
import { parseCSV } from "#/helpers/utils/csv";
import {
  sortFirstName,
  sortSurName,
  sortIssueCount,
  sortDateOfBirth,
} from "#/helpers/utils/sort";

function useCSV(csv, initSort = "sur_name") {
  const [head, setHead] = useState();
  const [data, setData] = useState();
  const [lastSorted, setLastSorted] = useState();

  useEffect(() => {
    if (csv) {
      const table = parseCSV(csv);

      setHead(table.head);
      setData(table.data);
    }
  }, [csv]);

  useEffect(() => {
    if (head) {
      sortBy(initSort);
    }
  }, [head]);

  const sortBy = useCallback(
    (col) => {
      let sorted;

      if (lastSorted === col) {
        sorted = [...data];
        sorted.reverse();
      } else {
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
      }

      setLastSorted(col);
      setData([...sorted]);
    },
    [data, lastSorted]
  );

  return { head, data, sortBy };
}

export default useCSV;
