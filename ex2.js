let grd = 100;
let letter = " ";
if(grd <= 100 && grd >= 97){
    letter += "A+";
}else {
    if(grd >= 93 && grd <= 96){
    letter += "A";;
    }
}if(grd >= 90 && grd <= 92){
letter += "A-";
    } else {
    if(grd >= 87 && grd <= 89)
    letter += "B+";
} if(grd >= 83 && grd <= 86){
    letter += "B";
} else{
    if(grd <= 82 && grd >= 80){
        letter += "B-";
    } 
} if(grd <= 79 && grd >= 77){
    letter += "C+";
} else{
    if(grd >= 73 && grd <= 76){
    letter += "C";
}
}if(grd >=70 && grd <= 72){
    letter += "C-";
} else{
    if(grd >= 67 && grd <= 69){
        letter += "D+";
    }
} if(grd >= 63 && grd <= 66){
    letter += "D";
} else{
    if(grd >= 60 && grd <= 62){
        letter += "D-";
    }
} if(grd >= 0 && grd <= 60){
    letter += "F";
} console.log (letter);
switch (letter) {
    case "A+":
    case "A":
    case "A-":
    case "B+":
    case "B":
    case "B-":
    case "C+":
    case "C":
    case "C-":
 console.log("Your grade is " + grd + " which coressponds to " + letter + ". You passed!" ); 
break;
default:
    console.log("Your grade is " + grd + " which coressponds to " + letter + ". You failed!");
}

