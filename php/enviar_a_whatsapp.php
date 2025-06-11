<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $articulo = $_POST["articulo"];
    $mensaje = "¡Hola! Estoy interesado en comprar el artículo '" . $articulo . "'. ¿Puede proporcionarme más información?";

    
    $numeroWhatsApp = '3017542208';

    $whatsappURL = 'https://api.whatsapp.com/send?phone=' . $numeroWhatsApp . '&text=' . urlencode($mensaje);

    
    header("Location: $whatsappURL");
    exit;
}

?>