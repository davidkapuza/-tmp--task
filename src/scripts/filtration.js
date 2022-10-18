import $ from "jquery";
import initialExpenses from "../utils/mock-expenses.js";
import deepClone from "../utils/deepClone.js";
import renderExpenses from "./renderExpenses";
import { MDCSelect } from "@material/select";
import { MDCTextField } from "@material/textfield";


let filteredExpenses = deepClone(initialExpenses);

// Filtration by date
// ! accepts date in "DD-MM-YYYY" format

$("#datepicker").on("change", function (e, { date }) {
  filteredExpenses = deepClone(initialExpenses);
  if (date.length === 2) {
    filteredExpenses.filter((group) => {
      group.expenses = group.expenses.filter((item) => {
        const [day, month, year] = item.date.split("-");
        const dateTime = new Date(+year, month - 1, +day).getTime();
        return dateTime >= date[0].getTime() && dateTime <= date[1].getTime();
      });
      return group.expenses.length;
    });
    renderExpenses(filteredExpenses);
  }
  if (date.length === 0) {
    renderExpenses();
  }
});

// Filtration by category

const select = new MDCSelect(document.querySelector(".mdc-select"));

select.listen("MDCSelect:change", () => {
  filteredExpenses = deepClone(initialExpenses);
  if (select.value !== "all") {
    filteredExpenses.filter((group) => {
      group.expenses = group.expenses.filter(
        (item) => item.category.toLowerCase() === select.value.toLowerCase()
      );
      return group.expenses.length;
    });
    renderExpenses(filteredExpenses);
  } else {
    renderExpenses()
  }
  
});

// Filtration by name


const textField = new MDCTextField(document.querySelector(".mdc-text-field"));

textField.listen("input", (e) => {
  if (textField.value) {
    filteredExpenses = deepClone(initialExpenses);
    filteredExpenses.filter((group) => {
      group.expenses = group.expenses.filter(
        (item) => item.title.toLowerCase().startsWith(textField.value.toLowerCase())
      );
      return group.expenses.length;
    });
    renderExpenses(filteredExpenses);
  } else {
    renderExpenses()
  }
})


export * from "./filtration.js";
