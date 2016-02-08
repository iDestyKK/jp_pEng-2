<html>
	<head>
		<link rel="stylesheet" type="text/css" href="../data/css/main.css">
		<link rel="stylesheet" type="text/css" href="../data/css/scrollbar.css">
		<link rel="stylesheet" type="text/css" href="../data/css/msg_box.css">
		<link rel="stylesheet" type="text/css" href="../data/css/tango.css">
	</head>
	
	<!-- Include libraries -->
	<script src = "../data/lang_data.js" type = "text/javascript"></script>
	<script src = "../data/toolbox.js"   type = "text/javascript"></script>
	<script src = "../data/common.js"    type = "text/javascript"></script>
	<script src = "../data/vocab.js"     type = "text/javascript"></script>
	<script src = "../data/conjugate.js" type = "text/javascript"></script>
	<script src = "../data/msg_box.js"   type = "text/javascript"></script>
	
	<style type = "text/css">
		
	</style>
	
	<body>
		<!-- Action area to the right (And first so it has lowest depth) -->
		<div class = "action_area">
			<!--<iframe name="Iframe" id="navigation_frame" src = "" width="100%" height="100%" allowtransparency="true" frameBorder="0"></iframe>-->
			<?php
				$title  = "jp_pEng";
				$desc   = "Simple 日本語 Vocabulary Quizzing Interface";
				$class  = "top_title";
				$module = $_GET['module'];
				
				$_redir = $_GET['id'];
				switch ($_redir) {
					case 'vocab':
						if ($_GET['module']) {
							if (strpos($module, 'w') !== false) {
								$title = "Dictionary";
								$desc  = "Definitions and conjugations of words";
								require_once('./vocab/word.php');
							}
							else {
								$title = "Vocabulary Chart";
								$desc  = "List of words in a Module";
								require_once('./vocab/chart.php');
							}
						}
						else {
							$title = "Vocabulary Modules";
							$desc  = "List of sections for vocabulary words";
							require_once('./vocab/index.php');
						}
						$class = "mod_top_title";
						break;
					default:
						require_once("newsfeed.html");
						echo "<title>jp_pEng</title>";
						break;
				}
			?>
			<!--<object type = "text/html" id = "navigation_frame" width="100%" height="100%" data = ""></object>-->
		</div>
		
		<!-- Toolbar to the left -->
		<?php
			require_once('sidebar.php');
		?>
		
		<!-- The top of the website -->
		<div class = "top_bar">
			<div class = "cover_div">
				<span class = "<?php echo $class; ?>" id = "app_title">
					<?php echo $title; ?>
					<!-- <script type = "text/javascript">document.write(text_data["en"]["app_name"]);</script> -->
				</span>
				<span class = "top_description" id = "app_description">
					<?php echo $desc; ?>
					<!-- <script type = "text/javascript">document.write(text_data["en"]["app_description"]);</script> -->
				</span>
			</div>
		</div>
		
		<!-- Copyright at the bottom -->
		<div class = "copyright_box">
			<div class = "inner">
				<script type = "text/javascript">document.write(text_data["en"]["copyright"]);</script>
			</div>
		</div>
	</body>
</html>
