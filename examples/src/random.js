import Faker from "faker";

export function mock() {
  const groups = Array.from({ length: Faker.datatype.number({ min: 3, max: 9 }) }, () => Faker.address.country())
  const relations = Array.from({ length: Faker.datatype.number(50) }, () => Faker.name.firstName())
  return Array.from({ length: 20 }, (_, i) => ({
    date: Math.random() > 0.98 ? null : Faker.date.past(),
    value: Math.random() > 0.9 ? Faker.datatype.number(1e5) : Faker.datatype.number(1e4),
    group: Faker.random.arrayElement(groups),
    title: Faker.lorem.words(5),
    relation: Faker.random.arrayElement(relations),
    id: i,
  }))
}
