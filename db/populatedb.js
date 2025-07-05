require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  name VARCHAR ( 255 ),
  added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (message, name, added)
VALUES
  ('Hi there!', 'Amando', NOW()),
  ('Hello World', 'Bryan', NOW()),
  ('That''s not Vegan!', 'Kate', NOW()),
  ('Unpopular opinion: Liking Indie music doesn''t make you cool', 'Molly', NOW());
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
			host: process.env.HOST,
			user: process.env.USER,
			database: process.env.DATABASE,
			password: process.env.PASSWORD,
			port: parseInt(process.env.PORT),
			ssl: { rejectUnauthorized: false },
		});
  await client.connect();
	await client.query(SQL);
	await client.end();
	console.log('done');
}

main();