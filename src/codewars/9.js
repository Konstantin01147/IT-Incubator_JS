var countBits = function(n) {
    var bitsArr = Array.from(String(n),Number);
    var numberOfOnes = 0;
    console.log(bitsArr);
    for(var i=0;i<bitsArr.length;i++){
        if(bitsArr[i]==1){
            numberOfOnes++;
        }
    }
    return numberOfOnes;
};