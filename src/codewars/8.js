function arrayDiff(a, b) {

    for (var i = 0; i < a.length; i++) {

        if (a[i] == b[0]) {
            a.splice(i,1);

            i = 0;

        }

    }
    console.log(a);
    return a;
}
