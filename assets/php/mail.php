<?php

if(isset($_POST['topic']))
	$topic_post = $_POST['topic'];
else
	$topic_post = "PUSTY_TEMAT";

if(isset($_POST['email']))
	$email_post=$_POST['email'];
else
	$email_post = "PUSTY_MAIL";

if(isset($_POST['message']))
	$message_post=$_POST['message'];
else
	$message_post = "PUSTA_WIADOMOSC";

//echo $topic_post.$email_post.$message_post;

$messages = new SimpleXMLElement('data.xml', null, true);

$message = $messages->addChild('message');
$message->addChild('topic', $topic_post);
$message->addChild('mail', $email_post);
$message->addChild('text', $message_post);

print $messages->asXML('data.xml');


/*
$doc = new DOMDocument();
$doc->load('data.xml');

$root = $doc->getElementsByTagName("messages")->item(0);

$msg = $doc->createElement('message');

$topic = $doc->createElement('topic', $topic_post);
$mail = $doc->createElement('mail', $email_post);
$text = $doc->createElement('text', $message_post);

$msg->appendChild($topic);
$msg->appendChild($mail);
$msg->appendChild($text);

$root->appendChild($msg);

$doc->save('data.xml');
*/
?>