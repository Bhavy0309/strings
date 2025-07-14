let infoAboutAString = 'this is a string'
function getString(info){
    console.log(info.length)
}
getString(infoAboutAString)
console.log(infoAboutAString.toUpperCase());
console.log(infoAboutAString.toLowerCase());
console.log(infoAboutAString.slice());
console.log(infoAboutAString.replaceAll(" " , '_'));
console.log(infoAboutAString.includes('bhavy'));
console.log(infoAboutAString.includes('this'));
console.log(infoAboutAString.indexOf('this'));
console.log(infoAboutAString.lastIndexOf('string'));
console.log(infoAboutAString.split(' '));
console.log(infoAboutAString.trimEnd(''));
console.log(infoAboutAString.trimStart(''));
console.log(infoAboutAString.startsWith('this'));
console.log(infoAboutAString.endsWith(' '));
console.log(infoAboutAString.charAt([3]));
console.log(infoAboutAString.concat('.'));
console.log(infoAboutAString.repeat(3));
console.log(infoAboutAString.substring(2 , 10));
let padString = infoAboutAString.padStart(20 , '.');
console.log(padString);
padString = infoAboutAString.padEnd(20 , '.');
console.log(padString)
console.log(infoAboutAString.match('this'))
console.log(infoAboutAString.replaceAll('this' , 'This'))

