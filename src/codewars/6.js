function highAndLow(numbers){
    var max = 0;
    var min = 0;
    for(var i=0;i<numbers.length;i++){
        if(numbers[i]<min){
            min=numbers[i];
        }
        if(numbers[i]>max){
            max=numbers[i];
        }
    }
    return ""+max+" "+min;
}