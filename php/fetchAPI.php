<?php

include "database.php";

header("Content-type: application/json");

if (isset($_GET["url"])) {
    $ch = curl_init($_GET["url"]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    
    if ($err = curl_error($ch)) {
        echo $err;
    } else {
        $response_json = json_decode($response);
        
        $api_results = $response_json->Search;
        
        foreach($api_results as $row) {
            $title = mysqli_real_escape_string($conn, $row->Title);
            $year = $row->Year;
            $imdbID = mysqli_real_escape_string($conn, $row->imdbID);
            $type = mysqli_real_escape_string($conn, $row->Type);
            $poster = mysqli_real_escape_string($conn, $row->Poster);
        
            // Insert data into Movies Table
            $insert_movies_table = mysqli_query($conn, "INSERT INTO `api_results`.`movies` VALUES ('$title', '$year', '$imdbID', '$type', '$poster');");
        
            // Insert data into Posters Table only if the record has a poster
            if ($poster === "N/A") continue;
            $insert_posters_table = mysqli_query($conn, "INSERT INTO `api_results`.`posters` VALUES ('$poster', '$imdbID', '$title');");
        };
        
        echo json_encode($response_json);
    };

    curl_close($ch);
};