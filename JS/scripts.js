// nowe komantarze są w modzie
 /* var name = prompt('Enter your name');
  alert('Hello, ' + name);
 console.log('Hello, ' + name);
*/
/*
var a = prompt ('Podaj wartość a');
var  h = prompt ('Podaj wartość h');
var triangleArea = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert('Hello, ' + triangleArea);
*/


var a = prompt ('Podaj wartość a');
var  b = prompt ('Podaj wartość b');
var wynik = (a * a) + (2 * a * b) - (b * b);
console.log(wynik);
var value = wynik;

if ( value > 0) {
    console.log('wynik dodatni');
} else if (value < 0 ) {
    console.log('wynik ujemny');
}
if ( value == 0) {
   console.log('jest rowny 0');
}
