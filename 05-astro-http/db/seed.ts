import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Clients).values([
    { id: 1, name: "Kasim", age: 35, isActive: true },
    { id: 2, name: "Fernando", age: 32, isActive: true },
    { id: 3, name: "Maria", age: 25, isActive: true },
    { id: 4, name: "Carlos", age: 45, isActive: false },
    { id: 5, name: "Emin", age: 18, isActive: true },
  ])

  console.log('Seed executed')
}
