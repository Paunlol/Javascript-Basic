const box = document.getElementById('divbox')
let status

function addDarkMode() {
  box.classList.add("darkmode") // Add the "darkmode" class
}

function removeDarkMode() {
  box.classList.remove("darkmode") // Remove the "darkmode" class
}

function switchDarkMode() {
  box.classList.toggle("darkmode") // Toggle the presence of the "darkmode" class
  status = box.classList.contains("darkmode") // Check if the "darkmode" class is present
  if (status) {
    box.style.color = "yellow" // Set the text color to yellow if "darkmode" is present
  } else {
    box.style.color = "red" // Set the text color to red if "darkmode" is not present
  }
  console.log(status) // Output the status (true if "darkmode" is present, false otherwise)
}
