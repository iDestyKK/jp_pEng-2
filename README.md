# jp_pEng 2
Hello! This is a rewrite of my Japanese Vocabulary Quizzing Engine known as "jp_pEng". It can be accessed on http://jppeng.derpg.xyz/beta/desktop/index.php.

<h3>What is the goal?</h3>
The goal of the project is to offer online access to people who work with the books "げんき１" and "げんき２" by The Japan Times. The site takes the vocabulary and kanji from the book and offers quizzes to the users. Users can generate worksheets to print off or work digitally and get graded instantly. There is a chart for ひらがな and カタカナ if needed for beginners. And if you are a developer who feels like command line is the way to go, it even has that (barely)!

<h3>What is this rewrite for?</h3>
I self-studied on PHP and MySQL (like a lot of other things) over the past month or so and have found that it is better to write this site in PHP rather than HTML paired with Javascript. In the first version, opening the Dictionary requested over 50+ JS files to be requested and executed! That's a lot whenever I could simply just look something up in a MySQL Table.

<h3>What features are there?</h3>
Well... not all of the features from jp_pEng are imported yet. The following are in now:
<ul>
  <li>Vocabulary straight from the げんき１ and げんき２ Textbooks</li>
  <li>Conjugations for all vocabulary words, generated via PHP.</li>
</ul>
Expect these in Version 0.1.0 :)
<ul>
  <li>Worksheet/Quiz Generators.</li>
  <li>Kana charts.</li>
  <li>Kanji charts, information, and links to possible words which contain the kanji.</li>
</ul>
