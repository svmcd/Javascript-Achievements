    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        myImage.src = "https://www.ma-web.nl/static/vector/Logo_blok.svg";
        myText.innerHTML = "......";
    })

    function main(){
        let dezeTextWordtHet = makeThisSentence();
        myText.innerHTML = dezeTextWordtHet;
        sayItLoud(dezeTextWordtHet); // say something nice say it loud
        selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
    let message = new SpeechSynthesisUtterance(textString);
    let voices = window.speechSynthesis.getVoices();
    message.voice = voices[32];
    message.pitch = 1.8; // range between 0 and 2
    message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
    window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Obama", "Pikachu", "Spongebob"];
    const werkwoord = ["needs", "fights", "has"];
    const restwoord = ["money", "Mark Zuckerberg", "corona"];

    let plaatjes = ["https://i.redd.it/vjsqzcs3rzy41.jpg", "https://pbs.twimg.com/media/EWeleLsXQAALz9g.png", "https://www.consumentenbond.nl/binaries/content/gallery/cbhippowebsite/landingspaginas/gidsen/geldgids/geldgids-uitgelicht/afbeeldingen/2020/corona.jpg"]
    let arrayLength = onderwerp.length;
