const btn = document.querySelector("button");
const allLi = document.querySelectorAll("li");
const firstLi = document.querySelector("li");

let size = 16;

btn.addEventListener("click", () => {
  if (firstLi.style.display == "") {
    allLi.forEach((li) => (li.style.display = "list-item"));
    console.log(firstLi.style.display);
  } else {
    size++;
    allLi.forEach((li) => (li.style.fontSize = size + "px"));
  }
});
