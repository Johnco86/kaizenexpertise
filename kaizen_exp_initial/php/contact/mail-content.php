<?php

	/* PUT HERE YOUR MAIL MESSAGE */
	/*
		You can edit the email sent to you notifying about subscribers in this file.
		Below is a simple email example.

		The $name, $email, $url, $subject and $message variables all corresponds to the form fields name attribute.
	*/

?>

Bonjour, <br><br>
Quelqu'un a utilisé le formulaire de contact présent sur votre site pour vous joindre<br>
Voici les données :<br>
Nom: <?php echo $name ?><br>
E-mail: <?php echo $email ?><br>
URL: <?php echo $url ?><br>
Sujet: <?php echo $subject ?><br>
Message: <?php echo $message ?>
<br><br>
Merci !