import logger from './tools.js';
const addressees = ["John Uzo", "Mary Smart", "Paul Umoh"]; //array with elements.
addressees.map(addressee => {
    let message = `Dear ${addressee},
It is my pleasure to inform you that your admission
letter is ready for collection`;
    logger(message);
});