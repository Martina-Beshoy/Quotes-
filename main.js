// 1- Write a program that allow to user enter number then printit
// var number = window.prompt("Enter Number");
// window.alert(number)

// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// var number = window.prompt("Enter Number");
// number= Number(number);
// if(number%3==0&& number%4==0){
//     window.alert("yess")
// }
// else {
//     window.alert("noo")
// }
// 3- Write a program that allows the user to insert 2 integers then print the max
// var number1 = Number( window.prompt("Enter Number1"));
// var number2 = Number( window.prompt("Enter Number2"));
// if(
//     number1>number2){
//         window.alert(number1)
//     }
// else{
//     window.alert(number2)
// }
// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
//  var number = Number( window.prompt("Enter Number"));
//  if(number<0){
//     window.alert("it is negative")
//  }
// else{
//     window.alert("it is positive")
// }
// 5- Write a program that take 3 integers from user then print the max element
// and the min element.
//  var number1 = Number( window.prompt("Enter Number1"));
//  var number2 = Number( window.prompt("Enter Number2"));
//   var number3 =  Number( window.prompt("Enter Number3"));

//   if(
//     number1>number2 && number1 > number3
//   ){
//     window.alert("max Number is 1." )
//   }
//   else if(number2> number1 && number2>number3){
//     window.alert("max Number is 2.")
//   }
//   else if(number3> number1 && number3> number2){
//     window.alert("max Number is 3.")
//   }

//  if(number1< number2 && number1<number3){
//     window.alert("min Number is 1." )
//   }
//    else if(number2< number3 && number2<number1){
//     window.alert("min Number is 2." )
//   } else if(number3< number1 && number3<number2){
//     window.alert("min Number is 3." )
//   }
// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd
//  var number = Number( window.prompt("Enter Number"));
// if(Number%2==0){
//     window.prompt("it is even")
// }else{
//     window.prompt("it is odd")
// }
// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// var char = window.prompt("enter your char")
// switch (char) {
//     case'a' :
//     case'e' :
//     case'i' :
//     case'o' :
//     case'u' :

//     window.alert("it is vowel")
//     break;
//     default: window.alert("it is consonant")
//     break;
// }
// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number
// var number =Number(window.prompt("enter a number "))
// for(var i=1 ;i<=number; i++){
// window.alert(i)
// }
// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
//  var number =Number(window.prompt("enter a number "))
//  for( var i=1 ; i<=12; i++){
//     window.prompt(i*12)
//  }
// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number
//  var number =Number(window.prompt("enter a number "))
//  for (var i=1 ; i<=number ;i++){
//     if (i%2==0){
// window.alert(i)
//     }
//  }
// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
//  var number =Number(window.prompt("enter a number "))
//   var power =Number(window.prompt("enter a power "))
// var result=number**power;
// window.alert(result)
// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
// var total =0;
// for(var i=0 ; i<5 ; i++){
//     total+=Number(window.prompt("enter mark subject"+(i+1)));
// }
// window.alert("total marks" +total);
// window.alert("average" +total/5);
// window.alert("percentage" +total/500*100);
// 13-Write a program to input month number and print number of days in that month.
//   var monthnumber =Number(window.prompt("enter a month number "))
//   if (monthnumber==1|| monthnumber==3 || monthnumber==5 || monthnumber==7 || monthnumber==8 || monthnumber==10 || monthnumber==12){
//     window.alert("31")
//   }else if(
//     monthnumber==2
//   ){
//     window.alert("28 days in common year and 29 in leap years")
//   }
// else if( monthnumber==2 || monthnumber==4|| monthnumber==||9|| monthnumber==|11){
//         window.alert("30")

// }
// 14-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// var physicsMark =Number(window.prompt("enter physics marks"));
// var chemistryMark =Number(window.prompt("enter chemistry marks"));
// var biologyMark =Number(window.prompt("enter biology marks"));
// var MathematicssMark =Number(window.prompt("enter mathematics marks"));
// var ComputerMark =Number(window.prompt("enter computer marks"));

// var percentage= (physicsMark+chemistryMark+biologyMark+MathematicssMark+ComputerMark)/500*100;
// if (percentage>= 90){
//     window.alert("Grade A")
// }
// else if (
// percentage<80
// ){
//     window.alert("Grade B")
// }
// else if (
// percentage<70
// ){
//     window.alert("Grade C")
// }
// else if (
// percentage<60
// ){
//     window.alert("Grade D")
// }
// else if (
// percentage>=40
// ){
//     window.alert("Grade F")
// }
// else if (
// percentage<40
// ){
//     window.alert("Grade F")
// }
// 15- Write a program to print total number of days in month
// var month = Number(prompt("Enter month number (1-12):"));
// switch(month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         alert("31 days");
//         break;
//     case 4: case 6: case 9: case 11:
//         alert("30 days");
//         break;
//     case 2:
//         alert("28 or 29 days");
//         break;
//     default:
//         alert("Invalid month number");
// }
// 16- Write a program to check whether an alphabet is vowel or consonant
// var ch = prompt("Enter a character:").toLowerCase();
// switch(ch) {
//     case 'a': case 'e': case 'i': case 'o': case 'u':
//         alert("Vowel");
//         break;
//     default:
//         alert("Consonant");
// }
// 17- Write a program to find maximum between two numbers
// var a = Number(prompt("Enter first number:"));
// var b = Number(prompt("Enter second number:"));
// switch(true) {
//     case (a > b):
//         alert("Max is " + a);
//         break;
//     case (b > a):
//         alert("Max is " + b);
//         break;
//     default:
//         alert("Both are equal");
// }
// 18- Write a program to check whether a number is even or odd
// var num = Number(prompt("Enter a number:"));
// switch(num % 2) {
//     case 0:
//         alert("Even");
//         break;
//     case 1:
//     case -1:
//         alert("Odd");
//         break;
// }
// 19- Write a program to check whether a number is positive or negative or zero
// var num = Number(prompt("Enter a number:"));
// switch(true) {
//     case (num > 0):
//         alert("Positive");
//         break;
//     case (num < 0):
//         alert("Negative");
//         break;
//     case (num === 0):
//         alert("Zero");
//         break;
// }
// 20- Write a program to create Simple Calculator
// var num1 = Number(prompt("Enter first number:"));
// var operator = prompt("Enter operator (+, -, *, /):");
// var num2 = Number(prompt("Enter second number:"));
// switch(operator) {
//     case '+':
//         alert(num1 + num2);
//         break;
//     case '-':
//         alert(num1 - num2);
//         break;
//     case '*':
//         alert(num1 * num2);
//         break;
//     case '/':
//         alert(num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
//         break;
//     default:
//         alert("Invalid operator");
// }
