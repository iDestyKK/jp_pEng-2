<html>
	<?php
		
		ini_set('memory_limit', '1024M');
		ini_set('max_execution_time', 300);
		ini_set('max_input_vars', 1000000);
		
		$vocab = json_decode($_POST['vocab_array'], true);
		
		$connect = new mysqli("localhost", "root", "", "jppeng_tango");
		if ($connect->connect_error) {
			die("Connection failed: " . $connect->connect_error);
		}
		
		$connect->query("SET NAMES utf8");
		
		//Reconstruct Section and Module Data
		$i  = 0;
		$wi = 0; //Word Index
		$si;
		foreach ($vocab as $section) {
			$i++;
			$si = 1;
			foreach ($section["sections"] as $module) {
				$sql = "INSERT INTO module (name, description, vocab_start, vocab_count, id) VALUES('" . $module["name"] . "', '" . $module["description"] . "', " . $wi . ", " . count($module["tango"]) . ", 'l" . $i . "s" . $si++ . "')";
				$wi += count($module["tango"]);
				$connect->query($sql);
			}
			$sql = "INSERT INTO sections (name, id, count) VALUES('" . $section["name"] . "', " . $i . ", '" . count($section["sections"]) . "')";
			$connect->query($sql);
		}
		
		//Reconstruct Vocabulary Data
		$sec = 0;
		$mod = 0;
		$wor = 0;
		foreach ($vocab as $section) {
			$sec++;
			$mod = 0;
			foreach ($section["sections"] as $module) {
				$mod++;
				$wor = 0;
				foreach ($module["tango"] as $word) {
					$wor++;
					fwrite($f, "\t\t" . $word[1] . PHP_EOL);
					$sql = "INSERT INTO vocab (kanji, kana, romaji, eigo, type, id) VALUES('" . $word[0] . "', '" . $word[1] . "', '" . $word[2] . "', '" . $word[3] . "', '" . $word[5] . "', 'l" . $sec . "s" . $mod . "w" . $wor . "')";
					if ($connect->query($sql) === TRUE) {
						echo "New record created successfully... :)";
					}
					else {
						echo "Error: " . $sql . "<br>" . $connect->error;
					}
				}
			}
		}
	?>
</html>
