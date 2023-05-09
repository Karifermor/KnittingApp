function patterns(){
    garment = prompt("What type of project do you want to test? \n 1: Sweaters \n 2: Cardigans \n 3: Cancel");
    season = prompt("Choose a season: \n 1: Fall/Winter \n 2: Spring/Summer \n 3: Cancel");
  

    if(garment === "1" && season === "1"){
        alert("You choose Fall/Winter sweaters tap Continue to see test calls for amazing patterns")
  }else if (garment === "1" && season === "2"){
        alert("You choose Spring/Summer sweaters tap Continue to see test calls for amazing patterns")
  }else if (garment === "2" && season === "1"){
    alert("You choose Fall/Winter cardigans tap Continue to see test calls for amazing patterns")
  }else if (garment === "2" && season === "2"){
    alert("You choose Spring/Summer cardigans tap Continue to see test calls for amazing patterns")
} else if (garment === "3" || season === "3"){
    alert("We are sad to see you go")
}

if (garment !== "3" && season !== "3") {
    let entrada = "";

    finalChoice = prompt("Here you have some patterns that matches your research: \n 1: Test call for Guacamole knitting pattern \n 2: Test call for Lavanda knitting pattern \n 3: Test call for the Bicolor knitting pattern \n 4: Test call for the Tucci knitting pattern \n \n Choose one");
    
      while (entrada === '') {
        switch (finalChoice) {
            case "1":
                alert("Amazing choice, tap OK to apply for the Guacamole knitting pattern test call ")
                break;
            case "2":
                alert("Amazing choice, tap OK to apply for the Lavanda knitting pattern test call")
                break;
            case "3":
                alert("Amazing choice, tap OK to apply for the Bicolor knitting pattern test call")
                break;
            case "4":
                alert("Amazing choice, tap OK to apply for the Tucci knitting pattern test call")
                break;
            default:
                alert("No results")
                break;
        }
        entrada = finalChoice;
      }
}

}


let grament;
let season;
let finalChoice;


patterns();