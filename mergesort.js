var split = function (wholeArray){
    if(wholeArray.length){
        var halfIndex = wholeArray.length / 2;
        var firstHalf = wholeArray.slice(0, halfIndex);
        var secondHalf = wholeArray.slice(halfIndex);
        console.log('1', firstHalf);
        console.log('2', secondHalf);
        return [firstHalf, secondHalf];    
    }
    return wholeArray;
    
}

var mergeSort = function(arrayOfArrays){
    var sorted = [];
    var firstNum = arrayOfArrays[0][0];
    var secondNum = arrayOfArrays[1][0];
    console.log('firstnum', firstNum);
    console.log('secondnum', secondNum);
    if(firstNum < secondNum){
        (sorted.push(arrayOfArrays[0].shift()));
    }else{
        (sorted.push(arrayOfArrays[1].shift()));
        
    }
   
    if(arrayOfArrays[0].length === 0 || arrayOfArrays[1].length === 0){
        console.log(arrayOfArrays);
        if(arrayOfArrays[0].length){
            sorted.concat(arrayOfArrays[0].length);
        }else{
            sorted.concat(arrayOfArrays[1].length);
        }
    }
    return sorted;
}