<?php

header("Content-Type: application/json");

// Récupération des données JSON
$data = json_decode(file_get_contents("php://input"), true);

// Validation serveur
$required = ["nom","prenom","email","telephone","date","heure","personnes","restaurant"];

foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(["message" => "Champs requis manquants."]);
        http_response_code(400);
        exit;
    }
}

if (!filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["message" => "Email invalide."]);
    http_response_code(400);
    exit;
}

if (!preg_match("/^[0-9]{10}$/", $data["telephone"])) {
    echo json_encode(["message" => "Téléphone invalide."]);
    http_response_code(400);
    exit;
}

// Protection anti-injection
$nom = htmlspecialchars($data["nom"]);
$prenom = htmlspecialchars($data["prenom"]);
$email = htmlspecialchars($data["email"]);
$telephone = htmlspecialchars($data["telephone"]);
$date = htmlspecialchars($data["date"]);
$heure = htmlspecialchars($data["heure"]);
$personnes = htmlspecialchars($data["personnes"]);
$restaurant = htmlspecialchars($data["restaurant"]);
$remarques = htmlspecialchars($data["remarques"] ?? "");

// Destinataire
$to = "contact@pasta-cosi.com";
$subject = "Nouvelle réservation";

// Message HTML
$message = "
<h2>Nouvelle réservation</h2>
<p><strong>Restaurant :</strong> $restaurant</p>
<p><strong>Nom :</strong> $nom</p>
<p><strong>Prénom :</strong> $prenom</p>
<p><strong>Email :</strong> $email</p>
<p><strong>Téléphone :</strong> $telephone</p>
<p><strong>Date :</strong> $date</p>
<p><strong>Heure :</strong> $heure</p>
<p><strong>Personnes :</strong> $personnes</p>
<p><strong>Remarques :</strong> $remarques</p>
";

// Headers
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: contact@pasta-cosi.com";

// Envoi
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["message" => "Réservation envoyée."]);
} else {
    echo json_encode(["message" => "Erreur lors de l'envoi."]);
    http_response_code(500);
}