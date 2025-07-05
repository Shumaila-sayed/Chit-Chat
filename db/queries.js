const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function insertMessages(message, name) {
    await pool.query('INSERT INTO messages (message, name) VALUES ($1, $2)', [message, name]);
}

async function getMessageDetails(id) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    return rows[0];
}

module.exports = {
    getAllMessages, insertMessages, getMessageDetails
};