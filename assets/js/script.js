const barMon = document.querySelector(".mon-bar");
const barTue = document.querySelector(".tues-bar");
const barWed = document.querySelector(".wed-bar");
const barThur = document.querySelector(".thur-bar");
const barFri = document.querySelector(".fri-bar");
const barSat = document.querySelector(".sat-bar");
const barSun = document.querySelector(".sun-bar");

const dataMon = document.querySelector(".mon-data");
const dataTue = document.querySelector(".tues-data");
const dataWed = document.querySelector(".wed-data");
const dataThur = document.querySelector(".thur-data");
const dataFri = document.querySelector(".fri-data");
const dataSat = document.querySelector(".sat-data");
const dataSun = document.querySelector(".sun-data");

console.log(dataMon, barMon);

barMon.addEventListener("click", function () {
  dataMon.style.visibility = "visible";
  dataTue.style.visibility = "hidden";
  dataWed.style.visibility = "hidden";
  dataThur.style.visibility = "hidden";
  dataFri.style.visibility = "hidden";
  dataSat.style.visibility = "hidden";
  dataSun.style.visibility = "hidden";
});
barTue.addEventListener("click", function () {
  dataTue.style.visibility = "visible";
  dataMon.style.visibility = "hidden";
  dataWed.style.visibility = "hidden";
  dataThur.style.visibility = "hidden";
  dataFri.style.visibility = "hidden";
  dataSat.style.visibility = "hidden";
  dataSun.style.visibility = "hidden";
});
barWed.addEventListener("click", function () {
  dataWed.style.visibility = "visible";
  dataMon.style.visibility = "hidden";
  dataTue.style.visibility = "hidden";
  dataThur.style.visibility = "hidden";
  dataFri.style.visibility = "hidden";
  dataSat.style.visibility = "hidden";
  dataSun.style.visibility = "hidden";
});
barThur.addEventListener("click", function () {
  dataThur.style.visibility = "visible";
  dataMon.style.visibility = "hidden";
  dataTue.style.visibility = "hidden";
  dataWed.style.visibility = "hidden";
  dataFri.style.visibility = "hidden";
  dataSat.style.visibility = "hidden";
  dataSun.style.visibility = "hidden";
});
barFri.addEventListener("click", function () {
  dataFri.style.visibility = "visible";
  dataMon.style.visibility = "hidden";
  dataTue.style.visibility = "hidden";
  dataWed.style.visibility = "hidden";
  dataThur.style.visibility = "hidden";
  dataSat.style.visibility = "hidden";
  dataSun.style.visibility = "hidden";
});
barSat.addEventListener("click", function () {
  dataSat.style.visibility = "visible";
  dataMon.style.visibility = "hidden";
  dataTue.style.visibility = "hidden";
  dataWed.style.visibility = "hidden";
  dataThur.style.visibility = "hidden";
  dataFri.style.visibility = "hidden";
  dataSun.style.visibility = "hidden";
});
barSun.addEventListener("click", function () {
  dataSun.style.visibility = "visible";
  dataMon.style.visibility = "hidden";
  dataTue.style.visibility = "hidden";
  dataWed.style.visibility = "hidden";
  dataThur.style.visibility = "hidden";
  dataFri.style.visibility = "hidden";
  dataSat.style.visibility = "hidden";
});
