import log, {Person} from './tools';
let person1 = new Person("Ifeoluwa", "Afolabi", "Male",1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter
log(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is $ {person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName.

import log, {User} from './tools';
let user1 = new User("myusername","mypassword","Ifeoluwa","Afolabi","Male",undefined);
log(`The username of ${user1.firstName} is ${user1.username}`)