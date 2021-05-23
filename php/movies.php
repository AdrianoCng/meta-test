<?php

include "database.php";

if (isset($_POST["data"])) {
    $movies_list = json_decode($_POST["data"], true);

    foreach($movies_list as $index => $row) {
        $title = $row["Title"];
        $year = $row["Year"];
        $imdbID = $row["imdbID"];
        $type = $row["Type"];
        $poster = $row["Poster"];

        $insert_movies_table = mysqli_query($conn, "INSERT INTO `api_results`.`movies` VALUES ('$title', '$year', '$imdbID', '$type', '$poster');");

        if ($poster === "N/A") continue;

        $insert_posters_table = mysqli_query($conn, "INSERT INTO `api_results`.`posters` VALUES ('$poster', '$imdbID', '$title');");
    };
};