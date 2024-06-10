<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST" ) {
$fullname = isset($_POST["nom"]) ? $_POST : [];



$count = count($fullname);


for ($i = 0 ; $i < $count; $i++;) {
    $fullname = htmlspecialchars(trim($fullname[$i]))
}


    http_response_code(200);
    echo "Message envoyé";   
}else {
    http_response_code(400);
    echo "Requete invalide";
}