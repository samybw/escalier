
var nombre = process.argv[2];

var i = 1;
var j = nombre
var diese = "#";
var space = " "


while (i <= nombre || j >= i) {
    console.log(space.repeat(j-- -1)+diese.repeat(i++));
    
}

