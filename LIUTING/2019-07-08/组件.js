var value = 'abcd';
var valueB = 'efg';
(_class = 
    (_temp = _class2 = function a(value){console.log(value)}(value), _temp ), 
    function b(valueB){console.log(valueB)}(valueB), 
    _class)

// _class2.displayName = 'Lov'


// var Lov = ( 
//     _dec = Bind(), 
//     _dec2 = Bind(),
//     (_class = (_temp = _class2 = function a(){}(), _class2.displayName = 'Lov', _temp ), test(), _class)
// )
// export { Lov as default };
var va, vb, vc;
function fa(){return this;}
var Lov = (
    va = fa(), 
    vb = fa()
);
console.log('Lov:'+Lov)

let obj = {};
let antzone = Symbol("antzone");
let ant = Symbol("ant");
obj[antzone] = "antzone";
Object.prototype[ant] = "ant";
obj.url = "www.softwhy.com";
   
let symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols);