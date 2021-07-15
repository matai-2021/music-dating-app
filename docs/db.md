# Database relationships

![alt text](./db.png "Logo Title Text 1")


use [https://dbdiagram.io/d](https://dbdiagram.io/d) and paste the following code

```
Table users as U {
  id int [pk, increment] // auto-increment
  username varchar
  usersecret varchar
  fullname varchar
  gender_id int
  created_at timestamp
  
}

Table genders as G {
  id int [pk, increment] 
  name varchar
  
}


Table users_swipe as us {
  id int [pk, increment]
  sender_id int
  reciever_id int
  is_match boolean
  created_at timestamp
 }

// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one
Ref: us.sender_id > U.id
Ref: us.reciever_id > U.id
Ref: U.gender_id > G.id

```