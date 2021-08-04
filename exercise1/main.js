const btn = document.querySelector("button");
const allLi = document.querySelectorAll("li");
const firstLi = document.querySelector("li");

let size = 10;

btn.addEventListener("click", () => {
  if (firstLi.style.display == "") {
    allLi.forEach((li) => {
      li.style.display = "block";
      li.style.fontSize = size + "px";
    });
  } else {
    size++;
    allLi.forEach((li) => (li.style.fontSize = size + "px"));
  }
});
