# Doctor Lookup
## Created by Olena Kuchko

### Description
A web application which allow user search for doctors by name, specialities and health issues.

### Installation
1. Download or clone the repository from https://github.com/LenaKuchko/doctorFinderJS.git
2. Using terminal, navigate to the directory in which you downloaded project.
3. In terminal run  $ npm install to install $ npm package
4. In terminal run $ bower install to install $ bower package
5. You might need to install node.js. Download it here: https://nodejs.org/en/
6. To get an API key, please, visit https://developer.betterdoctor.com/ website and sign up
7. In the root folder of the project directory, create a ".env" file
8. ".env" file should have this line of code usingexports.apiKey = "place your Key here"
9. To run app execute this commands in terminal $ gulp build and $ gulp serve

### Specs

| Behavior | Input | Output |
|----------|-------|--------|
|User is able to search by name | "Rieman" | App displays all doctors with last name "Rieman" |  
|User is able to search by medical condition | "depression" | App displays list of all doctors who treat depression |
|User is able to search by medical condition and name | "Rieman", "depression"| App displays doctors with last name "Rieman" who treat depression |
|User is able to find all doctors by speciality | "Dentistry"| App displays list of all doctors whose speciality is  Dentistry |
|User is able to view doctor's profile.| Click on doctor's name | App displays detail information about current doctor (photo, description, address, phone number) |

## Technologies Used

* Bootstrap
* CSS
* HTML
* Javascript
* JSON
* SASS

#### License
This project is licensed under the MIT License.
Copyright (c) 2017  Olena Kuchko
