let garment;
let finalChoice;
let finalSkillChoice;
let skillLevel;


let cart = [] 
let patterns = ["Lavanda cardigan", "Moon vest", "Guacamole vest", "Bicolor vest", "Viena vest", "Tucci sweater"];



const skillElegida = [
    {nombre: "Lavanda cardigan", skill: "beginner"},
    {nombre: "Moon vest", skill: "beginner"},
    {nombre: "Guacamole vest", skill: "intermediate"},
    {nombre: "Bicolor vest", skill: "intermediate"},
    {nombre: "Viena vest", skill: "advanced"},
    {nombre: "Tucci sweater", skill: "advanced"}
];

const begPatterns = skillElegida.filter(x => x.skill == "beginner")
const intPatterns = skillElegida.filter(x => x.skill == "intermediate")
const advPatterns = skillElegida.filter(x => x.skill == "advanced")




function choice(){
    let skChoice = "";
    let skillChoice = "";
    let elegido = "";

    skillChoice = prompt(`What skill level patterns are you looking for: \n Beginner \n Intermediate \n Advanced \n ${skChoice}`);

    switch (skillChoice) {
        case "Beginner":
            elegido = prompt(`These are the patterns available for the skill selected \n ${begPatterns[0].nombre}  \n ${begPatterns[1].nombre}`)
            break;
        case "Intermediate":
            elegido =  prompt(`These are the patterns available for the skill selected \n ${intPatterns[0].nombre} \n ${intPatterns[1].nombre}`)
            break;
        case "Advanced":
            elegido =  prompt(`These are the patterns available for the skill selected \n ${advPatterns[0].nombre} \n ${advPatterns[1].nombre}`)
            break;
    }

    finalChoice = prompt(`You applied for: ${elegido} it's that correct? \n 1: Yes \n 2: No`);
    
    if (finalChoice === "1"){
        
        if (skillElegida.some(x => x.nombre == elegido)){
            cart.push(elegido);
            alert(`${elegido} was added to your cart.`);
            anotherOne();
    
        } else {
            alert("The pattern does not exist")

            chooseAgain();
        }

    } else {
            alert("We're sorry to see you go")
    } 

}








function chooseAgain(secondChoice){
    secondChoice = prompt(`Here you have SOME MORE patterns you can apply for: ${patterns}`);
    secondFinalChoice = prompt(`You chose to apply for ${secondChoice} it's that correct? \n 1: Yes \n 2: No`);

    if (secondFinalChoice === "1"){
        choosenPattern = patterns.includes(secondChoice);

        if (choosenPattern === true){
            cart.push(secondChoice);
            alert(`${secondChoice} was added to your cart.`);
            alert(`Your cart: \n  ${cart}`);
        } else {
            alert("The pattern does not exist")
            chooseAgain();
        }

    } else {
        chooseAgain();
    }

}


function anotherOne(){
    another = prompt("Do you want to apply for another pattern?  \n 1: Yes \n 2: No");

    if (another === "1"){
        chooseAgain();
    } else {
        alert(`Your cart: \n  ${cart}`);
    }
}



choice();