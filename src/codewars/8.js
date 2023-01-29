function arrayDiff(a, b) {
    for (var i = 0; i < a.size; i++) {
        if (a[i] == b) {
            a = a.splice(i);
            i--;
        }
    }
    return a;
}
