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
});
barTue.addEventListener("click", function () {
  dataTue.style.visibility = "visible";
});
barWed.addEventListener("click", function () {
  dataWed.style.visibility = "visible";
});
barThur.addEventListener("click", function () {
  dataThur.style.visibility = "visible";
});
barFri.addEventListener("click", function () {
  dataFri.style.visibility = "visible";
});
barSat.addEventListener("click", function () {
  dataSat.style.visibility = "visible";
});
barSun.addEventListener("click", function () {
  dataSun.style.visibility = "visible";
});
