var Speciality = require("./../js/speciality.js").specialityModule;
var apiKey = require('./../.env').apiKey;
var speciality = new Speciality();

var displaySpecialities = function (specialties) {
  console.log(specialties);
  for (var i = 0; i < specialties.length; i++) {
    $("#search-speciality").append('<option value="' + specialties[i].id + '">' + specialties[i].name + "</option>");
    console.log(specialties[i].name);
  }
};

$(function () {
  speciality.getAllSpecialities(displaySpecialities);
});
