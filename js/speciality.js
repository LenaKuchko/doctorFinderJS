var apiKey = require('./../.env').apiKey;
var allSpecialities = [];

Speciality = function (Name, Description, Category){
  this.name = Name;
  this.description = Description;
  this.category = Category;
};

Speciality.prototype.getAllSpecialities = function () {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey)
  .then(function (response) {
    console.log(response);
    // for (var i = 0; i < response.length; i++) {
    //   response[i]
    // }

  });
};
exports.specialityModule = Speciality;
