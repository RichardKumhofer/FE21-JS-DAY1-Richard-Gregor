var fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

var fruitsTemp = new Array();

fruitsTemp = fruits.split("/");

for(let i=0; i<fruitsTemp.length; i++) {
    document.write(fruitsTemp[i] + "<br>");
}

