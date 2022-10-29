const charactersOne = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersTwo = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

function getRandomCharacterOne() {
    let randomCharOne = Math.floor(Math.random() * charactersOne.length)
    return charactersOne[randomCharOne]
}

function getRandomCharacterTwo() {
    let randomCharTwo = Math.floor(Math.random() * charactersTwo.length)
    return charactersTwo[randomCharTwo]
}

function generateRandomPasswordOne() {
    let randomPasswordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += getRandomCharacterOne()         
    }
    return randomPasswordOne
}

function generateRandomPasswordTwo() {
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += getRandomCharacterTwo()         
    }
    return randomPasswordTwo
}

const generatedPasswordOne = generateRandomPasswordOne()
const generatedPasswordTwo = generateRandomPasswordTwo()

document.getElementById("rectangleOne").textContent = generatedPasswordOne
document.getElementById("rectangleTwo").textContent = generatedPasswordTwo