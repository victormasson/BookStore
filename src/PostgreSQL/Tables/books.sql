-- Table Definition
CREATE SEQUENCE IF NOT EXISTS books_id_seq;
CREATE TABLE "books" (
    "Id" int4 NOT NULL DEFAULT nextval('books_id_seq'::regclass),
    "Name" varchar(255) NOT NULL,
    "Price" decimal,
    "Category" varchar(255) NOT NULL,
    "Author" varchar(255) NOT NULL,
    PRIMARY KEY ("Id")
);

-- Fake contact data
INSERT INTO "books" ("Id", "Name", "Price", "Category", "Author") VALUES (1, 'API', 15.3, 'Dev', 'John Doe');