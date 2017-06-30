var Doctor = require("./../js/doctor.js").doctorModule;
var apiKey = require('./../.env').apiKey;

var displayDoctors  = function (doctors) {
  for (var i = 0; i < doctors.length; i++) {
    $(".results").append.('<li class="doctor-info" id="' + doctors[i].id + '"><strong>' + doctors[i].name + "</strong></li>");
  }
};

$(document).ready(function () {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    var doctor = new Doctor();
    var medicalIssue = $("#search-param").val();
    console.log(medicalIssue);
    doctor.getDoctors(medicalIssue);
  });
});
