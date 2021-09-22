import Faker from "faker";

export function mock() {
  const groups = Array.from({ length: Faker.datatype.number({ min: 3, max: 9 }) }, () => Faker.vehicle.manufacturer())
  return Array.from({ length: 600 }, () => ({
    date: Math.random() > 0.98 ? null : Faker.date.past(),
    radius: Math.random() > 0.8 ? Faker.datatype.number(1e6) : Faker.datatype.number(1e4),
    group: Faker.random.arrayElement(groups),
    id: Faker.internet.domainName(),
  }));
}
