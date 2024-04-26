CREATE TABLE properties (
        property_id SERIAL PRIMARY KEY,
        property_type VARCHAR(50) NOT NULL,
        address VARCHAR(100) NOT NULL,
        city VARCHAR(50) NOT NULL,
        bedrooms INTEGER,
        bathrooms INTEGER,
        price INTEGER NOT NULL,
        description TEXT,
        publication_date DATE DEFAULT CURRENT_DATE,
        image VARCHAR(200)  NOT NULL,
        sold BOOLEAN DEFAULT FALSE
    );

INSERT INTO properties (property_type, address, city, bedrooms, bathrooms, price, description, publication_date, image, sold) 
VALUES 
('House', '111 Willow St', 'Riverside', 4, 3, 380000, 'Beautiful house with a riverside view.', '2024-04-19', 'https://www.amaviacollection.com/wp-content/uploads/2022/05/Villa-Gaia-1-scaled.jpeg', FALSE),
('Villa', '222 Elm St', 'Hillside', 7, 6, 1500000, 'Majestic villa with sprawling gardens.', '2024-04-18', 'https://media.apimo.pro/picture/83168/83167788/159683534164d5060616c9d7.60765367_07a1d11b01_1920.webp-original.jpg?1691682313', FALSE),
('House', '333 Pine St', 'Meadowland', 3, 2, 290000, 'Charming house surrounded by meadows.', '2024-04-17', 'https://static.realting.com/uploads/images/3f1/445e22c2280ba1273ef81a36f446a.webp', TRUE),
('Villa', '444 Oak St', 'Forestville', 5, 4, 980000, 'Secluded villa nestled in the forest.', '2024-04-16', 'https://algedra.com.tr/files/modern_exterior_designs_2020_1.jpg', FALSE),
('House', '555 Maple St', 'Valleyview', 4, 3, 320000, 'Cozy house with panoramic valley views.', '2024-04-15', 'https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004062.jpg', FALSE),
('Villa', '666 Cedar St', 'Oceanfront', 6, 5, 1800000, 'Exquisite villa overlooking the ocean.', '2024-04-14', 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a27460114583565.603e344449527.jpg', FALSE);


select * from properties