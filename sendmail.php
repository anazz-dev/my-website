<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = $_POST["first_name"];
        $last_name = $_POST["last_name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $to = "info@germanmedresidency.com";
        $subject = "New Consultation Request from " . $first_name . " " . $last_name;
        $body = "Name: " . $first_name . " " . $last_name . "\n";
        $body .= "Email: " . $email . "\n";
        $body .= "Message: \n" . $message;

        $headers = "From: " . $email . "\r\n";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "An error occurred while sending your message. Please try again.";
        }
    } else {
        echo "Invalid request.";
    }
?>
