// Foot
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
// CM
function cmToFoot(valNum) {
    document.getElementById("outputCMToFoot").innerHTML = valNum * 30.48;
}
function cmToMeters(valNum) {
    document.getElementById("outputCMToMeters").innerHTML = valNum / 100;
}
function cmToInches(valNum) {
    document.getElementById("outputCMToInches").innerHTML = valNum / 2.54;
}
function cmToYards(valNum) {
    document.getElementById("outputCMToYards").innerHTML = valNum / 91.44;
}
function cmToKiloMeters(valNum) {
    document.getElementById("outputCMToKiloMeters").innerHTML = valNum / 100000;
}
function cmToMiles(valNum) {
    document.getElementById("outputCMToMiles").innerHTML = valNum / 160934;
}
// Meter
function mToCentiMeters(valNum) {
    document.getElementById("outputMToCentiMeters").innerHTML = valNum * 100;
}
function mToFoot(valNum) {
    document.getElementById("outputMToFoot").innerHTML = valNum * 3.281;
}
function mToInches(valNum) {
    document.getElementById("outputMToInches").innerHTML = valNum * 39.37;
}
function mToYards(valNum) {
    document.getElementById("outputMToYards").innerHTML = valNum * 1.094;
}
function mToKiloMeters(valNum) {
    document.getElementById("outputMToKiloMeters").innerHTML = valNum / 1000;
}
function mToMiles(valNum) {
    document.getElementById("outputMToMiles").innerHTML = valNum / 1609;
}
// Inches
function iToCentiMeters(valNum) {
    document.getElementById("outputIToCentiMeters").innerHTML = valNum * 2.54;
}
function iToMeters(valNum) {
    document.getElementById("outputIToMeters").innerHTML = valNum / 39.37;
}
function iToFoot(valNum) {
    document.getElementById("outputIToFoot").innerHTML = valNum / 12;
}
function iToYards(valNum) {
    document.getElementById("outputIToYards").innerHTML = valNum / 36;
}
function iToKiloMeters(valNum) {
    document.getElementById("outputIToKiloMeters").innerHTML = valNum / 39370;
}
function iToMiles(valNum) {
    document.getElementById("outputIToMiles").innerHTML = valNum / 63360;
}
// Yards
function yToCentiMeters(valNum) {
    document.getElementById("outputYToCentiMeters").innerHTML = valNum * 91.44;
}
function yToMeters(valNum) {
    document.getElementById("outputYToMeters").innerHTML = valNum / 1.094;
}
function yToInches(valNum) {
    document.getElementById("outputYToInches").innerHTML = valNum * 36;
}
function yToFoot(valNum) {
    document.getElementById("outputYToFoot").innerHTML = valNum * 3;
}
function yToKiloMeters(valNum) {
    document.getElementById("outputYToKiloMeters").innerHTML = valNum / 1094;
}
function yToMiles(valNum) {
    document.getElementById("outputYToMiles").innerHTML = valNum / 1760;
}
// KiloMeters
function kmToCentiMeters(valNum) {
    document.getElementById("outputKMToCentiMeters").innerHTML = valNum * 100000;
}
function kmToMeters(valNum) {
    document.getElementById("outputKMToMeters").innerHTML = valNum * 1000;
}
function kmToInches(valNum) {
    document.getElementById("outputKMToInches").innerHTML = valNum * 39370;
}
function kmToYards(valNum) {
    document.getElementById("outputKMToYards").innerHTML = valNum * 1094;
}
function kmToFoot(valNum) {
    document.getElementById("outputKMToFoot").innerHTML = valNum * 3281;
}
function kmToMiles(valNum) {
    document.getElementById("outputKMToMiles").innerHTML = valNum * 1.609;
}
// Miles
function mileToCentiMeters(valNum) {
    document.getElementById("outputMileToCentiMeters").innerHTML = valNum * 160934;
}
function mileToMeters(valNum) {
    document.getElementById("outputMileToMeters").innerHTML = valNum * 1609;
}
function mileToInches(valNum) {
    document.getElementById("outputMileToInches").innerHTML = valNum * 63360;
}
function mileToYards(valNum) {
    document.getElementById("outputMileToYards").innerHTML = valNum * 1760;
}
function mileToKiloMeters(valNum) {
    document.getElementById("outputMileToKiloMeters").innerHTML = valNum * 1.609;
}
function mileToFoot(valNum) {
    document.getElementById("outputMileToFoot").innerHTML = valNum * 5280;
}
//

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})
