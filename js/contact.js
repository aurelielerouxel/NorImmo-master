let lastnameInput = document.getElementById("lastnameInput");
let firstnameInput = document.getElementById("firstnameInput");
let phoneNumber = document.getElementById("phoneNumberInput");
let messageInput = document.getElementById("userMessage");
let lettersLeft  = document.getElementById("lettersLeft");
let mainB = document.getElementsByTagName("main")[0];

let errorMessage = document.createElement("p");
errorMessage.style.backgroundColor = "red";

mainB.appendChild(errorMessage);

const BANWORDS = /\b(con|connard|sex|sexe)\b/g;
const PHONEREGEX = /^0[6,7]{1}[0-9]{8}/g;
const MESSAGEMAXLENGTH = 400;


// Test si il y a des nombres dans la chaine de caratère
function hasNumber (myString){
    return /\d/.test(myString);
}

function hasBanWord (myString){
    return BANWORDS.test(myString);
}


messageInput.addEventListener("keypress", function(){
    let currentMessageLength = MESSAGEMAXLENGTH - this.value.length - 1;
    console.log(`nombre de lettres dans le msg ${this.value.length}`);
    if (currentMessageLength < 400){
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
    lettersLeft.innerHTML = currentMessageLength + " caractères restant (max 400)";
});

function submit() {
    errorMessage.innerText = "";
    if (hasNumber(lastnameInput.value) || lastnameInput.value.length < 2 || lastnameInput.value.length > 50){
        lastnameInput.style.borderColor = "red";
        errorMessage.innerText += "veuillez renseigné un nom valide (2 à 50 lettres)\n";
    } else {
        lastnameInput.style.borderColor = "green";
    }
    if (hasNumber(firstnameInput.value) || firstnameInput.value.length < 2 || firstnameInput.value.length > 50){
        firstnameInput.style.borderColor = "red";
        errorMessage.innerText += "veuillez renseigné un prénom valide (2 à 50 lettres)\n";
    } else {
        firstnameInput.style.borderColor = "green";
    }

    if (!PHONEREGEX.test(phoneNumber.value)){
        phoneNumber.style.borderColor = "red";
        errorMessage.innerText += "veuillez renseigné un numéros de téléphone valide\n";
    } else {
        phoneNumber.style.borderColor = "green";
    }
    if(messageInput.value.length > MESSAGEMAXLENGTH){
        errorMessage.innerText += "Vous avez dépassé le nombre maximal de caratères autorisés\n";
    }
    if(hasBanWord(messageInput.value)){
        errorMessage.innerText += "Vous avez utilisé des mots interdit (sex, sexe, con, connard)\n";
    }
}

