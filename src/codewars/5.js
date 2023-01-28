function descendingOrder(n){
    var buf = ""+n+"";
    var arrbuf =[];

    for(var i=0; i<buf.length;i++){
        arrbuf.unshift(buf.charAt(i));
    }
    for(var i=0;i<arrbuf.length-1;i++){
        for(var j=1;j<arrbuf.length;j++){
            if(arrbuf[i]<arrbuf[j]){
                var a = arrbuf[i];
                arrbuf[i] = arrbuf[j];
                arrbuf[j] = a;
            }
        }
    }
    buf = Number(arrbuf);
    return buf;

}