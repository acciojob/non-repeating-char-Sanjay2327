function firstNonRepeatedChar(str) {
 // Write your code here
	if (str.trim() === ""){
		return null
	};
	
	for (let i=0; i<str.length; i++){
		if(str[i-1] !== str[i] || str[i] !== str[i+1]){
			return str[i];
		}else {
			return null;
		};
	};
};
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
