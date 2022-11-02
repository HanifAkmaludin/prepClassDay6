// function tahunkabisat(year){
// 	if(year % 400 === 0){
// 		return "Tahun Kabisat";
// 	}else if(year % 100 === 0){
// 		return "Bukan tahun kabisat";
// 	}else if(year % 4 === 0){
// 		return "Tahun Kabisat";
// 	}else{
// 		return "Bukan tahun kabisat";
// 	}
// }

// console.log(tahunkabisat(1900));
// console.log(tahunkabisat(2000));
// console.log(tahunkabisat(2001));
// console.log(tahunkabisat(2016));

function staircase(n) {
    // Write your code here
    for(let i = 0; i < n; i++){
        let result = "";
        for(let j = 0; j <= n; j++){
            if(j >= (n - i) && j <= n){
                result += "#";
            }else{
                result += " ";
            }
        }
        console.log(result);
    }
    
}

staircase(6);