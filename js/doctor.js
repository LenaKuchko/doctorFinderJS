var apiKey = require('./../.env').apiKey;

Doctor = function (Id, FirstName, LastName, Gender, Bio, Image) {
  this.id = Id;
  this.firstName = FirstName;
  this.lastName = LastName;
  this.gender = Gender;
  this.bio = Bio;
  this.imageUrl = Image;
  this.educations = [];
  this.rating = [];
};


// https://api.betterdoctor.com/2016-03-01/doctors?query=Headache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=be0bd2afb0a7bd3563618f219a39ad09
//
// https://api.betterdoctor.com/2016-03-01/doctors?query=skin&location=45.5231%2C-122.6765%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=be0bd2afb0a7bd3563618f219a39ad09
