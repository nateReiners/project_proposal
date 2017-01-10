# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
img_url     | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
album_id    | integer   | not null, foreign key (references notebooks), indexed


## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references photos), indexed
followee_id | integer   | not null, foreign key (references tags), indexed
