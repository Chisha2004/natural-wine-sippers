-- Insert some fine Wines
INSERT INTO beverages (name, type, category, description, grape_variety, country, region, vintage, degree, capacity, rating, year, price, producer, img_url)
VALUES
    ('Chateau Montrose', 'Wine', 'Red', 'A powerful and structured Saint-Estephe with deep tanins and dark fruit notes.', 'Cabernet Sauvignon', 'France', 'Bordeaux', '2018', '14.5%', 750, 98, 2018, 185.00, 'Chateau Montrose', 'https://storage.winesippers.com/wines/montrose-2018.jpg'),
    ('Cloudy Bay', 'Wine', 'White', 'Zesty and vibrant with notes of passionfruit and lime. The definitive New Zealand white.', 'Sauvignon Blanc', 'New Zealand', 'Marlborough', '2022', '13.0%', 750, 92, 2022, 32.50, 'Cloudy Bay Vineyards', 'https://storage.winesippers.com/wines/cloudy-bay-2022.jpg'),
    ('Whispering Angel', 'Wine', 'Rosé', 'The worlds most popular rose. Pale, dry, and incredibly refreshing with strawberry hints.', 'Grenache', 'France', 'Provence', '2023', '12.5%', 750, 90, 2023, 24.00, 'Chateau d''Esclans', 'https://storage.winesippers.com/wines/whispering-angel.jpg');

-- Insert some Craft Beers
INSERT INTO beverages (name, type, category, description, grape_variety, country, region, vintage, degree, capacity, rating, year, price, producer, img_url)
VALUES
    ('Punk IPA', 'Beer', 'IPA', 'The beer that started the craft revolution. Post-modern classic with tropical fruit hops.', NULL, 'Scotland', 'Aberdeenshire', NULL, '5.4%', 330, 88, 2024, 3.50, 'BrewDog', 'https://storage.winesippers.com/beers/punk-ipa.jpg'),
    ('Weihenstephaner Hefe', 'Beer', 'Wheat', 'The worlds oldest brewery. Golden-yellow wheat beer with aromas of cloves and banana.', NULL, 'Germany', 'Bavaria', NULL, '5.4%', 500, 95, 2024, 4.25, 'Bayerische Staatsbrauerei', 'https://storage.winesippers.com/beers/weihenstephaner.jpg'),
    ('Guinness Draught', 'Beer', 'Stout', 'Distinctively dark with a creamy head. The iconic Irish dry stout.', NULL, 'Ireland', 'Dublin', NULL, '4.2%', 440, 91, 2024, 2.99, 'Diageo', 'https://storage.winesippers.com/beers/guinness.jpg');

-- Insert test users (passwords are BCrypt encoded)
-- User 1: email=chisha@sippers.com, password=password1234
-- User 2: email=sanele@sippers.com, password=password1234
INSERT INTO users (email, password, doe, dlu)
VALUES
    ('chisha@sippers.com', '$2a$10$slYQmyNdGzin7olVN3p5be4DlH.PKZbv5H8KnzzVgXXbVxzy990qm', NOW(), NOW()),
    ('sanele@sippers.com', '$2a$10$N9qo8ucoownX08ZvSrjC9SOm.v52p40U6DY3ue2nQWGEv5TS8qKm', NOW(), NOW());
