'use strict'
/*

INPUT:
    - username
    - The year of birth


OUTPUT:
    - Message contain username , tell the user him age in years    



    1 - username
    2 - yearOfBirth
    3 - age = currentYear - yearOfBirth 

*/


let userName;
let yearOfBirth;
let currentYear;
let age;

userName  = prompt('Enter Your Name');
yearOfBirth = prompt('Enter Year Of Birth' , '1991 , 2000 ..etc');
currentYear = 2022;
age = currentYear - yearOfBirth;

alert(`Welcome ${userName} , You have ${age} Years Old`);