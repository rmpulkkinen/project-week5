CREATE SCHEMA schema_recipes;
CREATE TABLE recipebook (
    id serial PRIMARY KEY;
    recipe_header varchar(255) NOT NULL,
    recipe_intro text,
    recipe text,
    author varchar(100),
    image nVARBINARY(MAX),
    likes integer DEFAULT 0
)
