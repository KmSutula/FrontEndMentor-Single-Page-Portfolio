const portrait = document.getElementById("portrait");

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    portrait.src = "./assets/images/image-profile-desktop.webp";
  } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
    portrait.src = "./assets/images/image-profile-tablet.webp";
  } else {
    portrait.src = "./assets/images/image-profile-mobile.webp";
  }
});

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const inputArr = [nameInput, emailInput, messageInput];

const errorMsgs = document.querySelectorAll(".errorMsgs");

form.addEventListener("submit", (e) => {
  const validName = nameInput.checkValidity();
  const validEmail = emailInput.checkValidity();
  const validMessage = messageInput.checkValidity();

  const validArr = [validName, validEmail, validMessage];
  validArr.forEach((input, i) => {
    if (input === false) {
      e.preventDefault();
      inputArr[i].classList.add("border-red");
      console.log(errorMsgs[i]);
      errorMsgs[i].innerHTML = "Sorry, invalid format";
    } else {
      errorMsgs[i].innerHTML = "";
      // inputArr[i].classList.add("border-green");
    }
  });
});

inputArr.forEach((input) =>
  input.addEventListener("input", () => {
    const validName = nameInput.checkValidity();
    const validEmail = emailInput.checkValidity();
    const validMessage = messageInput.checkValidity();
    const validArr = [validName, validEmail, validMessage];
    validArr.forEach((input, i) => {
      if (input === true) {
        errorMsgs[i].innerHTML = "";
      } else return;
    });
  })
);
