//Message Box API...
//Well kind of. I made it in like 5 minutes lol.

function gen_msgBox(title, message, button_text, button_js) {
	var hstr = "";
	
	//Generate the Box Code
	hstr = "<div id = \"msg_bg\"><div id = \"msg\">" + message + "</div><center><div id = \"msg_button\">"
	if (button_js == "_close" || button_js == "") { //Well if it is a secret command, we will automate the damn box closing. :)
		hstr += "<div id = \"msg_button_vertical_fix\" onclick = \"closeAllMsgBox();\">" + button_text + "</div>";
	}
	hstr += "</div></center></div>";
	
	document.body.innerHTML += hstr;
}

function gen_msgBox_noBtn(title, message) {
	var hstr = "";
	
	//Generate the Box Code
	hstr = "<div id = \"msg_bg\"><div id = \"msg\">" + message + "</div><center><div id = \"msg_button\">";
	hstr += "</div></center></div>";
	
	document.body.innerHTML += hstr;
}

function closeAllMsgBox() {
	var div = document.getElementById('msg_bg');
	if (div) {
		div.parentNode.removeChild(div);
	}
}

function autogen() {
	gen_msgBox('Attention', 'This is a test message...', 'Okay, got it.', '_close');
}

function showMsgBox_GameUnavailable(game_name) {
	gen_msgBox('Attention', text_data[language]['game_list_nopage_exists'].replace("%0", game_name), text_data[language]['ok'], '_close');
}

function showMsgBox_PlatformUnavailable(platform_name) {
	var __str = "Unfortunately, the platform \"%0\" is currently unavailable.</br>Feel free to run jp_pEng in another mode.";
	gen_msgBox('Attention', __str.replace("%0", platform_name), "OK", '_close');
}