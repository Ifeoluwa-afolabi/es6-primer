//Create a function that will capitalize the first letter of a string.
const toTitleCase = (str) => {
   str.toLowerCase();//first set the whole string to lowercase in case
   return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase
  }
  export class Person{
   constructor(firstName, lastName, gender, height){
   this.firstName = firstName;
   this.lastName = lastName;
   this.gender = gender;
   this.height = height
   }
   getFirstName(){
   return toTitleCase(this.firstName)
   }
  }