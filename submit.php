<?php
	$subject = "Message from " . $_POST["name"] . " about " $_POST["subject"];
	$msg = $_POST["message"];
	$msg = wordwrap($msg, 70);
	echo($subject);
	echo$(msg);
?>
