/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('pets').insert([
    {id: 1, user_id: 1, name: 'Otis', type: 'dog', exercise: 'yes', feed: 2},
    {id: 2, user_id: 2, name: 'Nemo', type: 'fish', exercise: 'no', feed: 1},
    {id: 3, user_id: 3, name: 'Rupert', type: 'dog', exercise: 'yes', feed: 2},
  ]);
};
