function arrayDiff(a, b) {

    for (var j = 0; j < b.length; j++) {
        for(var i=0 ; i<a.length;i++){
            if (a[i] == b[j]) {
                a.splice(i,1);

                i--;

            }
        }
    }
    console.log(a);
    return a;
}
