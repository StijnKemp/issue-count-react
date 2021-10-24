import React, { useCallback, useState } from "react";

const UploadButton = ({ text, multiple, accept, onChange }) => {
  const [fileName, setFileName] = useState();
  const handleChange = useCallback(
    (e) => {
      const filePathArray = e.target.value.split("\\");
      setFileName(filePathArray[filePathArray.length - 1]);

      if (multiple) {
        onChange(e.target.files);
      } else {
        onChange(e.target.files[0]);
      }
    },
    [multiple, onChange]
  );

  return (
    <>
      <label className="btn btn-primary">
        {text}
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </label>
      {fileName && <p>{fileName}</p>}
    </>
  );
};

export default UploadButton;
