import $ from "jquery"
import initialExpenses from "../utils/mock-expenses";
import { expensesGroupTemplate } from "../utils/templates";

export default function renderExpenses(filteredExpenses) {
  let expenses = filteredExpenses ?? initialExpenses;

  $(".expenses-list").html("");
  expenses.forEach(({ month, expenses }) => {
    $(".expenses-list").append(expenses.length ? expensesGroupTemplate(month, expenses) : "");
  });
  // add tabindex to the first exp. item in list
  $(".expenses-list-item").first().attr('tabindex', '0');
  // reset expenes after each rerender
  expenses = initialExpenses
}
