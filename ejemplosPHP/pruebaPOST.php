<?php
header("Content-Type: application/json");

$jsonRaw = file_get_contents('php://input');
$data = json_decode($jsonRaw, true);

$personas = [];

foreach ($data as $persona) {
    $personas[] = [
        "nombre" => $persona["nombre"],
        "edad"   => $persona["edad"]
    ];
}

echo json_encode([
    "personas" => $personas,
    "mensaje" => "Enviados"
]);
