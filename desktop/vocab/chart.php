            <link rel="stylesheet" type="text/css" href="../data/css/section.css">
			<div class = "section">
                <div class = "table_back">
                    <table class = "main_tbl">
                        <tr>
                            <td class = "center_tag" width = "50px">日本語</td>
                            <td class = "center_tag" width = "175px">英語</td>
                        </tr>
                        <?php
                                $module = $_GET['module'];
                                //echo "{$module}";
                                $connect = new mysqli("localhost", "jppeng_usr", "", "jppeng_tango");
                                if ($connect->connect_error) {
                                        die("Connection failed: " . $connect->connect_error);
                                }
                        
                                $connect->query("SET NAMES utf8");
                                
                                $sec_data = $connect->query("SELECT * FROM module WHERE id='{$module}'")->fetch_assoc();
                                $start_pnt = $sec_data["vocab_start"];
                                $end_pnt   = $start_pnt + $sec_data["vocab_count"];
                                for ($i = $start_pnt + 1; $i <= $end_pnt; $i++) {
									$ii = $i - $start_pnt;
									$tango_data = $connect->query("SELECT * FROM vocab WHERE id='{$module}w{$ii}'")->fetch_assoc();
									echo "<tr><td class = 'center_tag'><a href = 'index.php?id=vocab&module=" . $module . "w" . $ii . "' target = '_top'>";
									if ($tango_data["kanji"] == "")
										echo "<font size = '5px'>" . $tango_data["kana"] . "</font>";
									else
										echo "<ruby><rb><font size='5px'>" . $tango_data["kanji"] . "</font></rb><rp>(</rp><rt><font size='2px'>" . $tango_data["kana"] . "</font></rt><rp>)</rp></ruby>";
									echo "</a></td><td width = '65%'>" . $tango_data["eigo"];
									echo "</td></tr>";
                                }
                                
                                mysqli_close($connect);
                        ?>
                    </table>
                </div>
	</div>
