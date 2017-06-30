var Practice = require("./../js/practice.js").practiceModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  console.log("Hi");
  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    var practice = new Practice();
    console.log("Hello");
    practice.getPractices('Toothache');
    // $(".results")
  });
});
