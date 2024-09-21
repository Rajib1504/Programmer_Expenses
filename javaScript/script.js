function inputNumber(id) {
  const input = document.getElementById(id).value;
  const num = parseFloat(input);
  return num;
}
function setValue(id) {
  document.getElementById(id);
}
const calculate = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    // getting values
    const income = inputNumber("income");
    const software = inputNumber("software");
    const courses = inputNumber("courses");
    const internet = inputNumber("internet");
    const saving = inputNumber("savings-amount");
    const totalExpence = software + courses + internet;
    const balance = income - totalExpence;
    //  step -1 set-total expence >>>>>
    const expence = (document.getElementById(
      "total-expenses"
    ).innerText = ` ${totalExpence.toFixed(2)}`);
    //step-2 set balance after expence >>>>>
    const netIncome = (document.getElementById(
      "balance"
    ).innerText = `${balance.toFixed(2)}`);

    document.getElementById("results").classList.remove("hidden");
  });
//   step-3 savings calculation
const calculate_savings = document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const income = inputNumber("income");
    const software = inputNumber("software");
    const courses = inputNumber("courses");
    const internet = inputNumber("internet");
    const saving = inputNumber("savings-amount");
    const savings = inputNumber("savings");
    const totalExpence = software + courses + internet;
    const balance = income - totalExpence;
    const saving_Calculation = (balance * savings) / 100;
    const remaining = balance - saving_Calculation;
    document.getElementById(
      "savings-amount"
    ).innerText = `${saving_Calculation.toFixed(2)}`;
    document.getElementById(
      "remaining-balance"
    ).innerText = `${remaining.toFixed(2)}`;
  });

//   history part starts here
const history_tab = document.getElementById("history-tab");
history_tab.addEventListener("click", function () {
  history_tab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("history-section").classList.remove("hidden");
  const assistantRemove = document
    .getElementById("assistant-tab")
    .classList.remove(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
  document.getElementById("assistant-tab").classList.add("text-gray-600");

  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
});

// assitant btn
const assistantBtn = document
  .getElementById("assistant-tab")
  .addEventListener("click", function () {
    document
      .getElementById("assistant-tab")
      .classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
      );

    document
      .getElementById("history-tab")
      .classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
      );
    document.getElementById("expense-form").classList.remove("hidden");
    document.getElementById("results").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");
  });
