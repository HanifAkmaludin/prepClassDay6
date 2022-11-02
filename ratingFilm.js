function ratingFilm(n){
	if(parseInt(n) >= 21){
		return "Dewasa";
	}else if(parseInt(n) >= 13){
		return "Remaja";
	}else if(parseInt(n) >= 9){
		return "Bimbingan Orang Tua";
	}else{
		return "Semua Usia";
	}
}

console.log(ratingFilm(15));
console.log(ratingFilm(22));
console.log(ratingFilm(7));