var apiKey = require('./../.env').apiKey;

Practice = function (Id, PracticeName, Address, Phone, FirstName, LastName, Bio, Gender, Image, Title) {
  this.id = Id;
  this.practiceName = PracticeName;
  this.address = Address;
  this.phone = Phone;
  this.name = FirstName + LastName;
  this.bio = Bio;
  this.gender = Gender;
  this.photo = Image;
  this.title = Title;
};

Practice.prototype.getDoctors = function (medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function (response) {

    console.log(response);
  })
  .fail(function(error){
     console.log("fail");
   });
};

exports.practiceModule = Practice;
