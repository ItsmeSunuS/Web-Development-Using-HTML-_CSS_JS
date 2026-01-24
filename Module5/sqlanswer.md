

  Database Relationships

   1. Definition of Database Relationship

A  database relationship  defines how two or more tables in a database are connected to each other using  primary keys  and  foreign keys .  
Relationships help maintain  data integrity , reduce  data redundancy , and enable efficient data retrieval.

In relational databases, relationships allow data to be split into multiple tables while still being logically connected.

 

   2. Types of Database Relationships

There are three main types of database relationships:

1. One to One (1:1)
2. One to Many (1:N)
3. Many to Many (M:N)

Each of these is commonly used in real world systems such as  e commerce applications .

 

   3. One to One Relationship (1:1)

    Definition
In a  one to one relationship , one record in a table is associated with  only one record  in another table.

    E commerce Example
 User ↔ User_Profile 

  Each user has only one profile.
  Each profile belongs to only one user.

    Tables
  `users(user_id, username, email)`
  `user_profiles(profile_id, user_id, address, phone)`

    Diagram
```mermaid
erDiagram
    USERS ||  || USER_PROFILES : has
    USERS {
        int user_id PK
        string username
        string email
    }
    USER_PROFILES {
        int profile_id PK
        int user_id FK
        string address
        string phone
    }
````

    Use Case

Used when optional or sensitive data should be separated from the main table.

 

   4. One to Many Relationship (1:N)

    Definition

In a  one to many relationship , one record in a table can be associated with  multiple records  in another table.

    E commerce Example

 Customer ↔ Orders 

* One customer can place many orders.
* Each order belongs to only one customer.

    Tables

* `customers(customer_id, name, email)`
* `orders(order_id, customer_id, order_date)`

    Diagram

```mermaid
erDiagram
    CUSTOMERS ||  o{ ORDERS : places
    CUSTOMERS {
        int customer_id PK
        string name
        string email
    }
    ORDERS {
        int order_id PK
        int customer_id FK
        date order_date
    }
```

    Use Case

This is the  most common  relationship type in e commerce systems.

 

   5. Many to Many Relationship (M:N)

    Definition

In a  many to many relationship , multiple records in one table are related to multiple records in another table.
This relationship is implemented using a  junction (bridge) table .

    E commerce Example

 Orders ↔ Products 

* One order can contain many products.
* One product can appear in many orders.

    Tables

* `orders(order_id, order_date)`
* `products(product_id, product_name, price)`
* `order_items(order_id, product_id, quantity)`

    Diagram

```mermaid
erDiagram
    ORDERS ||  o{ ORDER_ITEMS : contains
    PRODUCTS ||  o{ ORDER_ITEMS : includes

    ORDERS {
        int order_id PK
        date order_date
    }

    PRODUCTS {
        int product_id PK
        string product_name
        float price
    }

    ORDER_ITEMS {
        int order_id FK
        int product_id FK
        int quantity
    }
```

    Use Case

Used when both entities can have multiple associations with each other.

 
 
