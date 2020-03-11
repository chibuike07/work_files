let table = document.querySelector("table");
table.setAttribute("border", "3");
let p = document.querySelector("p");
let cite = document.querySelector("cite");
let strong = document.querySelector("strong");
let allScoreArray = [];
let avgarr = [];
let datArr = [];
let tbody = document.querySelector("tbody");
function studentGrades() {
  let inpArr = [];
  let input = {
    nam: document.getElementById("nm").value,
    eng: document.getElementById("en").value,
    math: document.getElementById("mt").value,
    econs: document.getElementById("ec").value,
    agric: document.getElementById("ag").value,
    art: document.getElementById("art").value
  };
  let tr = table.insertRow(1);
  let cell1 = tr.insertCell(0);
  let cell2 = tr.insertCell(1);
  let cell3 = tr.insertCell(2);
  let cell4 = tr.insertCell(3);
  let cell5 = tr.insertCell(4);
  let cell6 = tr.insertCell(5);
  let cell7 = tr.insertCell(6);
  let cell8 = tr.insertCell(7);
  let cell9 = tr.insertCell(8);
  inpArr.push(input);
  datArr.push(input);
  cell1.innerHTML = input.nam;
  cell2.innerHTML = input.eng;
  cell3.innerHTML = input.math;
  cell4.innerHTML = input.econs;
  cell5.innerHTML = input.agric;
  cell6.innerHTML = input.art;

  tbody.appendChild(tr);
  let allScore =
    Number(cell2.innerHTML) +
    Number(cell3.innerHTML) +
    Number(cell4.innerHTML) +
    Number(cell5.innerHTML) +
    Number(cell6.innerHTML);

  cell7.innerHTML = allScore;
  input.tot = allScore;
  let count = 0;
  allScoreArray.push(allScore);
  for (let i = 0; i < allScoreArray.length; i++) {
    count += allScoreArray[i];
  }

  p.innerText = "Sum of total score is " + count;
  let average = parseFloat(cell7.innerHTML) / 5;
  cell8.innerHTML = average;
  input.avg = average;
  let flat = Math.round(average);
  let grade;
  if (flat <= 39) {
    grade = "F";
  } else if (flat <= 49) {
    grade = "D";
  } else if (flat <= 59) {
    grade = "C";
  } else if (flat <= 69) {
    grade = "B";
  } else if (flat <= 100) {
    grade = "A";
  }
  let arrcompArr = [];
  cell9.innerHTML = grade;
  input.grad = grade;
  avgarr.push(average);

  if (avgarr.length == 5) {
    let g = datArr.sort((a, b) => {
      return a.avg - b.avg;
    });
    let val = document.getElementById("pos");
    let me = document.createElement("li");
    console.log(g);

    if (g) {
      let m = g.map(item => `${item.nam} ${item.avg}</br>`).join("");
      console.log(m);
      val.innerHTML = m;
    }
    let avgMax = Math.max(...avgarr);
    let avgMaxScorer = datArr.filter(n => n.avg == avgMax);
    let namMax = avgMaxScorer.map(n => n.nam);
    console.log(avgMaxScorer);
    console.log(namMax);
    cite.innerText =
      namMax + " scored the higest average above all with " + avgMax;
  }
  let sub = document.getElementById("en");
  let mt = document.getElementById("mt");
  let ec = document.getElementById("ec");
  let ag = document.getElementById("ag");
  let art = document.getElementById("art");
  let emptyCellObj = inpArr.filter(
    n =>
      n.eng == "" ||
      n.math == "" ||
      n.econs == "" ||
      n.agric == "" ||
      n.art == ""
  );
  let liElement = document.createElement("li");
  let emptyCellObjKeys = emptyCellObj.map(key => {
    return Object.keys(key).filter(keys => key[keys] == "");
  });
  for (values of emptyCellObjKeys) {
    if (values.length >= 2) {
      let fromTwoValues = values.join(" & ");
      liElement.innerText = input.nam + " u were absence in " + fromTwoValues;
      strong.appendChild(liElement);
      console.log(fromTwoValues);
    } else {
      liElement.innerText = input.nam + " u were absence in " + values;
      strong.appendChild(liElement);
    }
  }
  if (table.rows.length - 1 == 5) {
    document.getElementById("nm").disabled = true;
    document.getElementById("en").disabled = true;
    document.getElementById("mt").disabled = true;
    document.getElementById("ec").disabled = true;
    document.getElementById("ag").disabled = true;
    document.getElementById("art").disabled = true;
    document.querySelector("button").disabled = true;
    alert("the have reach the maximum input for this table");
  }
  document.querySelector("form").reset();
}
function reld() {
  location.reload();
}
