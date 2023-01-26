var isSquare = function (n) {
    var output = Math.sqrt(n);
    console.log("n = " + n);

    output = Math.floor(output);
    console.log("output = "+ output);
    if (output * output == n) {
        return true;
    } else {
        return false;
    }

}