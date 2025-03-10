const graphLabels = document.querySelectorAll(".graphLabel");
const graphChecks = document.querySelectorAll(".graphCheck");
const lableYears = document.querySelectorAll(".lableYear");
const people = document.getElementById("people");
const year = document.getElementById("year");

graphLabels.forEach((graphLabel, i) => {
  graphLabel.addEventListener("mouseover", () => {
    graphChecks[i].checked = true;
    people.textContent = graphChecks[i].value;
    year.textContent = lableYears[i].textContent;
  });
});

window.addEventListener("load", () => {
  people.textContent = graphChecks[graphLabels.length - 1].value;
  year.textContent = lableYears[graphLabels.length - 1].textContent;
});
