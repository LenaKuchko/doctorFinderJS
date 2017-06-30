var apiKey = require('./../.env').apiKey;

Doctor = function(Id, PracticeName, Address, Phone, FirstName, LastName, Bio, Gender, Image, Title){
  this.id = Id;
  this.practiceName = PracticeName;
  this.address = Address;
  this.phone = Phone;
  this.firstName = FirstName;
  this.lastName = LastName;
  this.bio = Bio;
  this.gender = Gender;
  this.photo = Image;
  this.title = Title;
};

Doctor.prototype.getDoctors = function (medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function (response) {
    console.log(response);
    var allDoctors = [];
    for (var i = 0; i < response.data.length; i++) {
      var address = response.data[i].practices[0].visit_address.city + response.data[i].practices[0].visit_address.street + response.data[i].practices[0].visit_address.zip;

      var newDoctor = new Doctor(
        response.data[i].npi,
        response.data[i].practices[0].name,
        address,
        response.data[i].practices[0].phones[0].number,
        response.data[i].profile.first_name,
        response.data[i].profile.last_name,
        response.data[i].profile.bio,
        response.data[i].profile.gender,
        response.data[i].profile.image_url,
        response.data[i].profile.title
      );
      console.log(newDoctor);
      allDoctors.push(newDoctor);
    }
  })
  .fail(function(error){
     console.log("fail");
   });
};

exports.doctorModule = Doctor;
