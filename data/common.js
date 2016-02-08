/*----------------------------*/
/*   JP_PENG COMMON JS FILE   */
/*----------------------------*/

//This file contains scripts which are used on a majority of the pages in jp_pEng.
//As always, everything is powered by Javascript. :)

//Get URL arguments/variables
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function getCurrentLesson(module) {
	//Returns current lesson
	return parseInt(module.substr(module.indexOf("l") + 1, module.indexOf("s") - module.indexOf("l"))) - 1;
}

function getCurrentSection(module) {
	//Returns current section
	return parseInt(module.substr(module.indexOf("s") + 1)) - 1;
}

function getCurrentType(module) {
	//Returns current type of lesson
	if (undefined !== module) {
		for (var i = module.length - 1; i > 0; i--)
			if (isNaN(module[i]))
				return module[i];
	} else {
		return -1;
	}
}

function getCurrentTypePos(module) {
	//Returns current type of lesson
	for (var i = module.length - 1; i > 0; i--)
		if (isNaN(module[i]))
			return i;
}

function getCurrentVocab(module) {
	var pos = getCurrentTypePos(module) + 1;
	return module.substr(pos);
}
