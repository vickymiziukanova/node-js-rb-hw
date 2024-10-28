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
);



-- ALTER TABLE users ADD UNIQUE (name)
-- ALTER TABLE users ALTER COLUMN name SET NOT NULL;