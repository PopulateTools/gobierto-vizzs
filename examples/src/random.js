import { datatype, address, vehicle, date, lorem, random } from "faker/locale/en";

export function mock() {
  const groups = Array.from({ length: datatype.number({ min: 3, max: 9 }) }, () => address.country());
  const relations = Array.from({ length: datatype.number({ min: 1500, max: 5000 }) }, () => vehicle.manufacturer());
  return Array.from({ length: 100 }, (_, i) => ({
    date: Math.random() > 0.98 ? null : date.past(),
    value: Math.random() > 0.9 ? datatype.number(1e5) : datatype.number(1e4),
    title: lorem.words(5),
    relation: random.arrayElement(relations),
    group: random.arrayElement(groups),
    group2: random.arrayElement(groups),
    group3: random.arrayElement(groups),
    group4: random.arrayElement(groups),
    id: i,
  }));
}
