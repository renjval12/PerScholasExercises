//Converting an array to a String
var names = ["John", "Bob", "Peter", "Alex","Frank"];

var len=names.length;
for(let i=0; i<len; i++)
{
    console.log(names[i].trim());
}


nameArray1=names.toString();
nameArray2=names.join("--");

//converting Strings to an Array

var days="Monday-Tuesday-Wednesday";


daysArray=days.split("-");

daysArray=days.split("");

//daysArray=days.split();

