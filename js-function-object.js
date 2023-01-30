//function
function startFsn(money){
    console.log('starting');
    console.log('now cool');
    console.log(money);
}

function add (num1, num2){
    console.log('num1=',num1,'num2= ',num2);
    var sum = num1 + num2 ;
    return sum;
}

//console.log(add(2,3));

//object

var student = {
    id: 2661,
    name: 'nahid',
    class: 1,
    marks: 32,
}

//console.log(student.name);

var shoppingCart = {
    books: 3,
    sunglass: 1,
    pen: 25,
    mouse:1,
}

// know about object property 

var properties = Object.keys(shoppingCart);
//console.log(properties);
var propertiesValue = Object.values(shoppingCart);
//console.log(propertiesValue);

shoppingCart.sunglass=15;
// console.log(shoppingCart)

for(var keys in shoppingCart){
     var keysValue =  shoppingCart[keys];
     console.log(keys, keysValue);
}
