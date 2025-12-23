function stringChop(str, size) {
	let res = []
	if(str.length=== 0){
		return null
	}
	if(str.length<=size){
		res.push(str)
		return str  
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
  