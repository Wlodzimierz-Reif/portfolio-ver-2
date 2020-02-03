function myFunction() {
  const x = document.getElementById("links");
  const y = document.querySelector(".icon");
  if (x.style.display === "block") {
    x.style.display = "none";
    // y.style.color = "white";
  } else {
    x.style.display = "block";
    // y.style.color = "black";
  }
}





const date1 = new Date();
const date2 = new Date('2020/04/17');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffDays);
let percent = Math.floor((81 - diffDays) / 81 * 100);
// console.log(percent);

const progress = document.querySelector('#about > div > span');
progress.style.width = `${percent}%`;

const completed = document.querySelector('#completion');
completed.textContent = `${percent}% completed`;

const incompleted = document.querySelector('#incompletion');
incompleted.textContent = `${100 - percent}% to go`;