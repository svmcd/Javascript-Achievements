
function toonDatum(){
    let datum = new Date();
    var dag = document.getElementById("dag")
    var maand = document.getElementById("maand")
    var jaar = document.getElementById("jaar")  
    dag.innerHTML = datum.getDate();
    maand.innerHTML = datum.getMonth() +1;
    jaar.innerHTML = datum.getFullYear();
}

window.addEventListener('DOMContentLoaded', toonDatum);

