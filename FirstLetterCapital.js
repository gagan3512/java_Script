//create a variable in java-script using prompt
var name = prompt("Whats your name");

//captalize the first letter

var firstChar = name.slice(0,1);

var firstCharUpperCase = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);

var restOfName1 = restOfName.toLowerCase();
var captalizeName = firstCharUpperCase + restOfName1;


alert("hello " + captalizeName);
