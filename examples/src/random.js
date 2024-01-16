import { faker } from "@faker-js/faker";

const { location, vehicle, date, lorem, helpers, commerce, number } = faker

export function mockJSON(length = 100) {
  const groups = Array.from({ length: number.int({ min: 3, max: 9 }) }, () => location.country());
  const relations = Array.from({ length: number.int({ min: 10, max: 15 }) }, () => vehicle.manufacturer());
  const phases = Array.from({ length: 20 }, () => commerce.department())
  const addDays = (d, n) => new Date(new Date(d).setDate(d.getDate() + n))

  return Array.from({ length }, (_, i) => ({
    date: Math.random() > 0.98 ? null : date.past(),
    value: Math.random() > 0.9 ? number.int(1e5) : number.int(1e4),
    value2: Math.random() > 0.9 ? number.int(1e5) : number.int(1e4),
    value3: Math.random() > 0.9 ? number.int(1e5) : number.int(1e4),
    value4: number.int(1e5),
    title: lorem.words(5),
    relation: helpers.arrayElement(relations),
    group: helpers.arrayElement(groups),
    id: i
  })).reduce((acc, x) => {
    const prev = acc.filter(d => d.relation === x.relation)
    const from = prev.length === 0
        ? date.soon({ days: 30 })
        : addDays(prev[prev.length - 1].to, 0)
    const to = addDays(from, number.int(100))

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
