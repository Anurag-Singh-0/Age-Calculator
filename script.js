const dobInput = document.querySelector("#date");
const btn = document.querySelector("#calBtn");
const result = document.querySelector(".result");

function calculateAge(dob) {
  let birthDate = new Date(dob);
  let currentDate = new Date();

  let day = currentDate.getDate() - birthDate.getDate();
  let month = currentDate.getMonth() - birthDate.getMonth();
  let year = currentDate.getFullYear() - birthDate.getFullYear();

  if (day < 0) {
    month--;
    day += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (month < 0) {
    year--;
    month += 12;
  }

  return { day, month, year };
}

btn.addEventListener("click", () => {
  let dob = dobInput.value.trim();
  if (dob === "") {
    alert("Please enter your Date of Birth");
    return;
  }
  let { day, month, year } = calculateAge(dob);

  if ((day, month, year)) {
    result.style.display = "block";
    result.textContent = `Your are ${year} years ${month} months ${day} days old`;
  }
});
