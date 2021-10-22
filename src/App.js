import React, { useState } from "react";
import Table from "./components/Table";
import useFilerReader from "./helpers/hooks/useFileReader";

const App = () => {
  const [csv, setCSV] = useState();
  const fileReader = useFilerReader(() => setCSV(fileReader.result));

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
      <Table csv={csv} />
    </div>
  );
};

export default App;
