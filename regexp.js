'use strict';

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str => `<span>${str}</span>`);
}

var str = `Is this This?`;

//var regex = new RegExp("is", "g");
var regex = /is/gi;

// output(str, regex, document.querySelector('pre'))

// console.log(regex.test(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));
// console.log(str.match(regex));
// console.log(str.replace(regex, str => "XX"));
// console.log(str.search(regex));



var str = `800-456-7890
(555) 456-7890
4564567890`;

var regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
var regex = /foo(?!bar|boo)/g // foo po ktorym nie ma bar lub boo ?=
var regex = /\Bis\B/g // \b koniec słowa
var regex = /<(\w)>(.+)<\/\1/ // \1 => pierwsza grupa

var str = `<b>Bold</b><i>italics</i>`;
var regex = /<(\w+)>(.*)<\/\1>/g;

console.log(str.replace(regex, '$2\n'));

console.log(str.replace(regex, 'area code: $1'))