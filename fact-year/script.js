let form = document.querySelector("form");
let result = document.querySelector("#result");

async function getYearFact(year = "random") {
  year = year ? year : "random";
  let response = await fetch(`http://numbersapi.com/${year}/year`);
  return await response.text();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  result.textContent = await getYearFact(e.target.number.value);
  e.target.number.value = "";
});
