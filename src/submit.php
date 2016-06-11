<?php
$name = $_POST['name']; $email = $_POST['email']; $message = $_POST['message'];
$body = "$name said: $message"; $headers = "From: $email";
mail("monsterfactions@yahoo.com", "Message from a Visitor", $body, $headers);
header("Location: success.html"); ?>

