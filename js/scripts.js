/*1. Check if a string contains the word word in it (case insensitive). If you have no idea, I guess you could try /word/.*/


const regex = RegExp(/\bword\b/, 'gi');
console.log(regex.test('word my word'))


/*2. Use substitution to replace every occurrence of the word i with the word I (uppercase, I as in me). E.g.: i'm replacing it. am i not? -> I'm replacing it. am I not?.
A regex match is replaced with the text in the Substitution field when using substitution.*/

const inputString = "i'm replacing it. am i not?";
const regex2 = RegExp(/\bi\b/, 'g');
const resultString = inputString.replace(regex2, 'I');
console.log(resultString);


/*3. With regex you can count the number of matches. Can you make it return the number of uppercase consonants (B,C,D,F,..,X,Y,Z) in a given string? E.g.: it should return 3 with the text ABcDeFO!. Note: Only ASCII. We consider Y to be a consonant!
Example: the regex /./g will return 3 when run against the string abc.*/

const inputString3 = "ABcDeFO!";
const regex3 = RegExp(/[BCDFGHJKLMNPQRSTVWXYZ]/, 'g');
const uppercase = inputString3.match(regex3);
console.log(uppercase.length);


/*4. Count the number of integers in a given string. Integers are, for example: 1, 2, 65, 2579, etc.*/

const inputString4 = "1, 2, 65, 2579, 0.5, ghbd, 87965";
const regex4 = RegExp(/\d+/, 'g');
const count = inputString4.match(regex4);
console.log(count.length);

/*5.Find all occurrences of 4 or more whitespace characters in a row throughout the string.*/

const inputString5 = "Find    all occurrences";
const inputString6 = "Find all occurrences";
const regex5 = RegExp(/\s{4,}/, 'g');
console.log(regex5.test(inputString5));
console.log(regex5.test(inputString6));



