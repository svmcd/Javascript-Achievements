
i = document.getElementById("break.png")
p = document.getElementById("clock")

breakStart = new Date()
breakEnd = new Date()

e = setInterval(updateTime,1000)

function updateTime(){
    d = new Date()
        p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()

}
function breakNow(){
    i.src = ""

}
function endBreak(){
    i.src = ""
}