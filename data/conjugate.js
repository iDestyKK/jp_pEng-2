/*---------------------------------*/
/*   JP_PENG CONJUGATION JS FILE   */
/*---------------------------------*/

//This file contains scripts which are used for conjugation.
//As always, everything is powered by Javascript. :)

//Declare array. These conjugation names are used later.
conjugate_name = [
	//名詞、　形容動詞、　形容詞、　いい-アジェクティブ
	[
		[
			"Polite Present",
			"Polite Past",
			"Short Present",
			"Short Past"
		],
		[
			"Original",
			"To Become"
		]
	],
	
	//う動詞、　る動詞、　くる-例外動詞、　する-例外動詞
	[
		[
			"Polite Present",
			"Polite Past",
			"Short Present",
			"Short Past"
		], 
		[
			"Original",
			"Polite Volitional",
			"Short Volitional",
			"Stem",
			"Te Form",
			"Potential",
			"Intention",
			"Hope/Want to do... (Tai Form)",
			"Have the experience of...",
			"Explanation",
			"Too Much/Excess",
			"Must"
		]
	],
];

function getTango(lesson, section, id) {
	return vocabulary[lesson]["sections"][section]["tango"][id];
}

function getConjugationCount(type) {
	if (type == "名詞" || type == "形容動詞" || type == "形容詞" || type == "いい-アジェクティブ")
		return conjugate_name[0].length;
	if (type == "う動詞" || type == "る動詞" || type == "くる-例外動詞" || type == "する-例外動詞")
		return conjugate_name[1].length;
}

function getConjugateName(a, i, type) {
	if (type == "名詞" || type == "形容動詞" || type == "形容詞" || type == "いい-アジェクティブ") {
		return conjugate_name[0][a][i];
	}
	
	if (type == "う動詞" || type == "る動詞" || type == "くる-例外動詞" || type == "する-例外動詞") {
		return conjugate_name[1][a][i];
	}
}

function genTeForm(tango) {
	var tmp;
	if (tango[0] == "")
		tmp = tango[1];
	else
		tmp = tango[0];
	
	if (tango[5] == "う動詞") {
		var last_char = tmp.substr(tmp.length - 1, 1);
		if (last_char == "う" || last_char == "つ" || last_char == "る" || tango[0] == "行く" || tango[1] == "いく")
			return tmp.substr(0, tmp.length - 1) + "って";
			
		if (last_char == "む" || last_char == "ぶ" || last_char == "ぬ")
			return tmp.substr(0, tmp.length - 1) + "んで";
			
		if (last_char == "く")
			return tmp.substr(0, tmp.length - 1) + "いて";
			
		if (last_char == "ぐ")
			return tmp.substr(0, tmp.length - 1) + "いで";
			
		if (last_char == "す")
			return tmp.substr(0, tmp.length - 1) + "して";
	}
	
	if (tango[5] == "る動詞") {
		return tmp.substr(0, tmp.length - 1) + "て";
	}
	
	if (tango[5] == "くる-例外動詞") {
		return tmp.substr(0, tmp.length - 2) + "きて";
	}
	
	if (tango[5] == "する-例外動詞") {
		return tmp.substr(0, tmp.length - 2) + "して";
	}
}

function genTaForm(tango) {
	var tmp;
	if (tango[0] == "")
		tmp = tango[1];
	else
		tmp = tango[0];
	
	if (tango[5] == "う動詞") {
		var last_char = tmp.substr(tmp.length - 1, 1);
		if (last_char == "う" || last_char == "つ" || last_char == "る" || tango[0] == "行く" || tango[1] == "いく")
			return tmp.substr(0, tmp.length - 1) + "った";
			
		if (last_char == "む" || last_char == "ぶ" || last_char == "ぬ")
			return tmp.substr(0, tmp.length - 1) + "んだ";
			
		if (last_char == "く")
			return tmp.substr(0, tmp.length - 1) + "いた";
			
		if (last_char == "ぐ")
			return tmp.substr(0, tmp.length - 1) + "いだ";
			
		if (last_char == "す")
			return tmp.substr(0, tmp.length - 1) + "した";
	}
	
	if (tango[5] == "る動詞") {
		return tmp.substr(0, tmp.length - 1) + "た";
	}
	
	if (tango[5] == "くる-例外動詞") {
		return tmp.substr(0, tmp.length - 2) + "きた";
	}
	
	if (tango[5] == "する-例外動詞") {
		return tmp.substr(0, tmp.length - 2) + "した";
	}
}

function shiftKanaToVowel(kana_char, amount) {
	//Forces a Kana to shift vowels.
	//0 - あ
	//1 - い
	//2 - う
	//3 - え
	//4 - お
	
	var kana = [ "あ", "い", "う", "え", "お", 
				 "か", "き", "く", "け", "こ", 
				 "さ", "し", "す", "せ", "そ", 
				 "た", "ち", "つ", "て", "と", 
				 "な", "に", "ぬ", "ね", "の", 
				 "は", "ひ", "ふ", "へ", "ほ", 
				 "ま", "み", "む", "め", "も", 
				 "や", "", "ゆ", "", "よ", 
				 "ら", "り", "る", "れ", "ろ", 
				 "わ", "", "", "", "を", 
				 "ん", "", "", "", "",
				 "が", "ぎ", "ぐ", "げ", "ご" ,
				 "ざ", "じ", "ず", "ぜ", "ぞ" ,
				 "だ", "じ", "づ", "で", "ど" ,
				 "ば", "び", "ぶ", "べ", "ぼ" ,
				 "ぱ", "ぴ", "ぷ", "ぺ", "ぽ" ,
				 "", "", "ゔ", "", "" ,
				 "ア", "イ", "ウ", "エ", "オ", 
				 "カ", "キ", "ク", "ケ", "コ", 
				 "サ", "シ", "ス", "セ", "ソ", 
				 "タ", "チ", "ツ", "テ", "ト", 
				 "ナ", "ニ", "ヌ", "ネ", "ノ", 
				 "ハ", "ヒ", "フ", "ヘ", "ホ", 
				 "マ", "ミ", "ム", "メ", "モ", 
				 "ヤ", "", "ユ", "", "ヨ", 
				 "ラ", "リ", "ル", "レ", "ロ", 
				 "ワ", "", "", "", "ヲ", 
				 "ン", "", "", "", "",
				 "ガ", "ギ", "グ", "ゲ", "ゴ" ,
				 "ザ", "ジ", "ズ", "ゼ", "ゾ" ,
				 "ダ", "ヂ", "ヅ", "デ", "ド" ,
				 "バ", "ビ", "ブ", "ベ", "ボ" ,
				 "パ", "ピ", "プ", "ペ", "ポ" ,
				 "", "", "ヴ", "", "" ];
				 
	for (var i = 0; i < kana.length; i++) {
		if (kana_char == kana[i]) {
			return kana[(Math.floor(i / 5) * 5) + amount];
		}
	}
	return kana_char;
}

function conjugate(tango, i) {
	var tmp;
	if (tango[0] == "")
		tmp = tango[1];
	else
		tmp = tango[0];
	
	if (tango[5] == "名詞" || tango[5] == "形容動詞") {
		//名詞と形容動詞の共軛が同です。
		switch (i) {
			case 1: return tmp + "です";
			case 2: return tmp + "でした";
			case 3: return tmp + "じゃないです";
			case 4: return tmp + "じゃなかったです";
			case 5: return tmp + "だ";
			case 6: return tmp + "だった";
			case 7: return tmp + "じゃない";
			case 8: return tmp + "じゃなかった";
			case 9: return tmp + "になる";
		}
	}
	
	if (tango[5] == "いい-アジェクティブ") {
		switch (i) {
			case 1: return tmp.substr(0, tmp.length - 2) + "いいです";
			case 2: return tmp.substr(0, tmp.length - 2) + "よかったです";
			case 3: return tmp.substr(0, tmp.length - 2) + "よくないです";
			case 4: return tmp.substr(0, tmp.length - 2) + "よくなかったです";
			case 5: return tmp.substr(0, tmp.length - 2) + "いい";
			case 6: return tmp.substr(0, tmp.length - 2) + "よかった";
			case 7: return tmp.substr(0, tmp.length - 2) + "よくない";
			case 8: return tmp.substr(0, tmp.length - 2) + "よくなかった";
			case 9: return tmp + "になる";
		}
	}
	
	if (tango[5] == "形容詞") {
		switch (i) {
			case 1: return tmp.substr(0, tmp.length - 1) + "いです";
			case 2: return tmp.substr(0, tmp.length - 1) + "かったです";
			case 3: return tmp.substr(0, tmp.length - 1) + "くないです";
			case 4: return tmp.substr(0, tmp.length - 1) + "くなかったです";
			case 5: return tmp;
			case 6: return tmp.substr(0, tmp.length - 1) + "かった";
			case 7: return tmp.substr(0, tmp.length - 1) + "くない";
			case 8: return tmp.substr(0, tmp.length - 1) + "くなかった";
			case 9: return tmp.substr(0, tmp.length - 1) + "くなる";
		}
	}
	
	if (tango[5] == "う動詞") {
		switch (i) {
			case  1: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ます";
			case  2: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ました";
			case  3: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ません";
			case  4: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ませんでした";
			case  5: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ましょう";
			case  6: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1);
			case  7: return genTeForm(tango);
			case  8: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 3) + "る";
			case  9: return tmp;
			case 10: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 0) + "ない";
			case 11: return genTaForm(tango);
			case 12: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 0) + "なかった";
			case 13: return tmp + "つもり";
			case 14: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "たい";
			case 14: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "たい";
			case 15: return genTaForm(tango) + "ことがある";
		}
	}
	
	if (tango[5] == "る動詞") {
		switch (i) {
			case  1: return tmp.substr(0, tmp.length - 1) + "ます";
			case  2: return tmp.substr(0, tmp.length - 1) + "ました";
			case  3: return tmp.substr(0, tmp.length - 1) + "ません";
			case  4: return tmp.substr(0, tmp.length - 1) + "ませんでした";
			case  5: return tmp.substr(0, tmp.length - 1) + "ましょう";
			case  6: return tmp.substr(0, tmp.length - 1);
			case  7: return genTeForm(tango);
			case  8: return tmp.substr(0, tmp.length - 1) + "られる";
			case  9: return tmp;
			case 10: return tmp.substr(0, tmp.length - 1) + "ない";
			case 11: return genTaForm(tango);
			case 12: return tmp.substr(0, tmp.length - 1) + "なかった";
			case 13: return tmp + "つもり";
			case 14: return tmp.substr(0, tmp.length - 1) + "たい";
			case 15: return genTaForm(tango) + "ことがある";
		}
	}
	
	if (tango[5] == "くる-例外動詞") {
		switch (i) {
			case  1: return tmp.substr(0, tmp.length - 2) + "きます";
			case  2: return tmp.substr(0, tmp.length - 2) + "きました";
			case  3: return tmp.substr(0, tmp.length - 2) + "きません";
			case  4: return tmp.substr(0, tmp.length - 2) + "きませんでした";
			case  5: return tmp.substr(0, tmp.length - 2) + "きましょう";
			case  6: return tmp.substr(0, tmp.length - 2);
			case  7: return genTeForm(tango);
			case  8: return tmp.substr(0, tmp.length - 2) + "こられる";
			case  9: return tmp;
			case 10: return tmp.substr(0, tmp.length - 2) + "こない";
			case 11: return genTaForm(tango);
			case 12: return tmp.substr(0, tmp.length - 2) + "こなかった";
			case 13: return tmp + "つもり";
			case 14: return tmp.substr(0, tmp.length - 2) + "きたい";
			case 15: return genTaForm(tango) + "ことがある";
		}
	}
	
	if (tango[5] == "する-例外動詞") {
		switch (i) {
			case  1: return tmp.substr(0, tmp.length - 2) + "します";
			case  2: return tmp.substr(0, tmp.length - 2) + "しました";
			case  3: return tmp.substr(0, tmp.length - 2) + "しません";
			case  4: return tmp.substr(0, tmp.length - 2) + "しませんでした";
			case  5: return tmp.substr(0, tmp.length - 2) + "しましょう";
			case  6: return tmp.substr(0, tmp.length - 2);
			case  7: return genTeForm(tango);
			case  8: return tmp.substr(0, tmp.length - 2) + "できる";
			case  9: return tmp;
			case 10: return tmp.substr(0, tmp.length - 2) + "しない";
			case 11: return genTaForm(tango);
			case 12: return tmp.substr(0, tmp.length - 2) + "しなかった";
			case 13: return tmp + "つもり";
			case 14: return tmp.substr(0, tmp.length - 2) + "したい";
			case 15: return genTaForm(tango) + "ことがある";
		}
	}
	
	return tmp;
}

function data2Tango(data) {
	var tango = [ data.kanji, data.kana, data.romaji, data.eigo, data.hint, data.type ];
	return tango;
}

function getConjugationTable(tango) {
	var type = tango[5]; //Get type;
	var word;
	if (tango[0] == "")
		word = tango[1];
	else
		word = tango[0];
	
	switch (type) {
		//Use fall-through to simulate or-gates.
		case "名詞":
		case "形容動詞":
			return [
				[
					[word + "です", word + "じゃないです"],
					[word + "でした", word + "じゃなかったです"],
					[word + "だ", word + "じゃない"],
					[word + "だった", word + "じゃなかった"]
				],
				[
					[word, ""],
					[word + "になる", ""]
				]
			];
			break;
		case "いい-アジェクティブ":
			var stem = word.substr(0, word.length - 2);
			return [
				[
					[stem + "いいです", stem + "よくないです"],
					[stem + "よかったです", stem + "よくなかったです"],
					[stem + "いい", stem + "よくない"],
					[stem + "よかった", stem + "よくなかった"]
				],
				[
					[word, ""],
					[word + "になる", ""]
				]
			];
			break;
		case "形容詞":
			var stem = word.substr(0, word.length - 1);
			return [
				[
					[stem + "いです", stem + "くないです"],
					[stem + "かったです", stem + "くなかったです"],
					[word, stem + "くない"],
					[stem + "かった", stem + "くなかった"]
				],
				[
					[word, ""],
					[stem + "くなる", ""]
				]
			];
			break;
		case "う動詞":
			var stem = word.substr(0, word.length - 1);
			var lkan = word.substr(word.length - 1, 1);
			var masu_stem = stem + shiftKanaToVowel(lkan, 1);
			var nai_stem = stem + shiftKanaToVowel(lkan, 0);
			var vol_stem = stem + shiftKanaToVowel(lkan, 4);
			if (nai_stem[nai_stem.length - 1] == "あ") {
				nai_stem = nai_stem.substr(0, nai_stem.length - 1) + "わ";
			}
			var potential_stem = stem + shiftKanaToVowel(lkan, 3);
			
			return [
				[
					[masu_stem + "ます", masu_stem + "ません"],
					[masu_stem + "ました", masu_stem + "ませんでした"],
					[word, nai_stem + "ない"],
					[genTaForm(tango), nai_stem + "なかった"]
				],
				[
					[word, ""],
					[masu_stem + "ましょう", ""],
					[vol_stem + "う", ""],
					[masu_stem, ""],
					[genTeForm(tango), ""],
					[potential_stem + "る", ""],
					[word + "つもり", ""],
					[masu_stem + "たい", ""],
					[genTaForm(tango) + "ことがある", ""],
					[word + "んです", ""],
					[masu_stem + "すぎる", ""],
					[nai_stem + "なければいけません", ""]
				]
			];
			break;
		case "る動詞":
			var stem = word.substr(0, word.length - 1);
			return [
				[
					[stem + "ます", stem + "ません"],
					[stem + "ました", stem + "ませんでした"],
					[word, stem + "ない"],
					[genTaForm(tango), stem + "なかった"]
				],
				[
					[word, ""],
					[stem + "ましょう", ""],
					[stem + "よう", ""],
					[stem, ""],
					[genTeForm(tango), ""],
					[stem + "られる", ""],
					[word + "つもり", ""],
					[stem + "たい", ""],
					[genTaForm(tango) + "ことがある", ""],
					[word + "んです", ""],
					[stem + "すぎる", ""],
					[stem + "なければいけません", ""]
				]
			];
			break;
		case "くる-例外動詞":
			var stem = word.substr(0, word.length - 2);
			return [
				[
					[stem + "きます", stem + "きません"],
					[stem + "きました", stem + "きませんでした"],
					[word, stem + "こない"],
					[genTaForm(tango), stem + "こなかった"]
				],
				[
					[word, ""],
					[stem + "きましょう", ""],
					[nai_stem + "う", ""],
					[stem + "こよう", ""],
					[genTeForm(tango), ""],
					[stem + "こられる", ""],
					[word + "つもり", ""],
					[stem + "きたい", ""],
					[genTaForm(tango) + "ことがある", ""],
					[word + "んです", ""],
					["不明？", ""],
					[stem + "きなければいけません", ""]
				]
			];
			break;
		case "する-例外動詞":
			var stem = word.substr(0, word.length - 2);
			return [
				[
					[stem + "します", stem + "しません"],
					[stem + "しました", stem + "しませんでした"],
					[word, stem + "しない"],
					[genTaForm(tango), stem + "しなかった"]
				],
				[
					[word, ""],
					[stem + "しましょう", ""],
					[stem + "しよう", ""],
					[stem, ""],
					[genTeForm(tango), ""],
					[stem + "出来る", ""],
					[word + "つもり", ""],
					[stem + "したい", ""],
					[genTaForm(tango) + "ことがある", ""],
					[word + "んです", ""],
					[stem + "しすぎる", ""],
					[stem + "しなければいけません", ""]
				]
			];
			break;
	}
}
