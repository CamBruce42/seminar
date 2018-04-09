<?php

DEFINE('DB_USER', 'cameron');
DEFINE('DB_PSWD', 'luckydog');
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_NAME', 'orders');

$dbcon = msqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);
?>
