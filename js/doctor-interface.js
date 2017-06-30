var Practice = require("./../js/doctor.js").practiceModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    var practice = new Practice();
    var medicalIssue = $("#search-param").val();
    console.log(medicalIssue);
    practice.getDoctors(medicalIssue);

  });
});
