function highAndLow(numbers){
    var arrNum = Number.valueOf(numbers.split(" "));
    var max = arrNum[0];
    var min = arrNum[0];
    for(var i=0;i<arrNum.length;i++){
        if(arrNum[i]<min){
            min=arrNum[i];
        }

    }
    for(var i=0;i<arrNum.length;i++){
        if(arrNum[i]>max){
            max=arrNum[i];
        }
    }
    return ""+max+" "+min;
}