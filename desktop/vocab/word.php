			<?php		
				$connect = new mysqli("localhost", "jppeng_usr", "", "jppeng_tango");
				$connect->query("SET NAMES utf8");
				$tango_data = $connect->query("SELECT * FROM vocab WHERE id='{$_GET['module']}'")->fetch_assoc();
			
				$lesson  = substr($module, strpos($module, 'l') + 1, strpos($module, 's') - 1 - strpos($module, 'l'));
				$section = substr($module, strpos($module, 's') + 1, strpos($module, 'w') - 1 - strpos($module, 's'));
				$word_id = substr($module, strpos($module, 'w') + 1, strlen($module     ) - 1 - strpos($module, 'w'));
			
				$mod_data = $connect->query("SELECT * FROM module WHERE id='l{$lesson}s{$section}'")->fetch_assoc();
			
				$next_id = "";
				$prev_id = "";
			
				if (intval($word_id) + 1 <= $mod_data["vocab_count"]) {
					$next_id = "l" . $lesson . "s" . $section . "w" . (intval($word_id) + 1);
					$n_tango_data = $connect->query("SELECT * FROM vocab WHERE id='{$next_id}'")->fetch_assoc();
				}
			
				if (intval($word_id) - 1 > 0) {
					$prev_id = "l" . $lesson . "s" . $section . "w" . (intval($word_id) - 1);
					$p_tango_data = $connect->query("SELECT * FROM vocab WHERE id='{$prev_id}'")->fetch_assoc();
				}
				
				if ($tango_data["kanji"] !== "")
					echo "<title>{$tango_data["kanji"]} ({$tango_data["kana"]}) - jp_pEng Dictionary</title>";
				else
					echo "<title>{$tango_data["kana"]} - jp_pEng Dictionary</title>";
				
				mysqli_close($connect);
			?>
	
			<script type = "text/javascript">
				//Get data on the current module
				/*var module = getUrlVars()["module"];
				lesson  = getCurrentLesson (module);
				section = getCurrentSection(module);
				vocab   = getCurrentVocab  (module);*/
		
				//var tango = vocabulary[lesson]["sections"][section]["tango"][vocab - 1];
				vocab_data = {
					kanji : "<?php echo $tango_data["kanji"]; ?>",
					kana  : "<?php echo $tango_data["kana"]; ?>",
					romaji: "<?php echo $tango_data["romaji"]; ?>",
					eigo  : "<?php echo $tango_data["eigo"]; ?>",
					hint  : "",
					type  : "<?php echo $tango_data["type"]; ?>"
				};
		
				/*parent.document.getElementById("app_title")      .className = "mod_top_title";
				parent.document.getElementById("app_title")      .innerHTML = vocabulary[lesson]["name"] + " - " + vocabulary[lesson]["sections"][section]["name"] + " (辞書)";
				parent.document.getElementById("app_description").innerHTML = vocabulary[lesson]["sections"][section]["description"];*/
			</script>
	
			<div class = "section">
				<div class = "table_back">
					<div class = "tango_box main_tbl">
						<center>
							<?php
								if ($tango_data["kanji"] == "")
									echo "<ruby><rb><font size='6px'>" . $tango_data["kana"] . "</font></rb><rp>(</rp><rt><font size='2px'>&nbsp;</font></rt><rp>)</rp></ruby>";
								else
									echo "<ruby><rb><font size='6px'>" . $tango_data["kanji"] . "</font></rb><rp>(</rp><rt><font size='2px'>" . $tango_data["kana"] . "</font></rt><rp>)</rp></ruby>";
							?>
						</center>
						
						<div class = "suggested_words">
							<?php
								if ($prev_id != "") {
									echo "<span class = 'suggested_left'><a href = 'index.php?id=vocab&module={$prev_id}'>≪ ";
									if ($p_tango_data["kanji"] == "")
										echo "{$p_tango_data["kana"]}";
									else
										echo "{$p_tango_data["kanji"]} / {$p_tango_data["kana"]}";
									echo "</a></span>";
								}
										
								if ($next_id != "") {
									echo "<span class = 'suggested_right'><a href = 'index.php?id=vocab&module={$next_id}'>";
									if ($n_tango_data["kanji"] == "")
										echo "{$n_tango_data["kana"]}";
									else
										echo "{$n_tango_data["kanji"]} / {$n_tango_data["kana"]}";
									echo " ≫</a></span>";
								}
							?>
						</div>
						
						<h2>Definition</h2>
						<span class = "tango_eigo">
							<?php
								echo $tango_data["eigo"];
							?>
						</span>
						<h2>Location</h2>
						<span class = "tango_eigo">
							<a href = "index.php?id=vocab&module=<?php echo "l" . $lesson . "s" . $section; ?>">Lesson <?php echo $lesson; ?> - <?php echo $mod_data["name"]; ?></a>
						</span>
						<h2>Conjugations</h2>
						<script type = "text/javascript">
							if (vocab_data.type == "") {
								document.write("<span class = \"tango_eigo\"><i>This word is either a phrase or does not have conjugations!</i></span>");
							} else {
								//MAKE A TABLE
								var conjtab = getConjugationTable(data2Tango(vocab_data));
							
								for (var a = 0; a < conjtab.length; a++) {
									document.write("<table class = 'glass'>");
									if (a == 0) {
										document.write("<tr><td></td><td>Affirmative</td><td>Negative</td></tr>");
										for (var i = 0; i < conjtab[a].length; i++) {
											document.write("<tr>");
											document.write("<td>" + getConjugateName(a, i, vocab_data.type) + "</td>");
											document.write("<td>" + conjtab[a][i][0] + "</td>");
											document.write("<td>" + conjtab[a][i][1] + "</td>");
											document.write("</tr>");
										}
									} else {
										for (var i = 0; i < conjtab[a].length; i++) {
											document.write("<tr>");
											document.write("<td>" + getConjugateName(a, i, vocab_data.type) + "</td>");
											document.write("<td>" + conjtab[a][i][0] + "</td>");
											document.write("</tr>");
										}
									}
									document.write("</table></br>");
								}
							}
						</script>
						<!--<i>Conjugations are currently being worked on! Please sit tight!</i>-->
					</div>
				</div>
			</div>
