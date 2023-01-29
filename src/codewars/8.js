function arrayDiff(a, b) {
    for (var i = 0; i < a.size; i++) {
        if (a[i] == b) {
            a = a.delete(i);
            i--;
        }
    }
    return a;
}
