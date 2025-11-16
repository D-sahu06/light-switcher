let toggle = document.getElementById("toggle");
let bulb = document.getElementById("bulb");

//check mode save
let mode = localStorage.getItem("mode") || "off";

// apply saved mode on reload
applyMode(mode);

//toggle on click
toggle.addEventListener("click", () => {

    mode = (mode==="off") ? "on" : "off";
    applyMode(mode);
    localStorage.setItem("mode", mode);
});

function applyMode(currentMode){
    if(currentMode==="on"){
        bulb.src = "bulb-on.png";
        document.body.style.backgroundColor="#fff8d6";
        toggle.textContent="Turn off";
        toggle.style.background="#ff9800";
        toggle.style.color="black";
        bulb.style.filter = "drop-shadow(0px 0px 30px yellow)";
    }
    else{
        bulb.src = "https://i.postimg.cc/6QyTynzr/bulb-off.png";
        document.body.style.backgroundColor = "#1a1a1a";
        toggle.textContent = "Turn On";
        toggle.style.background = "black";
        toggle.style.color = "white";
        bulb.style.filter = "none";
    }
}
