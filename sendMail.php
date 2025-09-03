<?php

require __DIR__ . '/vendor/autoload.php';  // Composer autoload

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $number  = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';  
        $mail->SMTPAuth   = true;
        $mail->Username   = 'support@ispsc-clinic.personatab.com';  
        $mail->Password   = 'dlGamoso23_';    
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('support@ispsc-clinic.personatab.com', 'DL Portfolio');
        $mail->addAddress('support@ispsc-clinic.personatab.com'); 
        $mail->addAddress('gamosodl@gmail.com');

        // Content
        $mail->isHTML(true);
        $mail->Subject = !empty($subject) ? $subject : 'New Contact Message';
        $mail->Body    = "
            <h3>New message from your portfolio contact form</h3>
            <p><b>Name:</b> {$name}</p>
            <p><b>Email:</b> {$email}</p>
            <p><b>Number:</b> {$number}</p>
            <p><b>Message:</b><br>{$message}</p>
        ";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Message Sent!"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Mailer Error: {$mail->ErrorInfo}"]);
    }
}
