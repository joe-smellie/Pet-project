/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Joe', email: 'joesmellie1@gmail.com', location: 'Wellington'},
    {id: 2, name: 'Hannah', email: 'haustinsmellie@gmail.com', location: 'Melbourne'},
    {id: 3, name: 'Cherry', email: 'caustinhart@gmail.com', location: 'Dunedin'}
  ]);
};
