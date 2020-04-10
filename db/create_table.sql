CREATE TABLE houses (
	id SERIAL PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	address VARCHAR(200) NOT NULL,
	city TEXT NOT NULL,
	state TEXT NOT NULL,
	zipcode INTEGER NOT NULL
)