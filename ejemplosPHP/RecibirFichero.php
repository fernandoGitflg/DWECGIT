<?php
    $fichero_subido=__DIR__ . '/'. basename($_FILES['mifichero']['name']);
    if(move_uploaded_file($_FILES['mifichero']['tmp_name'], $fichero_subido)){
        echo basename($fichero_subido);

    }else{
        echo "<h1>¡Error!</h1>";
    }
?>