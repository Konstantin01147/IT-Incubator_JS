const binaryArrayToNumber = arr => {
    var output = 0;
    for(var i=arr.size,j=0;i>0;i++,j++){
        if(arr[i]!=0){
            output+=Math.pow(2,j);
        }
    }
    arr=output;
};