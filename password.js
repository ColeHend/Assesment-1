const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Welcome to the password validator tool.");
function isUpper(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
}
var hasNumber = /\d/; 
var hasSpecial = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
reader.question("Please enter a password to validate: ", function (input) {
  if (input.length >= 10 && input.length < 25 && isUpper(input) && hasNumber.test(input) && hasSpecial.test(input)) {
    console.log(
      "Success",
      `

        _____.___.                                                                _____     .__  .__                        .__  .__    .___       __             .___._.
        \__  |   | ____  __ __    ________ __   ____  ____  ____   ______ _______/ ____\_ __|  | |  | ___.__.  ___  _______  |  | |__| __| _/____ _/  |_  ____   __| _/| |
         /   |   |/  _ \|  |  \  /  ___/  |  \_/ ___\/ ___\/ __ \ /  ___//  ___/\   __\  |  \  | |  |<   |  |  \  \/ /\__  \ |  | |  |/ __ |\__  \\   __\/ __ \ / __ | | |
         \____   (  <_> )  |  /  \___ \|  |  /\  \__\  \__\  ___/ \___ \ \___ \  |  | |  |  /  |_|  |_\___  |   \   /  / __ \|  |_|  / /_/ | / __ \|  | \  ___// /_/ |  \|
         / ______|\____/|____/  /____  >____/  \___  >___  >___  >____  >____  > |__| |____/|____/____/ ____|    \_/  (____  /____/__\____ |(____  /__|  \___  >____ |  __
         \/                          \/            \/    \/    \/     \/     \/                       \/                  \/             \/     \/          \/     \/  \/
        
        `
    );
  } else {
    console.log(
      "Failed",
      `
_____.___.                  _____       .__.__             .___    __                          .__  .__    .___       __        ._.
\__  |   | ____  __ __    _/ ____\____  |__|  |   ____   __| _/  _/  |_  ____    ___  _______  |  | |__| __| _/____ _/  |_  ____| |
 /   |   |/  _ \|  |  \   \   __\\__  \ |  |  | _/ __ \ / __ |   \   __\/  _ \   \  \/ /\__  \ |  | |  |/ __ |\__  \\   __\/ __ \ |
 \____   (  <_> )  |  /    |  |   / __ \|  |  |_\  ___// /_/ |    |  | (  <_> )   \   /  / __ \|  |_|  / /_/ | / __ \|  | \  ___/\|
 / ______|\____/|____/     |__|  (____  /__|____/\___  >____ |    |__|  \____/     \_/  (____  /____/__\____ |(____  /__|  \___  >_
 \/                                   \/             \/     \/                               \/             \/     \/          \/\/
`
    );
  }
  reader.close();
});
