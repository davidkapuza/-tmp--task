import $ from "jquery";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";
import mockExpenses from "../../utils/mock-expenses";

export default new AirDatepicker("#datepicker", {
  locale: localeEn,
  range: true,
  multipleDatesSeparator: " - ",
  dateFormat: "dd MMM",
  // TODO get first task date
  minDate: new Date("2022-07-16"), 
  maxDate: new Date(),
  onSelect: function (dp) {
    $(dp.datepicker.$el).trigger("change", dp);
  },
  buttons: [ "clear" ]
});