var page = [
	"Agatha and the Sad Letter 'A'",
	"Once upon a time there was a princess named Agatha.",
	"Princess Agatha was very small, but she liked to draw and draw. She drew on paper, and she drew on the sidewalk, and she drew everywhere they would let her.",
	"Her favorite place to draw was her easel because it was magic.",
	"Agatha liked to draw letters on her easel because they came to life. Agatha would play with her letters all day!",
	"She had to erase them  at bedtime--that was the rule.",
	"One day, when Agatha was already in her pajamas, she drew a beautiful letter A. Agatha did not want to erase the letter A.",
	"The A was very sad! Agatha said, No No, and she would not erase it.",
	"The A cried and cried. It wanted to go home!",
	"Agatha drew lots and lots of letters to keep her A company. They played together for days and days and had a big party!",
	"After a while, Agatha and the letters all talked and said it was time to go home. They climbed back up on the board, and she erased them.",
	"They all lived happily ever after, the end."
];

var index = 0;

function pageback() {
	if (index > 0) {
		index--;
	}
	else {
		index = 0;
	}
	document.getElementById("pagepic").src = "./images/page" + index + ".jpg";
	document.getElementById("content").innerHTML = page[index];
}

function pageforward () {
	if (index < (page.length - 1)) {
		index++;
	}
	else {
		index = (page.length - 1);
	}
	document.getElementById("pagepic").src = "./images/page" + index + ".jpg";
	document.getElementById("content").innerHTML = page[index];
}

