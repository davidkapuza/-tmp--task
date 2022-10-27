/**
 * @param {string} month
 * @param {{ category: any; title: any; date: any; price: any; }[]} expenses
 */
export function expensesGroupTemplate(month, expenses) {
  month = new Date(month.split("-").reverse().join("-") + "-01").toLocaleString(
    "en-US",
    { month: "long" }
  );
  return `
  <h3 class="mdc-list-group__subheader">${month}</h3>
  <!-- ! ${month} group -->
  <ul class="expenses-group mdc-list">
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

export function summaryGroupTemplate(group, expenses) {
  return `
  <h3 class="mdc-list-group__subheader divider">${group}</h3>
      <ul class="mdc-list">
      ${Object.entries(expenses)
        .map(([key, amount]) => {
          let keyValue =
            group === "Per period"
              ? new Date(key.split("-").reverse().join("-")).toLocaleString(
                  "en-US",
                  { month: "long" }
                )
              : key[0].toUpperCase() + key.slice(1);
          return `
    <li class="mdc-list-item">
      <span class="mdc-list-item__ripple"></span>
      <span class="mdc-list-item__text">${keyValue}</span>
      <span class="mdc-list-item__price">
        <span class="price__amount">${amount}</span>
        <span class="price__currency">PLN</span>
      </span>
    </li>
    `;
        })
        .join("")}
  </ul>
    
  `;
}
