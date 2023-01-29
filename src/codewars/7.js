const binaryArrayToNumber = arr => {
    var output = 0;
    for(var i=0,j=0;i<arr.size;i++){
        if(arr[i]!=0){
            output+=Math.pow(2,i-arr.size);
        }
    }
    return output;
};