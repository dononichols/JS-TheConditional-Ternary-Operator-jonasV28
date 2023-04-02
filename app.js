// the Conditional Operator allows us to write something similar to an 'If Statement', except it's all in one line


 const age = 23;
 /*
 // above: age input from user. 
 // below: if the age is greater or equal to 21, you can drink, else, no drinking
 age >= 21 ? console.log('you can drink.') : console.log('No drinking!');
*/

// Note: the Conditional is an operator. And an operator always produces an expression. This means it can be assigned to a variable.
// Like the below example:

const drink = age >= 21 ? 'Wine!' : 'water!';
console.log(drink);

// Note: you can use the Ternary Operator in a Template Literal. example below:

console.log(`At my age i am permitted to drink ${age >= 21 ? 'wine' : 'water'}`);
