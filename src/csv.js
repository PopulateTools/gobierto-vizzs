import { csvParse } from "d3-dsv";

export default function toJSON(data) {
  return csvParse(data)
}
