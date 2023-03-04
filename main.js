const accounts = [
  {
    checking: {
      balance: 8765,
    },
    savings: {
      balance: 34814,
    },
  },
];
const account = 0;

const screen = document.getElementById("screen");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
let cardInserted = false;
let balance = 8765;

const insertCard = () => {
  cardInserted = !cardInserted;

  screen.innerHTML = cardInserted
    ? "<div>Enter PIN</div><input id='pin-field' disabled maxlength='4' />"
    : "PLEASE INSERT YOUR CARD";
};

const mainMenu = () => {
  screen.innerHTML = "<div>Main menu</div>";
  btn1.setAttribute("onclick", "viewBalance()");
  btn1.innerHTML = "Balance";
  btn2.setAttribute("onclick", "setWithdrawScreen()");
  btn2.innerHTML = "Withdraw";
  // btn5.setAttribute("onclick", "viewBalance()");
  // btn6.setAttribute("onclick", "viewBalance()");
};

const viewBalance = () => {
  screen.innerHTML = accounts[account].checking.balance;
};

const setWithdrawScreen = () => {
  screen.innerHTML =
    "<label>Withdraw amount</label><input id='withdraw-field' disabled />";
};

const withdrawAmount = (val) => {
  if (val > account[account]) {
    screen.innerHTML = "Invalid amount";
    setTimeout(() => {
      setWithdrawScreen();
    }, 3000);
  }
};

const deposit = () => {};

const press = (button) => {
  const pinField = document.getElementById("pin-field");
  const withdrawField = document.getElementById("withdraw-field");
  const depositField = document.getElementById("deposit-field");

  if (pinField) {
    if (pinField.value.length === 4 && button === "enter") {
      mainMenu();
    }

    if (button !== "enter") {
      pinField.value += button;
    }
  }

  if (withdrawField) {
    if (
      button === "enter" &&
      accounts[account].checking.balance < withdrawField.value
    ) {
      screen.innerHTML === "Insufficient funds";
      setTimeout(() => {
        setWithdrawScreen();
      }, 3000);
    } else if (button === "enter") {
      accounts[account].checking.balance -= withdrawField.value;
    }
    if (button !== "enter") {
      withdrawField.value += button;
    }
  }

  if (depositField) {
    if (
      button === "enter" &&
      accounts[account].checking.balance < depositField.value
    ) {
      screen.innerHTML === "Insufficient funds";
      setTimeout(() => {
        setWithdrawScreen();
      }, 3000);
    } else if (button === "enter") {
      accounts[account].checking.balance -= depositField.value;
    }
    if (button !== "enter") {
      depositField.value += button;
    }
  }
};
