var Doctor = require("./../js/doctor.js").doctorModule;
var apiKey = require('./../.env').apiKey;
var doctor = new Doctor();

var displayDoctorDetails = function(doctor) {
  console.log(doctor);
  $("#doctor-details").html("<img src='" + doctor.photo + "'>");
  $("#doctor-details").append("<h3>" + doctor.firstName + " " + doctor.lastName  + "</h3><hr>", "<h4>" + doctor.practiceName + "</h4>", "<h4>" + doctor.address + "</h4>", "<h4> <strong>Phone number: </strong>" + doctor.phone + "</h4> <hr> <h3>Description: </h3>" + "<h4>" + doctor.bio + "</h4>");
};

var displayDoctors = function(allDoctors) {
  if (allDoctors.length === 0) {
    $(".results").append("<h3>There is no matches</h3>");
  } else {
    for (var i = 0; i < allDoctors.length; i++) {
      $(".results").append('<li class="doctor-info" id="' + allDoctors[i].id + '"><strong>' + allDoctors[i].firstName + " " + allDoctors[i].lastName + "</strong></li>");
    }
    $(".doctor-info").click(function() {
      console.log($(this)[0].id);
      var clicked = $(this)[0].id;
      doctor.findDoctor(allDoctors, clicked, displayDoctorDetails);
    });
  }
};

$(function () {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    var medicalIssue = $("#search-condition").val();
    var doctorName = $("#search-name").val();
    var speciality = $("#search-speciality").val();
    doctor.getDoctors(medicalIssue, doctorName, displayDoctors, speciality);
  });

  // $("#recently-view").click(function () {
  //   console.log("Click");
  //   doctor.getRecentlyView(displayDoctors);
  // });
});
