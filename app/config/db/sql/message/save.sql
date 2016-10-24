UPDATE messages
SET name = $2, email = $3, body = $4
WHERE id = $1
RETURNING *;
