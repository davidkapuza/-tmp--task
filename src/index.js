import $ from "jquery";
import "./sass/main.scss";
import "./scripts/filtration";
import "./scripts/components/datepicker"
import "./scripts/layout/layout"
import "./scripts/components/toTheTopBtn"
import renderExpenses from "./scripts/renderExpenses";
import renderSummary from "./scripts/renderSummary";


$(function () {

  renderExpenses()
  renderSummary()
});
