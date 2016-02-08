<html>
	<body>
		<?php
		
		
			$module = $_GET['module'];
		
			echo '<b>' . $module . '</b>' . PHP_EOL;
		
			$connect = new mysqli("localhost", "root", "", "jppeng_tango");
			if ($connect->connect_error) {
				die("Connection failed: " . $connect->connect_error);
			}
		
			$connect->query("SET NAMES utf8");
			
			$start = $connect->query("SELECT vocab_start FROM module WHERE id='$module'")->fetch_assoc();
			echo $start["vocab_start"] . "<br/>";
			$count = $connect->query("SELECT vocab_count FROM module WHERE id='$module'")->fetch_assoc();
			echo $count["vocab_count"] . "<br/>";
		
			/*
			if ($result->num_rows > 0) {
				//Output that shit
				while($row = $result->fetch_assoc()) {
					echo "Name: " . $row["kana"] . "</br>";
				}
			} else {
				echo "0 results";
			}*/
		
			for ($i = 1; $i <= $count["vocab_count"]; $i++) {
				$vocab_word = $connect->query("SELECT eigo FROM vocab WHERE id='{$module}w{$i}'")->fetch_assoc();
				echo $vocab_word["eigo"] . "<br/>" . PHP_EOL;
			}
		?>
	</body>
</html>
