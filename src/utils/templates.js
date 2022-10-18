export function expensesGroupTemplate(month, expenses) {
  month = new Date(month.split("-").reverse().join("-") + "-01").toLocaleString(
    "en-US",
    { month: "long" }
  );
  return `
  <h3 class="mdc-list-group__subheader">${month}</h3>
  <!-- ! ${month} group -->
  <ul class="mdc-list">
    ${expenses
      .map(({ category, title, date, price }) => {
        date = new Date(date.split("-").reverse().join("-")).toLocaleString(
          "en-US",
          { day: "2-digit", month: "short" }
        );
        return `
      <li class="expenses-list-item mdc-list-item">
      <span class="mdc-list-item__ripple"></span>
      <span class="mdc-list-item__label">${category}</span>
      <h3 class="mdc-list-item__title">${title}</h3>
      <span class="mdc-list-item__date">${date}</span>
      <span class="mdc-list-item__price">
        <span class="price__amount">${price.amount}</span>
        <span class="price__currency">${price.currency}</span>
      </span>
    </li>
      `;
      })
      .join("")}
  </ul>
`;
}
