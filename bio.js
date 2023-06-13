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
  let style;
  if (valueText === "High") {
    valueNum = 3;
    style = 'btn-selected-high';
  }
  if (valueText === "Med") {
    valueNum = 2;
    style = 'btn-selected-med';
  }
  if (valueText === "Low") {
    valueNum = 1;
    style = 'btn-selected-low';
  }
  const parentElement = this.parentNode;
  const childElements = parentElement.children;
  for (let i = 0; i < childElements.length; i++) {
    childElements[i].className = '';
    childElements[i].classList.add('h2o-level');
  }

  this.classList.add(style);
  measurement[section] = [valueNum, valueText];

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
function submitMeasurement() { }

//--------- History section

const hxContainer = document.getElementById("history");
const historyList = hxContainer.querySelector("ul");
