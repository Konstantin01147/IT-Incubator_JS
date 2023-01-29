function highAndLow(numbers){
    var max = 0;
    var min = 0;
    for(var i=0;i<numbers.length;i++){
        if(min<numbers[i]){
            min=numbers[i];
        }
        if(max>numbers[i]){
            max=numbers[i];
        }
    }
    return ""+max+" "+min;
}