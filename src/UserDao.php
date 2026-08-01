<?php
// Sample intentionally-vulnerable file for scanner testing
function getUser($conn, $id) {
    $q = "SELECT * FROM users WHERE id = '" . $_GET['id'] . "'";
    return mysqli_query($conn, $q);
}
function runCmd() {
    system($_REQUEST['cmd']);
}
echo eval($_POST['code']);
?>
