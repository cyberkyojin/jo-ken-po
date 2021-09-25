const bot = Math.floor(Math.random() * 3);

let player = null;

jokenpo = ["Rock", "Paper", "Scissors"];

function jo_ken_po(choice) {
	if (choice >= 3 || choice < 0) {
		console.log("invalid option");
	} else if (choice == 0) {
		if (bot == 0) {
			console.log("TIE");
		} else if (bot == 1) {
			console.log("BOT WIN!");
		} else if (bot == 2) {
			console.log("PLAYER WIN!");
		}
	} else if (choice == 1) {
		if (bot == 0) {
			console.log("PLAYER WIN!");
		} else if (bot == 1) {
			console.log("TIE");
		} else if (bot == 2) {
			console.log("BOT WIN!");
		}
	} else if (choice == 2) {
		if (bot == 0) {
			console.log("BOT WIN!");
		} else if (bot == 1) {
			console.log("PLAYER WIN!");
		} else if (bot == 2) {
			console.log("TIE");
		}
	}
	player = choice;
}

jo_ken_po(2);
console.log(`bot chose ${jokenpo[bot]};`);
console.log(`player chose ${jokenpo[player]};`);
