/*----------------------------------------*/
/*   DERPG XYZ LANGUAGE DATABASE FILE     */
/*----------------------------------------*/

//This file contains data on what languages are available on DERPG's site.
//It also contains the text data for each and every entry translatable on the site.
//Everything is powered by Javascript.

flag_plat_name = new Array();
flag_plat_code = new Array();
flag_plat_imag = new Array();
flag_plat_avai = new Array();
plat_count = 0;

function add_platform(platform, url, image_url, available) {
	flag_plat_name[plat_count  ] = platform;
	flag_plat_code[plat_count  ] = url;
	flag_plat_imag[plat_count  ] = image_url;
	flag_plat_avai[plat_count++] = available;
}

//Add in Languages
add_platform("Desktop", "desktop", "images/platforms/PC.png", true);
add_platform("Mobile", "mobile", "images/platforms/MOBILE.png", false);

// end hiding script from old browsers -->
