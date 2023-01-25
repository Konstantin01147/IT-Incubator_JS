function alphabetPosition(text) {
//   if(text.length==0){
//     return '1';
//   }
    text.toLowerCase();
    var output = "";
    var i=0;
    while(i< text.length){
        switch(text.charAt(i)){
            case 'a':
                output += "1 ";
                break;
            case 'b':
                output += "2 ";
                break;
            case 'c':
                output += "3 ";
                break;
            case 'd':
                output += "4 ";
                break;
            case 'e':
                output += "5 ";
                break;
            case 'f':
                output += "6 ";
                break;
            case 'g':
                output += "7 ";
                break;
            case 'h':
                output += "8 ";
                break;
            case 'i':
                output += "9 ";
                break;
            case 'j':
                output += "10 ";
                break;
            case 'k':
                output += "11 ";
                break;
            case 'l':
                output += "12 ";
                break;
            case 'm':
                output += "13 ";
                break;
            case 'n':
                output += "14 ";
                break;
            case 'o':
                output += "15 ";
                break;
            case 'p':
                output += "16 ";
                break;
            case 'q':
                output += "17 ";
                break;
            case 'r':
                output += "18 ";
                break;
            case 's':
                output += "19 ";
                break;
            case 't':
                output += "20 ";
                break;
            case 'u':
                output += "21 ";
                break;
            case 'v':
                output += "22 ";
                break;
            case 'w':
                output += "23 ";
                break;
            case 'x':
                output += "24 ";
                break;
            case 'y':
                output += "25 ";
                break;
            case 'z':
                output += "26 ";
                break;
            default:
            //break;
        }
        i++;
    }
    output.trimEnd();
    return output;
}
var comeString = alphabetPosition("The sunset sets at twelve o' clock.");
console.log(comeString);
