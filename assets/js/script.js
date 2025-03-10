const graphBox = document.getElementById("graphBox");

const obj = [
  { year: 2013, people: 32 },
  { year: 2014, people: 43 },
  { year: 2015, people: 54 },
  { year: 2016, people: 74 },
  { year: 2017, people: 132 },
  { year: 2018, people: 220 },
  { year: 2019, people: 354 },
  { year: 2020, people: 468 },
  { year: 2021, people: 512 },
  { year: 2022, people: 599 },
  { year: 2023, people: 693 },
  { year: 2024, people: 762 },
  { year: 2025, people: 800 },
];

let heighestPeople = [];
for (i = 0; i < obj.length; i++) {
  heighestPeople.push(obj[i].people);
}
const sortArr = heighestPeople.sort((a, b) => a - b);

for (i = 0; i < obj.length; i++) {
  const height = Math.floor((obj[i].people * 90) / sortArr[sortArr.length - 1]);
  if (i === obj.length - 1) {
    graphBox.innerHTML += `<div class="w-full group graphCont relative bg-slate-200 cursor-pointer" style="height: ${height}%"><label class="bg-gradient-to-b from-red-700 graphLabel cursor-pointer to-slate-200 absolute top-0 left-0 w-full h-0 group-hover:h-full has-[:checked]:h-full" style="transition: 0.4s"><input type="radio" checked class="w-0 h-0 peer graphCheck opacity-0 outline-none border-0" name="graphCheck" value="${obj[i].people}"/><span class="lableYear text-center opacity-0 md:block hidden group-hover:opacity-100 group-hover:-translate-y-[200%] transition-transform font-bold text-slate-800 text-lg peer-[:checked]:-translate-y-[200%] peer-checked:opacity-100">${obj[i].year}</span></label></div>`;
  } else {
    graphBox.innerHTML += `<div class="w-full group graphCont relative bg-slate-200 cursor-pointer" style="height: ${height}%"><label class="bg-gradient-to-b from-red-700 graphLabel cursor-pointer to-slate-200 absolute top-0 left-0 w-full h-0 group-hover:h-full has-[:checked]:h-full" style="transition: 0.4s"><input type="radio" class="w-0 h-0 peer graphCheck opacity-0 outline-none border-0" name="graphCheck" value="${obj[i].people}"/><span class="lableYear text-center opacity-0 md:block hidden group-hover:opacity-100 group-hover:-translate-y-[200%] transition-transform font-bold text-slate-800 text-lg peer-[:checked]:-translate-y-[200%] peer-checked:opacity-100">${obj[i].year}</span></label></div>`;
  }
}

const people = document.getElementById("people");
const year = document.getElementById("year");
const graphConts = graphBox.querySelectorAll(".graphCont");
const graphLabels = graphBox.querySelectorAll(".graphLabel");
const graphChecks = graphBox.querySelectorAll(".graphCheck");
const lableYears = graphBox.querySelectorAll(".lableYear");

graphLabels.forEach((graphLabel, i) => {
  graphLabel.addEventListener("mouseover", () => {
    graphChecks[i].checked = true;
    people.textContent = graphChecks[i].value;
    year.textContent = lableYears[i].textContent;
  });
});

graphConts.forEach((graphCont, i) => {
  graphCont.addEventListener("click", () => {
    graphChecks[i].checked = true;
    people.textContent = graphChecks[i].value;
    year.textContent = lableYears[i].textContent;
  });
});

window.addEventListener("load", () => {
  people.textContent = obj[obj.length - 1].people;
  year.textContent = obj[obj.length - 1].year;
});
