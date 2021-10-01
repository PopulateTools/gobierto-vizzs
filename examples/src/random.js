import Faker from "faker";

export function mock() {
  const groups = Array.from({ length: Faker.datatype.number({ min: 3, max: 9 }) }, () => Faker.address.country())
  const relations = Array.from({ length: Faker.datatype.number({ min: 1500, max: 5000 }) }, () => Faker.vehicle.manufacturer())
  return Array.from({ length: 100 }, (_, i) => ({
    date: Math.random() > 0.98 ? null : Faker.date.past(),
    value: Math.random() > 0.9 ? Faker.datatype.number(1e5) : Faker.datatype.number(1e4),
    group: Faker.random.arrayElement(groups),
    title: Faker.lorem.words(5),
    relation: Faker.random.arrayElement(relations),
    relation2: Faker.random.arrayElement(groups),
    relation3: Faker.random.arrayElement(groups),
    relation4: Faker.random.arrayElement(groups),
    id: i,
  }))
}
