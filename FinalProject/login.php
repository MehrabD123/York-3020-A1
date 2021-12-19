<?php
$username = isset($_POST['user']) ? $_POST['user'] : '';
$password = isset($_POST['pass']) ? $_POST['pass'] : '';

$ValidLogin = array('mehrab' => 'Password_123',
'admin' => 'Password@123');

$ok = true;
$messages = array();

if ($ok) {
  if ($username == $ValidLogin[$_POST['user']] && $password == $ValidLogin[$_POST['pass']]) {
    $ok = true;
  }else {
    $ok = false;
    $messages = 'invalid password and username';
  }
}

echo json_encode(

array(
  'ok' => $ok,
  'messages' => $messages
)
  )








/*
$ValidLogin = array('mehrab' => 'Password_123',
'admin' => 'Password@123');
$username = $_POST('user');
$password = $_POST('pass');

if ($ValidLogin[$_POST['user']] == $_POST['pass']) {
  session_start();
  $_SESSION['response'] = "Success!";
  header("Location:landingpage.html");
  $response = 'OK';
  return true;
}




if (isset($_POST['user']) && $_POST['user'] && isset($_POST['pass']) && $_POST['pass']) {
    // do user authentication as per your requirements


    // based on successful authentication
    echo json_encode(array('success' => 1));
} else {
    echo json_encode(array('success' => 0));
}
*/
?>
