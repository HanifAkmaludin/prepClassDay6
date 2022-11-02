function ganjilGenap(n){
	if(parseInt(n) % 2 === 0){
		return "Genap";
	}else{
		return "Ganjil";
	}
}

console.log(ganjilGenap(43));
console.log(ganjilGenap(1032));