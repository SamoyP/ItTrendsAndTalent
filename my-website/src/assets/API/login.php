<?php
header('Access-Control-Allow-Origin: *', true);
header("Access-Control-Allow-Headers: *", true);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $servername = "dt5.ehb.be";
           $username = "1718JEE010";
           $password = "95428736";
           $db = "1718JEE010";

    $conn = new mysqli($servername, $username, $password, $db);
    $postdata = file_get_contents("php://input");

    $creds = json_decode($postdata);

    $sql = 'SELECT * FROM login WHERE username = "' . $creds->username . '" AND password = "' . $creds->password . '"';
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        echo json_encode(array('code' => 200, 'message' => 'Logged in'));
    } else {
        echo json_encode(array('code' => 201, 'message' => 'Bad Crendentials!'));
    }
}
