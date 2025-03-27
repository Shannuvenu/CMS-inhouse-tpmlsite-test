<?php
// Ensure that the request method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    // Sanitize and collect the form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $category = htmlspecialchars(trim($_POST['category']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Basic validation for required fields
    if (empty($name) || empty($email) || empty($message)) {
        echo 'error_missing_fields';
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'error_invalid_email';
        exit;
    }

    // Prepare email content
    $to = 'jamseedulfaris@printersmysore.co.in';  // Replace with your email address
    $subject = "Contact Form Submission - $category";
    $body = "You have received a new message from your website contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Category: $category\n".
            "Message:\n$message\n";
    
    // Set headers to prevent email injection
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // If mail sent successfully
        echo 'success';
    } else {
        // If mail fails to send
        echo 'error_sending_mail';
    }

} else {
    // If the request method is not POST
    echo 'error_invalid_request';
}
?>
