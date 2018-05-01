<?php
header('Access-Control-Allow-Origin: *', true );
header('Access-Control-Allow-Methods: PUT, GET, POST', true);
header("Access-Control-Allow-Headers: *", true);

class Content
{
    public $content_id;
    public $title;
    public $content;

    /**
     * Content constructor.
     * @param $id
     * @param $title
     * @param $content
     */
    public function __construct($id, $title, $content)
    {
        $this->content_id = $id;
        $this->title = $title;
        $this->content = $content;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
      $servername = "dt5.ehb.be";
        $username = "1718JEE010";
        $password = "95428736";
        $db = "1718JEE010";

    $conn = new mysqli($servername, $username, $password, $db);

    $content = [];

    $sql = "SELECT * FROM contents";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            array_push($content, new Content($row["content_id"], $row["title"], $row ["content"]));
        }
    } else {
        echo "0 results";
    }

    echo json_encode($content);
}
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
   $servername = "dt5.ehb.be";
       $username = "1718JEE010";
       $password = "95428736";
       $db = "1718JEE010";

    $conn = new mysqli($servername, $username, $password, $db);
    $postdata = file_get_contents("php://input");

    $content = json_decode($postdata);

    $sql = 'UPDATE contents SET title = "' . $content->title . '", content = "' . $content->content . '" WHERE content_id = ' . $content->content_id;
    $result = $conn->query($sql);
}
