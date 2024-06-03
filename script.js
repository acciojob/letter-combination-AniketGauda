function letterCombinations(input_digit) {
  //Complete the function
	let obj = {
        0:"0",
        1:"1",
        2:"abc",
        3:"def",
        4:"ghi",
        5:"jkl",
        6:"mno",
        7:"pqrs",
        8:"tuv",
        9:"wxyz"
    }

    let a = parseInt(input_digit[0]);

    let arr = obj[a].split("");
    

    for(let i=1;i<input_digit.length;i++){
        let a = parseInt(input_digit[i]);

        let brr = obj[a].split("");

        let tmp=[];

        for(let I=0;I<arr.length;I++){
            for(let J=0;J<brr.length;J++){
                tmp.push(arr[I]+brr[J]);
            }
        }
        arr=tmp;
    }
    return arr;
}

module.exports = letterCombinations;
