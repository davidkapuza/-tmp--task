import $ from "jquery";
import { MDCDrawer } from "@material/drawer";
import { MDCRipple } from "@material/ripple";
import { MDCTopAppBar } from "@material/top-app-bar";

$(function () {

  // Top app bar

  const topAppBarElements = document.querySelectorAll(".mdc-top-app-bar");
  topAppBarElements.forEach((topAppBar) => {
    new MDCTopAppBar(topAppBar).listen("MDCTopAppBar:nav", (e) => {
      drawer.open = !drawer.open;
    });
  });

  // Navigation Drawer

  const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

  $(".mdc-drawer .mdc-list").on("click", () => {
    drawer.open = false;
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
