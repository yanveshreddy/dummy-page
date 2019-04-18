var a="Hii Anvesh"
var b="Welcome to Programming";
var x=56;
var y=62;
var c=`${a} \n ${b} \n ${x+y}`
console.log(c);
//alert(c);

let customerinfo=[
{
"custid":1004,
"custname":"Anvesh"
},
{
	'custid':1005,
	"custname":"Farfu"
}

]
let customerObject=
{
	name:"Anvesh",
	mobile:8008434433,
	email:"anvesh.y@gmail.com"
}
for(x in customerObject)
{
console.log(x)
//console.log(customerinfo[x]);
}
