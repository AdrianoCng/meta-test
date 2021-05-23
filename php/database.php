<?php

$servername = "localhost";
$username = "root";

$conn = mysqli_connect($servername, $username);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
};

$create_movies_table = "CREATE TABLE IF NOT EXISTS `api_results`.`movies`
(   `Title` VARCHAR(255) NOT NULL UNIQUE,
    `Year` INT(11) NOT NULL , 
    `imbdID` VARCHAR(255) NOT NULL PRIMARY KEY, 
    `Type` VARCHAR(255) NOT NULL , 
    `Poster` VARCHAR(255) NOT NULL 
)";

$create_posters_table = "CREATE TABLE IF NOT EXISTS `api_results`.`posters`
(   `Poster` VARCHAR(255) NOT NULL PRIMARY KEY,
    `imbdID` VARCHAR(255) NOT NULL,
    `Title` VARCHAR(255) NOT NULL
)";

mysqli_query($conn, $create_movies_table);
mysqli_query($conn, $create_posters_table);