var apiKey = require('./../.env').apiKey;

Practice = function (Id, Name, Address, Phone) {
  this.id = Id;
  this.name = Name;
  this.address = Address;
  this.phone = Phone;
  this.doctors = [];
};

Practice.prototype.getPractices = function (searchParam) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function (response) {
    console.log(response);
  })
  .fail(function(error){
     console.log("fail");
   });
};
// Practice.prototype.getDoctors = function() {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ 'Toothache'+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//    .then(function(result) {
//       console.log(result);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };

exports.practiceModule = Practice;
//
// https://api.betterdoctor.com/2016-03-01/practices?name=skin&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=be0bd2afb0a7bd3563618f219a39ad09
