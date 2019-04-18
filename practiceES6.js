let factorial=(n)=>
{
	let fact=1;

	for(var i=1;i<=n;i++)
	{
		//console.log(fact);
		fact*=i;
	}
	return fact;
}

console.log(factorial(5))