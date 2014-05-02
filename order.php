<?php

$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['description'];
$service = $_POST['service'];

mail("sales@bennett-media.net", $name.":".$service, $message, "From: $email");

?>