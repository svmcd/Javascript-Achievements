
let datum = new Date();

function toonDatum(){
    var dag = document.getElementById("dag")
    var maand = document.getElementById("maand")
    var jaar = document.getElementById("jaar")  
    dag.innerHTML = datum.getDay();
    maand.innerHTML = datum.getMonth();
    jaar.innerHTML = datum.getFullYear();
}

window.addEventListener('DOMContentLoaded', toonDatum);

