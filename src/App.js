import React, { useState } from "react";
import Table from "./components/Table";
import UploadButton from "./components/UploadButton";
import useFilerReader from "./helpers/hooks/useFileReader";

const App = () => {
  const [csv, setCSV] = useState();
  const fileReader = useFilerReader(() => {
    setCSV(fileReader.result);
  });

  return (
    <div className="container">
      <Table csv={csv} />
      <UploadButton
        text="Upload CSV"
        multiple={false}
        accept=".csv"
        onChange={(file) => fileReader.readAsText(file)}
      />
    </div>
  );
};

export default App;
