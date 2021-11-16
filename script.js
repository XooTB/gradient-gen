var body = document.getElementById('gradient');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var results = document.getElementById('result')

function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    results.textContent = body.style.background + ';';
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

