var isSquare = function (n) {
    var output = Math.sqrt(n);
    Math.floor(output);
    if (output * output == n) {
        return true;
    } else {
        return false;
    }

}