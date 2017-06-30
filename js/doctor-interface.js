var Doctor = require("./../js/doctor.js").doctorModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function () {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    var doctor = new Doctor();
    var medicalIssue = $("#search-param").val();
    console.log(medicalIssue);
    doctor.getDoctors(medicalIssue);
  });
});
