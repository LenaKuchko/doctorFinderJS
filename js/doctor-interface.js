var Doctor = require("./../js/doctor.js").doctorModule;
var apiKey = require('./../.env').apiKey;
var doctor = new Doctor();

var displayDoctorDetails = function(doctor) {
  console.log(doctor);
  $("#doctor-details").html("<img src='" + doctor.photo + "'>");
  $("#doctor-details").append("<h3>" + doctor.practiceName[i] + "</h3>", "<h4>" + doctor.firstName[i] +  doctor.lastName[i] + "</h4>", "<h4>" + doctor.address[i] + "</h4>", "<h4>" + doctor.phone[i] + "</h4>");
};

var displayDoctors = function(allDoctors) {
  for (var i = 0; i < allDoctors.length; i++) {
    console.log(allDoctors[i]);
    $(".results").append('<li class="doctor-info" id="' + allDoctors[i].id + '"><strong>' + allDoctors[i].firstName + " " + allDoctors[i].lastName + "</strong></li>");
  }
  $(".info-recipes").click(function() {
    var clicked = $(this)[0].id;
    doctor.findDoctor(clicked, allDoctors, displayDoctorDetails);
  });
};

$(document).ready(function () {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    var medicalIssue = $("#search-param").val();
    console.log(medicalIssue);
    doctor.getDoctors(medicalIssue, displayDoctors);
  });
});
