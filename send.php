<?php
    $mailwebmaster="couprie.cecilia@gmail.com";
    $subject="You got mail from : ".$_POST["name"];
    $edito=$_POST["message"];
    $email=$_POST["email"];
    $mailheader="From:$email\n";
    $header.="content-type:text/html;charset=utf-8";

mail($mailwebmaster, $subject, $edito, $mailheader) or die("Erreur!");
echo "Merci pour votre message!" . "/" . "<a href='index.html' style='text-decoration:none;color:#59F2DB'> Retour au site</a>";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
</head>
<body>
    
</body>
</html>