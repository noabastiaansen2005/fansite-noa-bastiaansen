let welkomknop = document.querySelector("#welkomknop");

let mijndivs = document.querySelector(".mijndivs");

let raden = document.querySelector("#raden");
let mydog = document.querySelector('#mijndiv3');

let leeftijd = document.querySelector('#leeftijd');

function anderekleur() {
    mijndivs.innerHTML = "<center><h1>Woef woef!</h1></center>";
    mijndivs.style.backgroundColor = "tomato";
}

function plaatjeveranderen() {
    if(leeftijd.value > 10){
        mydog.innerHTML = "<h1>JIPPIE!</h1>";
        mydog.style.backgroundImage = "URL('img/happy dog.jpg')";
    } else {
        mydog.innerHTML = "<h1>Neee!! fout</h1>";
        mydog.style.backgroundImage = "URL('img/saddog.jpg')";
    }
}

welkomknop.addEventListener("click", anderekleur);


raden.addEventListener("click", plaatjeveranderen );







