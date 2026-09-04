const settings = document.querySelector(".settings");
const settingsButton = document.querySelector("#settings-button");

// settings-button-float

let settingsButtonFlag = false;
settingsButton.addEventListener("click", (e) => {
  if (settingsButtonFlag === false) {
    settings.classList = "settings";
    settingsButton.classList = "settings-button settings-button-float";
    settingsButtonFlag = true;
  } else {
    settings.classList = "settings settings-inactive";
    settingsButton.classList = "settings-button";
    settingsButtonFlag = false;
  }
})