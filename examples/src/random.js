import { datatype, address, vehicle, date, lorem, random } from "faker/locale/en";

export function mockJSON() {
  const groups = Array.from({ length: datatype.number({ min: 3, max: 9 }) }, () => address.country());
  const relations = Array.from({ length: datatype.number({ min: 1500, max: 5000 }) }, () => vehicle.manufacturer());
  return Array.from({ length: 50 }, (_, i) => {
    // TODO: dar otra vuelta
    const phases = (rnd = Math.random()) > 0.95 ? { phase: "phase-4", from: date.soon(80), to: date.soon(100) }
    : rnd > 0.8 ? { phase: "phase-3", from: date.soon(50), to: date.soon(80) }
     : rnd > 0.5 ? { phase: "phase-2", from: date.soon(30), to: date.soon(50) }
     : { phase: "phase-1", from: date.soon(10), to: date.soon(30) }

    return {
      date: Math.random() > 0.98 ? null : date.past(),
      value: Math.random() > 0.9 ? datatype.number(1e5) : datatype.number(1e4),
      title: lorem.words(5),
      relation: random.arrayElement(relations),
      group: random.arrayElement(groups),
      ...phases,
      id: i
    }
  });
}

export function mockCSV(data) {
  // https://stackoverflow.com/a/31536517/5020256
  const items = data || mockJSON();
  const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
  const header = Object.keys(items[0]);
  return [
    header.join(","), // header row first
    ...items.map((row) => header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(",")),
  ].join("\n");
}
