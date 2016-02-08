	<script type = "text/javascript">
		function gen_modulebox(title, module, lesson, div_id) {
			//Get the element first.
			var div_edit = document.getElementById(div_id);
			
			var strHTML = "", baseURL = "index.php?id=vocab&module=l" + (lesson + 1) + "s" + (module);
			
			strHTML += "<div class = 'open_module'>";
			
			strHTML += "<span class = \"module_name\">" + vocabulary[lesson]["name"] + " - " + title + "</span>";
			strHTML += "<span class = \"module_exit\" onclick = \"document.getElementById('" + div_id + "').innerHTML = '';\">X</span>";
			
			strHTML += "<table class=\"box_table\" cellspacing=\"4px\"><tr>";
			
			strHTML += "<td><a href=\"" + baseURL + "&m=c" + "\" target=\"_top\"><div class = \"module_box\"><img class = \"module_img\"/><div class = \"module_box_text\">Chart</div></div></a></td>";
			strHTML += "<td><a href=\"" + baseURL + "&m=p" + "\" target=\"_top\"><div class = \"module_box\"><img class = \"module_img\"/><div class = \"module_box_text\">Practice</div></div></a></td>";
			strHTML += "<td><a href=\"" + baseURL + "&m=w" + "\" target=\"_top\"><div class = \"module_box\"><img class = \"module_img\"/><div class = \"module_box_text\">Worksheet</div></div></a></td>";
			
			strHTML += "</table>";
			
			strHTML += "</div>";
			
			div_edit.innerHTML = strHTML;
		}
	</script>
	
	<div id = "vocab_body">
		<?php
			echo "<title>Vocabulary Modules - jp_pEng</title>";
			
			$module = $_GET['module'];
		
			$connect = new mysqli("localhost", "jppeng_usr", "", "jppeng_tango");
			if ($connect->connect_error) {
				die("Connection failed: " . $connect->connect_error);
			}
		
			$connect->query("SET NAMES utf8");

			$result = $connect->query("SELECT * FROM sections ORDER BY id");
			
			//echo "{$result->num_rows}";
			
			for ($section = 1; $section <= $result->num_rows; $section++) {
				$sec_data = $connect->query("SELECT * FROM sections WHERE id=$section")->fetch_assoc();
				
				echo "<div class = 'section'>\n";
				echo "<span class = 'title'>{$sec_data["name"]}</span>";
				
				echo "<div class = 'table_back'><div class ='main_tbl'>";
				
				//Write the first section of the box
				echo "<div class = 'module_column sm-height'>";
				echo "<div class = 'count-top center-txt'>#</div>";
				echo "<div class = 'tledesc center-txt'>Description</div>";
				echo "<div class = 'links-top center-txt'>Links</div>";
				echo "</div>";
				//echo $sec_data["name"] . "<br/>";
				//echo $sec_data["count"] . "<br/>";
				
				for ($i = 1; $i <= $sec_data["count"]; $i++) {
					
					$mod_data = $connect->query("SELECT * FROM module WHERE id='l{$section}s{$i}'")->fetch_assoc();
					//echo $mod_data["name"] . $mod_data["description"] . "<br/>" . PHP_EOL;
					
					echo "<div class = 'module_column'>";
						echo "<div class = 'count center-txt large_tag text_border_111'>{$i}</div>";
						echo "<div class = 'data_tag tledesc'>";
							echo "<b><span class = 'text_border_111'>{$mod_data["name"]}</span></b></br>";
							echo $mod_data["description"];
						echo "</div>";
						$tmp_sec = $section - 1;
						echo "<div class = 'links center-txt'><a onclick = \"gen_modulebox('{$mod_data["name"]}', {$i}, {$tmp_sec}, 'mod_m{$section}l{$i}');\" href = \"#\">Enter Module</a></div>";
					echo "</div>";
					echo "<div id = 'mod_m{$section}l{$i}'></div>";
				}
				echo "</div></div></div>";
			}
			
			mysqli_close($connect);
		?>
	</div>
