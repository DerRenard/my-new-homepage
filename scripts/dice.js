const chooseDice = document.querySelector(".rolling-dice");
const chooseDiceFloat = document.querySelector(".rolling-dice-splash");
const diceList = document.querySelector(".dice-choose");

const rollButton = document.querySelector("#rolling-button");
const rollValue = document.querySelector(".rolling-num");

const rollDice = (sides) => {
  let sides_local;
  switch (sides) {
    case "D4": {
      sides_local = 4;
      break;
    }
    case "D6": {
      sides_local = 6;
      break;
    }
    case "D8": {
      sides_local = 8;
      break;
    }
    case "D10": {
      sides_local = 10;
      break;
    }
    case "D12": {
      sides_local = 12;
      break;
    }
    case "D20": {
      sides_local = 20;
      break;
    }
    case "D100": {
      sides_local = 100;
      break;
    }
  }

  if (typeof sides_local === "number") {
    return (Math.random() * sides_local + 1).toFixed(0);
  } else {
    console.log("oops");
    return 0;
  }
};

let flagClick = false;

chooseDice.addEventListener("click", () => {
  if (!flagClick) {
    chooseDiceFloat.classList.remove("rolling-dice-splash-inactive");
    flagClick = true;
  } else {
    chooseDiceFloat.classList.add("rolling-dice-splash-inactive");
    flagClick = false;
  }
});

diceList.addEventListener("change", (e) => {
  if (e.target.name === "dice") {
    chooseDice.textContent = e.target.value;

    chooseDiceFloat.classList.add("rolling-dice-splash-inactive");

    flagClick = false;
  }
});

rollButton.addEventListener("click", () => {
  rollValue.textContent = Number(rollDice(chooseDice.textContent));
});
