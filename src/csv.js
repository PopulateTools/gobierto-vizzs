import { dsvFormat } from "d3-dsv";

export default function toJSON(data, separator = ",") {
  return dsvFormat(separator).parse(data)
}
