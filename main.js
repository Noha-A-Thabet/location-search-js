let info = location.search;
console.log(info);
let firstSplit = info.split("&");
console.log(firstSplit);
let secondSplit = firstSplit[0].split("=");
document.getElementById("welcome").innerHTML += ` ${(secondSplit[1]) + " For Register"}`;