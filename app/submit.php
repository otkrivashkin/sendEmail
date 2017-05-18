<?php

$site_name = "Повідомлення із форми зворотнього звязку";

$firstName = trim($_POST['firstName']);
$lastName = trim($_POST['lastName']);
$email = trim($_POST['email']);
$phoneNumber = trim($_POST['phoneNumber']);
$password = trim($_POST['password']);
$message = trim($_POST['message']);

$message = "Користувач $firstName $lastName з електронною адресою $email відправив вам повідомлення з текстом:\n
$message\n
Його контактні дані:\n
Номер телефона: $phoneNumber\n
Електронна пошта: $email\n
Пароль: $password";

$page_title = "Нова заявка з сайту \"$site_name\"";

mail($recipient, $page_title, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");
