const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/learntocode.webp") {
    myImage.setAttribute("src", "images/learntocode2.webp");
  } else {
    myImage.setAttribute("src", "images/learntocode.webp");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}, is learning to code`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName}, is learning to code`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
