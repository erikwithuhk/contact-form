
INSERT INTO messages (name, email, body, created_at, updated_at)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;
