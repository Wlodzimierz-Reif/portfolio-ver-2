function myFunction() {
    const x = document.getElementById("links");
    const y = document.querySelector(".icon");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.color = "white";
    } else {
      x.style.display = "none";
      y.style.color = "black";
    }
  }