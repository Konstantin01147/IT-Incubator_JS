function highAndLow(numbers){
    var arrNum = numbers.split(" ");
    var max = 0;
    var min = 0;
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