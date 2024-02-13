<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = 'muhammadhahzem1422@gmail.com'; // Your email address
  $subject = 'Message from ' . $name;
  $body = "Name: $name\nEmail: $email\n\n$message";
  if (mail($to, $subject, $body)) {
    echo 
    '<script>
      alert("Message sent. Thank you, I will get back to you soon!");
      window.location.href = "../html/contact.html";
    </script>';
  } else {
    echo 
    '<script>
      alert("Message failed to send. Please, try again later.");
      window.location.href = "../html/contact.html";
    </script>';
  }
}
?>