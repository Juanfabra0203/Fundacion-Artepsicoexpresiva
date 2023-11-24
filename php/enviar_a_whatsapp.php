<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $articulo = $_POST["articulo"];
    $mensaje = "¡Hola! Estoy interesado en comprar el artículo '" . $articulo . "'. ¿Puede proporcionarme más información?";

    
    $numeroWhatsApp = '3128650134';

    $whatsappURL = 'https://api.whatsapp.com/send?phone=' . $numeroWhatsApp . '&text=' . urlencode($mensaje);

    // Redirige al usuario a WhatsApp
    header("Location: $whatsappURL");
    exit;
}

?>