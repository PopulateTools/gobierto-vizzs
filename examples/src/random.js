import { faker } from "@faker-js/faker";

const { datatype, address, vehicle, date, lorem, random, commerce } = faker

export function mockJSON(length = 100) {
  const groups = Array.from({ length: datatype.number({ min: 3, max: 9 }) }, () => address.country());
  const relations = Array.from({ length: datatype.number({ min: 10, max: 15 }) }, () => vehicle.manufacturer());
  const phases = Array.from({ length: 20 }, () => commerce.department())
  const addDays = (d, n) => new Date(new Date(d).setDate(d.getDate() + n))

  return Array.from({ length }, (_, i) => ({
    date: Math.random() > 0.98 ? null : date.past(),
    value: Math.random() > 0.9 ? datatype.number(1e5) : datatype.number(1e4),
    value2: Math.random() > 0.9 ? datatype.number(1e5) : datatype.number(1e4),
    value3: Math.random() > 0.9 ? datatype.number(1e5) : datatype.number(1e4),
    value4: datatype.number(1e1),
    title: lorem.words(5),
    relation: random.arrayElement(relations),
    group: random.arrayElement(groups),
    id: i
  })).reduce((acc, x) => {
    const prev = acc.filter(d => d.relation === x.relation)
    const from = prev.length === 0
        ? date.soon(30)
        : addDays(prev[prev.length - 1].to, 0)
    const to = addDays(from, datatype.number(100))

    return  [...acc, { ...x, phase: phases[prev.length], from, to }]
  }, []);
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
