CREATE TABLE IF NOT EXISTS Users (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS UserPreferences (
    PreferenceID SERIAL PRIMARY KEY,
    LanguageCode VARCHAR(100),
    PreferredCommunication INT,
    UserId INT,
    FOREIGN KEY (UserId) REFERENCES Users(ID)
    ON DELETE CASCADE
);

INSERT INTO Users (name, email)
VALUES
    ('John1', 'john@gmail.com'),
    ('Alise2' , 'alice@gmail.com')
RETURNING *;

INSERT INTO UserPreferences (languagecode, preferredcommunication, userid)
VALUES
    ('fr', 123, 1),
    ('fr', 123, 1),
    ('de', 123, 2)
RETURNING *;

-- DELETE FROM Users WHERE id = 1;

-- ALTER TABLE users ADD UNIQUE (name)
-- ALTER TABLE users ALTER COLUMN name SET NOT NULL;

CREATE TABLE IF NOT EXISTS Students (
   id SERIAL PRIMARY KEY,
   Name VARCHAR(100)
);

CREATE OR REPLACE PROCEDURE add_student(student_name VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
INSERT INTO Students (Name)
VALUES (student_name);
END;
$$;

CALL add_student('John Doe');
