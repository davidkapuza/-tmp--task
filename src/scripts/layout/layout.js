import $ from "jquery";
import { MDCDrawer } from "@material/drawer";
import { MDCRipple } from "@material/ripple";

$(function () {

  // Navigation Drawer

  const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

  $(".mdc-drawer .mdc-list, .mdc-top-app-bar__navigation-icon").on("click", () => {
    $("body").css("overflow", `${drawer.open ? "scroll" : "hidden"}`);
    drawer.open = !drawer.open;
  });

  document.body.addEventListener("MDCDrawer:closed", () => {
    $(".expenses-list-item")[0]?.focus();
  });

  // Toggle Filtration ui

  document.querySelectorAll(".toggle-filtration-btn").forEach((button) => {
    new MDCRipple(button).listen("click", (e) => {
      e.preventDefault();
      let display =
        $(".filtration").css("display") === "none" ? "flex" : "none";
      $(".filtration").css("display", display);
    });
  });
});

export * from "./layout.js";
