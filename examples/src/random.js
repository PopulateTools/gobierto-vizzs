import Faker from "faker";

export function mock() {
  const groups = Array.from({ length: Faker.datatype.number({ min: 3, max: 9 }) }, () => Faker.vehicle.manufacturer())
  const relations = Array.from({ length: Faker.datatype.number(50) }, () => Faker.name.firstName())
  return Array.from({ length: 10 }, (_, i) => ({
    date: Math.random() > 0.98 ? null : Faker.date.past(),
    radius: Math.random() > 0.9 ? Faker.datatype.number(1e5) : Faker.datatype.number(1e4),
    group: Faker.random.arrayElement(groups),
    title: Faker.lorem.words(5),
    relation: Faker.random.arrayElement(relations),
    id: i
  })).map((x, i, arr) => ({ ...x, parent: i > 0 ? Faker.random.arrayElement(arr.slice(0, i)).id : null }))
}
