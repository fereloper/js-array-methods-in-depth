//Array.prototype.join()

// Typical way
var names = ['John', 'Doe'];
console.log(names[0] + " " + names[1]);

console.log(names.join(" ")); // Here empty space is glue
console.log(names.join()); // By default , is a glue

var help = [
    "usage",
    '   foo-app <input>'
];

if(process.argv[2] === 'help') { //getting the 3rd value from commandline i.e: node join.js help
    console.log(help.join('\n'));
}

// Real world example

var name = 'feroj bepari';

var upper = name.split(" ")//Output: [feroj, bepari]
    .map(function(x){
        x.charAt(0).toUpperCase() + x.slice(1); //Output: [Feroj, Bepari]
    })
    .join(" ");
console.log(upper); //Output:  Feroj Bepari


