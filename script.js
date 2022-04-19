function fToCentiMeters(valNum) {
    document.getElementById("outputCentiMeters").innerHTML = valNum * 30.48;
}
function fToMeters(valNum) {
    document.getElementById("outputMeters").innerHTML = valNum / 3.2808;
}
function fToInches(valNum) {
    document.getElementById("outputInches").innerHTML = valNum * 12;
}
function fToYards(valNum) {
    document.getElementById("outputYards").innerHTML = valNum * 0.33333;
}
function fToKiloMeters(valNum) {
    document.getElementById("outputKiloMeters").innerHTML = valNum / 3280.8;
}
function fToMiles(valNum) {
    document.getElementById("outputMiles").innerHTML = valNum * 0.00018939;
} 
