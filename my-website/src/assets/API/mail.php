<?php
header('Access-Control-Allow-Origin: *', true);
header("Access-Control-Allow-Headers: *", true);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$postdata = file_get_contents("php://input");
    $creds = json_decode($postdata);

    $to = "ENTER MAIL HERE";
    $subject = "$creds->onderwerp";
    $message = "
<html>
<head>
<title>Contact formulier</title>
</head>
<body>
<div>
<p><b>E-mailadres: </b> &#09;" . $creds->mail . "</p>
<p><b>Onderwerp: </b> &#09;" . $creds->onderwerp . "</p>
<p><b>Bericht: </b> &#09;" . $creds->bericht . "</p>
</div>
</body>
</html>
";

// Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $headers .= "From: " . $creds->mail;

    mail($to, $subject, $message, $headers);
}
