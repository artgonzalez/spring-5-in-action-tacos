create table if not exists Ingredient (
id varchar(4) not null primary key,
name varchar(25) not null,
type varchar(10) not null
);
create table if not exists Taco (
id identity,
name varchar(50) not null,
created_At timestamp not null
);
create table if not exists Taco_Ingredients (
taco_id bigint not null,
ingredients_id varchar(4) not null
);
alter table Taco_Ingredients
add foreign key (taco_id) references Taco(id);
alter table Taco_Ingredients
add foreign key (ingredients_id) references Ingredient(id);
create table if not exists Taco_Order (
id identity,
delivery_Name varchar(50) not null,
delivery_Street varchar(50) not null,
delivery_City varchar(50) not null,
delivery_State varchar(2) not null,
delivery_Zip varchar(10) not null,
cc_Number varchar(16) not null,
cc_Expiration varchar(5) not null,
ccCVV varchar(3) not null,
placed_At timestamp not null
);
create table if not exists Taco_Order_Tacos (
Order_Id bigint not null,
tacos_Id bigint not null
);
alter table Taco_Order_Tacos
add foreign key (Order_Id) references Taco_Order(id);
alter table Taco_Order_Tacos
add foreign key (tacos_Id) references Taco(id);