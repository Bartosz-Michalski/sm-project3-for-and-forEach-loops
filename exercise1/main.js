const btn = document.querySelector("button");
const allLi = document.querySelectorAll("li");
const firstLi = document.querySelector("li");

let size = 10;

//********** forEach **********

// btn.addEventListener("click", () => {
//   if (firstLi.style.display == "") {
//     allLi.forEach((li) => {
//       li.style.display = "block";
//       li.style.fontSize = size + "px";
//     });
//   } else {
//     size++;
//     allLi.forEach((li) => (li.style.fontSize = size + "px"));
//   }
// });

// ********** for **********

btn.addEventListener("click", () => {
  if (firstLi.style.display == "") {
    for (let i = 0; i < allLi.length; i++) {
      allLi[i].style.display = "block";
      allLi[i].style.fontSize = size + "px";
    }
  } else {
    size++;
    for (let i = 0; i < allLi.length; i++) {
      allLi[i].style.fontSize = size + "px";
    }
  }
});
