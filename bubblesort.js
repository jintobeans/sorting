var swap = function(array, index1, index2){
    var temp = array[index2];
    array[index2] = array[index1];
    array[index1] = temp;
}
function bubbleSort(array) {
    if(!array.length){
        return array;
    }
    for(var j = 0; j<array.length;j++){
        for(var i =0;i < array.length;i++){
            var firstElem = array[i];
            var secondElem = array[i+1];
            if(firstElem > secondElem){
                swap(array, i , i+1);
            }
        }
    }
    return array;
}