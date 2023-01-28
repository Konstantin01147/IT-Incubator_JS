function descendingOrder(n){
    var buf = ""+n+"";
    var arrbuf =[];

    for(var i=0; i<buf.length;i++){
        arrbuf.unshift(buf.charAt(i));
    }
    console.log(arrbuf);
    for(var i=0;i<arrbuf.length-1;i++){
        for(var j=0;j<arrbuf.length;j++){
            if(arrbuf[j]<arrbuf[j+1]){
                var a = arrbuf[j];
                arrbuf[j] = arrbuf[j+1];
                arrbuf[j+1] = a;
            }
        }
    }


    buf="";
    for(var i = 0;i<arrbuf.length;i++){
        buf+=arrbuf[i];
    }
    console.log(buf);
    buf = Number(buf);
    return buf;

}