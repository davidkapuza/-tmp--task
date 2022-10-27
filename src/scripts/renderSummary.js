import $ from "jquery";
import initialExpenses from "../utils/mock-expenses";
import { summaryGroupTemplate } from "../utils/templates";

export default function renderSummary() {
  let expenses = initialExpenses;

  $(".summary-list").html("");

  let expensesPerGroup = expenses.reduce(
    (acc, { month, expenses }) => {
      expenses.forEach(({ category, price: { amount } }) => {
        acc["Per period"][month]
          ? (acc["Per period"][month] += amount)
          : (acc["Per period"][month] = amount);
        acc["Per category"][category]
          ? (acc["Per category"][category] += amount)
          : (acc["Per category"][category] = amount);
      });
      return acc;
    },
    { ["Per period"]: {}, ["Per category"]: {} }
  );

  const total = Object.entries(expensesPerGroup).reduce((acc, [, groupExpenses]) => {
    Object.values(groupExpenses).forEach((expense) => (acc += expense));
    return acc;
  }, 0);

  $(".summary-box-header__subheader").append("Total: -" + total)

  Object.entries(expensesPerGroup).forEach(([group, groupExpenses]) => {
    $(".summary-list").append(summaryGroupTemplate(group, groupExpenses));
  });
}
