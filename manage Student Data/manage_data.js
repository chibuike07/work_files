let courseInp = document.getElementById("tex");
let thead = document.getElementById("thead"),
  tbody,
  tableRow,
  array = [],
  input,
  position = document.getElementById("position"),
  higestAvg = document.getElementById("average"),
  table = document.getElementById("table");
table.setAttribute("border", "3");
co = 0;
function addTableHead(...inp) {
  // co++;
  table = document.getElementById("table");
  thead = document.getElementById("thead");
  let th = document.createElement("th");
  if (courseInp.value == "") {
    alert("course must not be left empty");
    courseInp.focus();
    return false;
  }

  inp.map(n => n);
  th.innerText = inp;
  thead.appendChild(th);
  table.appendChild(thead);
  // console.log(inp, co);
  document.getElementById("form").reset();
}
function addTableBody() {
  if (document.getElementById("nm").value == "") {
    alert("name must not be left empty");
    document.getElementById("nm").focus();
    return false;
  }
  tbody = document.getElementById("tbody");
  tableRow = table.insertRow(table.length);

  input = {
    nam: document.getElementById("nm").value,
    eng: document.getElementById("en").value,
    math: document.getElementById("mt").value,
    econs: document.getElementById("ec").value,
    agric: document.getElementById("ag").value,
    art: document.getElementById("art").value
  };

  cell1 = tableRow.insertCell(0);
  cell2 = tableRow.insertCell(1);
  cell3 = tableRow.insertCell(2);
  cell4 = tableRow.insertCell(3);
  cell5 = tableRow.insertCell(4);
  cell6 = tableRow.insertCell(5);
  cell7 = tableRow.insertCell(6);
  cell8 = tableRow.insertCell(7);
  cell9 = tableRow.insertCell(7);

  cell1.innerText = input.nam;
  cell2.innerText = input.eng;
  cell3.innerText = input.math;
  cell4.innerText = input.econs;
  cell5.innerText = input.agric;
  cell6.innerText = input.art;
  cell7.innerText = Number();
  cell8.innerText = Number();
  cell9.innerText = String();
  tbody.appendChild(tableRow);
  table.appendChild(tbody);
  array.push(input);
  // console.log(array);
}

function totalScore() {
  let allScore;
  let row;
  for (let i = 0; i < table.rows.length; i++) {
    row = table.rows[i];
    allScore =
      Number(row.cells[1].innerText) +
      Number(row.cells[2].innerText) +
      Number(row.cells[3].innerText) +
      Number(row.cells[4].innerText) +
      Number(row.cells[5].innerText);
    row.cells[6].innerText = allScore;
    // console.log(allScore);
  }
  input.tot = allScore;
  let avg = Number(row.cells[6].innerText) / 5;
  row.cells[7].innerText = avg;
  input.avg = avg;
  // console.log(input);
}
function grading() {
  let flat = Math.round(input.avg);
  let grade = "",
    row;

  if (flat <= 39) {
    grade = "F";
  } else if (flat <= 49) {
    grade = "D";
  } else if (flat <= 59) {
    grade = "C";
  } else if (flat <= 69) {
    grade = "B";
  } else if (flat >= 70) {
    grade = "A";
  }
  input.grade = grade;
  // console.log(grade);
  for (let i = 0; i < table.rows.length; i++) {
    row = table.rows[i];
  }
  row.cells[8].innerText = grade;
}

function len() {
  let avgArr = [];
  if (table.rows.length == 5) {
    alert("you have reach the maximum length of table");
    let ArrObj = array.filter(n => n.avg);
    ArrObj.map(n => avgArr.push(n.avg));
    let avgMax = Math.max(...avgArr);
    let maxNamObj = array.filter(nam => nam.avg == avgMax);
    let maxNam = maxNamObj.map(nam => nam.nam);
    higestAvg.innerText = `${maxNam} scored the highest amongst all with ${avgMax} of average`;
    let form = document.querySelector("form");
    let btn = document.querySelector("button");
    form.readOnly = true;
    btn.disabled = true;
  }
}
function sortFromHighestToLowest() {
  co++;
  let sortedArrayByAvg = array.sort((a, b) => b.avg - a.avg);
  let namesBySort = sortedArrayByAvg
    .map(n => `${n.nam} average score is ${n.avg}% \n`)
    .join("");
  position.innerText = namesBySort;
  // console.log(namesBySort);
  // console.log(co)
}

function emptyCells() {
  let spacedData = document.getElementById("spacedData");
  let array1 = [];
  array1.push(input);
  let liElement = document.createElement("li");
  let spacedCell = array1.filter(
    spaces =>
      spaces.eng == "" ||
      spaces.math == "" ||
      spaces.econs == "" ||
      spaces.agric == "" ||
      spaces.art == ""
  );
  // console.log(spacedCell);
  let spac = spacedCell.map(keys => {
    return Object.keys(keys).filter(course => keys[course] == "");
  });
  for (values of spac) {
    let fromTwoValues;
    if (values.length >= 2) {
      fromTwoValues = values.join(" & ");
      liElement.innerText = input.nam + " u were absent in " + fromTwoValues;
      spacedData.appendChild(liElement);
      // console.log(fromTwoValues);
    } else {
      liElement.innerText = input.nam + " u were absent in " + values;
      spacedData.appendChild(liElement);
    }
  }
}
let studentCount = 0;
let studCount = document.getElementById("studCount");
// function studentAttendant(){
//   studentCount++
//   let studentLen = array.filter(n => n)
//   studCount.innerText = `${studentCount} student wrote the test`
//     console.log(studentCount)

// }
// function passedStudent(){
//   let arrayOfStudent = array.filter(n => n.grade)
//   console.log(arrayOfStudent)
// }

document.addEventListener("DOMContentLoaded", () => {
  let th = document.createElement("th");
  th.innerText = "Name";
  thead.appendChild(th);
});
