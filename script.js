function stringChop(str, size) {
	let res = []
	if(str.length=== 0){
		return res
	}

	let i=0;
	while(i<str.length){
		res.push(str.slice(i,i+size))
		i+=size;
	}
	return res
	
  // your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
  