console.log('first task:')
var string = 'Oh Hi Mark'

function lastcharacter(str){
    return str.slice(-1);
}
console.log( lastcharacter(string) );

console.log('second task:')
var string = 'How is your life?'

function withoutcharacter(str){
    return str.slice(0, -1);;
}
console.log( withoutcharacter(string) );

console.log('third task:')
var string = 'Good'
function reverseL(str){
    return str.split('').reverse();
}
console.log(reverseL(string));

console.log('fourth task:')
var string = '  How   is   yours? '
function deletespaces(str){
    return str.replace(/\s+/g, ' ').trim();;
}
console.log( deletespaces(string) );