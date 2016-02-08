<div class = "option_outer">
			<div class = "option_select">
				<div class = "option_bg" id = "module_pool">
				</div>
			</div>
		</div>
	
		<script type = "text/javaScript">
			//Generate the left pane's tool box.
			_iframe_page = "newsfeed.html";
			var id = getUrlVars()["id"];
			var module = getUrlVars()["module"];
		
			for (var __mod_cur = 0; __mod_cur < modules.length; __mod_cur++) {
				//Header
				var iDiv = document.createElement('div');
				iDiv.id = "sidebar_category" + __mod_cur;
				iDiv.className = "sidebar_header";
				iDiv.innerHTML = "<b>" + modules[__mod_cur].name + "</b>";
				document.getElementById('module_pool').appendChild(iDiv);
			
				for (var __app_cur = 0; __app_cur < modules[__mod_cur]["contents"].length; __app_cur++) {
					var iDiv = document.createElement('div');
					iDiv.id = "sidebar" + __mod_cur + "_option" + __app_cur;
					if (id === modules[__mod_cur]["contents"][__app_cur][3])
						iDiv.className = "sidebar_clicked";
					else
						iDiv.className = "sidebar_click";
				
					iDiv.onclick = function(event) {
						//Cheat using the ID to get our values properly...
						var __mod_cur = parseInt(this.id.substr(7, this.id.indexOf("_") - 7));
						var __app_cur = parseInt(this.id.substr(this.id.indexOf("option") + 6));
					
						if (id != modules[__mod_cur]["contents"][__app_cur][3])
							top.location = "index.php?id=" + modules[__mod_cur]["contents"][__app_cur][3];
					}
					iDiv.innerHTML = "<b>" + modules[__mod_cur]["contents"][__app_cur][0] + "</b></br>" + modules[__mod_cur]["contents"][__app_cur][1];
					document.getElementById("module_pool").appendChild(iDiv);
				}
			
				//Footer
				var iDiv = document.createElement('div');
				iDiv.id = "sidebar_footer" + __mod_cur;
				iDiv.className = "sidebar_footer";
				document.getElementById('module_pool').appendChild(iDiv);
			}
		
			//document.getElementById("navigation_frame").data = _iframe_page;
		</script>
