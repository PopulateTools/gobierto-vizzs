import { dsvFormat } from "d3-dsv";

export default function toJSON(data, separator = ",") {
  const [columns, ...rows] = dsvFormat(separator).parseRows(data)
  const objects = rows.map((row) => Object.fromEntries(columns.map((column, i) => [column, row[i] || ""])))
  objects.columns = columns
  return objects
}
