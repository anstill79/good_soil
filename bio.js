const btns = document.querySelectorAll(".h2o-level");
btns.forEach((btn) => {
  btn.addEventListener("click", setLevelH2o);
});
const goBtn = document.getElementById("go");
goBtn.addEventListener("click", submitMeasurement);

const measurement = {};

function setLevelH2o(event) {
  event.preventDefault();
  const section = this.parentNode.id;
  const valueText = this.innerText;
  let valueNum;
  if (valueText === "High") {
    valueNum = 3;
  }
  if (valueText === "Med") {
    valueNum = 2;
  }
  if (valueText === "Low") {
    valueNum = 1;
  }
  const parentElement = this.parentNode;
  const childElements = parentElement.children;
  for (let i = 0; i < childElements.length; i++) {
    childElements[i].classList.remove("btn-selected");
  }
  this.classList.add("btn-selected");
  measurement[section] = [valueNum, valueText];
  console.log(measurement);
}

const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
nameInput.addEventListener("blur", setDetail);
dateInput.addEventListener("blur", setDetail);
function setDetail() {
  const sourceItem = this.id;
  const sourceValue = this.value;

  if (sourceItem === "name") {
    measurement.name = sourceValue;
  }
  if (sourceItem === "date") {
    measurement.date = sourceValue;
  }
  console.log(measurement);
}
function submitMeasurement() {}

//--------- History section

const hxContainer = document.getElementById("history");
const historyList = hxContainer.querySelector("ul");
