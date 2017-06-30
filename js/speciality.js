var apiKey = require('./../.env').apiKey;
var allSpecialities = [];

Speciality = function (Id, Name, Description, Category){
  this.id = Id;
  this.name = Name;
  this.description = Description;
  this.category = Category;
};

Speciality.prototype.getAllSpecialities = function (displaySpecialities) {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey)
  .then(function (response) {
    for (var i = 0; i < response.data.length; i++) {
      var speciality = new Speciality(
                            response.data[i].uid,
                            response.data[i].name,
                            response.data[i].description,
                            response.data[i].category
                          );
      allSpecialities.push(speciality);
    }
    displaySpecialities(allSpecialities);
  });
};
exports.specialityModule = Speciality;
