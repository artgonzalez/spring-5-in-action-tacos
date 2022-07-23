delete from Ingredient;
insert into Ingredient (id, name, type)
values ('FLTO', 'Flour Tortilla', 'WRAP');
insert into Ingredient (id, name, type)
values ('COTO', 'Corn Tortilla', 'WRAP');
insert into Ingredient (id, name, type)
values ('GRBF', 'Ground Beef', 'PROTEIN');
insert into Ingredient (id, name, type)
values ('CARN', 'Carnitas', 'PROTEIN');
insert into Ingredient (id, name, type)
values ('TMTO', 'Diced Tomatoes', 'VEGGIES');
insert into Ingredient (id, name, type)
values ('LETC', 'Lettuce', 'VEGGIES');
insert into Ingredient (id, name, type)
values ('CHED', 'Cheddar', 'CHEESE');
insert into Ingredient (id, name, type)
values ('JACK', 'Monterrey Jack', 'CHEESE');
insert into Ingredient (id, name, type)
values ('SLSA', 'Salsa', 'SAUCE');
insert into Ingredient (id, name, type)
values ('SRCR', 'Sour Cream', 'SAUCE');
delete from customer;
insert into customer (username, password, fullname, street, city, state, zip, phone_number)
values ('batman', '466d1db2bf95090fd91b29939f3feba01a96557167b54d7d9e54be55dce627f5ff030b2098c60fdc', 'bruce wayne', '123 Bat Cave', 'Gotham', 'DC', '12345', '1234567899');
insert into customer (username, password, fullname, street, city, state, zip, phone_number)
values ('bart', 'd0a91c2bd6468aa8f92932a93cd1aac1ff25734ddcd9daac67ae4037356a7a7d6871cb622983e77e', 'bart simpson', '123 Main st', 'Springfield', 'TX', '12345', '9568675309');
