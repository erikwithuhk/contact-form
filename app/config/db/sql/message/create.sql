
INSERT INTO messages (name, email, body) VALUES ($1, $2, $3) RETURNING *;
