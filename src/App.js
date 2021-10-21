import React, { useState } from "react";
import Table from "./components/Table";
import useFileReader from "./helpers/hooks/useFileReader";
import parseCSV from "./helpers/utils/parseCSV";

const App = () => {
  const [table, setTable] = useState();

  const fileReader = useFileReader(() => {
    setTable(parseCSV({ csv: fileReader.result, splitter: ";" }));
  });

  const onChangeFile = (e) => {
    fileReader.readAsText(e.target.files[0]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="file"
        accept=".csv"
        multiple={false}
        onChange={onChangeFile}
      />
      {table && (
        <Table
          head={table.head}
          body={table.body}
          setBody={(body) => setTable({ ...table, body })}
        />
      )}
    </div>
  );
};

export default App;
