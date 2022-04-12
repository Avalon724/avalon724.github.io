let navLinks = document.getElementById("navlinks");
let menu = document.getElementById("menu");

function showMenu() {
  if (!navLinks.classList.contains("navlinks__transition__toggle")) {
    navLinks.classList.remove("navlinks__transition");
    navLinks.classList.add("navlinks__transition__toggle");
  } else {
    navLinks.classList.remove("navlinks__transition__toggle");
    navLinks.classList.add("navlinks__transition");
  }
}

function submitForm() {
  let fullName = document.getElementById("FullName");
  let email = document.getElementById("Email");

  let ob = { FullName: fullName.value, Email: email.value };

  console.log(ob);

  alert(`Full Name : ${ob.FullName} \nEmail : ${ob.Email}`);
  fullName.value = "";
  email.value = "";
}
