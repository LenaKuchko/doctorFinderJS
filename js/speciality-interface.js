var Speciality = require("./../js/speciality.js").specialityModule;
var apiKey = require('./../.env').apiKey;
var speciality = new Speciality();


$(function () {
  speciality.getAllSpecialities();
});
