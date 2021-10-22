export function parseCSV(csv, splitter = ";") {
  const table = csv.split("\r\n").map((row) => {
    return row.split(splitter);
  });

  const head = table.splice(0, 1)[0];

  const data = table.map((row) => {
    return row.reduce((total, col, i) => {
      return { ...total, [head[i]]: col };
    }, {});
  });

  return { head, data };
}
