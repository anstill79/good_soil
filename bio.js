import { app, db } from "./db.js";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const collectionReference = collection(db, "Measurements");

//--------------front end
const form = document.forms[0];

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
  let modification;
  if (!this.classList.contains(style)) {
    modification = 'add'
  }
  const parentElement = this.parentNode;
  const childElements = parentElement.children;
  for (let i = 0; i < childElements.length; i++) {
    childElements[i].className = '';
    childElements[i].classList.add('h2o-level');
  }
  if (modification === 'add') {
    this.classList.add(style);
    measurement[section] = [valueNum, valueText];
  } else {
    this.classList.remove(style);
    measurement[section] = "";
  }
  console.log(measurement)
}
function clearButtonClasses() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].className = '';
    btns[i].classList.add('h2o-level');
  }
}
const noteInput = document.getElementById("note");
const dateInput = document.getElementById("date");
noteInput.addEventListener("blur", setDetail);
dateInput.addEventListener("blur", setDetail);
function setDetail() {
  const sourceItem = this.id;
  const sourceValue = this.value;

  if (sourceItem === "note") {
    measurement.note = sourceValue;
  }
  if (sourceItem === "date") {
    measurement.date = sourceValue;
  }
}
function submitMeasurement(event) {
  event.preventDefault();
  addDoc(collectionReference, {
    measurement: measurement,
    createdAt: serverTimestamp(),
  }).then(() => {
    form.reset();
    clearButtonClasses();
  });
}

//--------- History section

const hxContainer = document.getElementById("history");
const historyList = hxContainer.querySelector("ul");

let measurementHx = [];
async function getAllMeasurements() {
  measurementHx = [];
  const results = await getDocs(collectionReference);
  results.docs.forEach((doc) => {
    measurementHx.push({ ...doc.data(), id: doc.id });
  });
  displayMeasurementHx()
}

function displayMeasurementHx() {
  measurementHx.forEach((element, index) => {
    let obj = measurementHx[index].measurement;
    console.log("dodo" + " " + measurementHx[index].date)
    for (const key in obj) {
      const value = obj[key];
      console.log(key + " " + value)
    }
  });
}
//getAllMeasurements()