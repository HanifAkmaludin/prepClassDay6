function grade(n){
	if(n >= 90 && n <= 100){
		return "A";
	}else if(n >= 80 && n <= 89){
		return "B";
	}else if(n >= 70 && n <= 79){
		return "C";
	}else if(n >= 60 && n <= 69){
		return "D";
	}else{
		return "E";
	}
}

console.log(grade(70));
console.log(grade(30));
console.log(grade(85));