function firstNonRepeatedChar(str) {
 // Write your code here
	if (str.trim() === ""){
		return null
	};
	
	for (let i=0; i<str.length; i++){
		let char = "" ;
		for(let j=i+1; j<str.length; j++)
		if(str[i] === str[j]){
			char += str[i];
			return char;
		}else {
			return null;
		};
	};
};
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
