function parseCSV({ csv, splitter = ";", hasHead = true }) {
  const table = csv.split("\r\n").map((row) => {
    return row.split(splitter);
  });
  console.log(table);

  const head = table.splice(0, 1)[0];
  const body = table;

  return { head, body };
}

export default parseCSV;
