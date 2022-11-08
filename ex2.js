const grd = 56;
let letter = " ";
if(grd <= 100 && grd >= 97){
    letter = "A+";
}else {
    if(grd >= 93 && grd <= 96){
    letter = "A";
    }
}if(grd >= 90 && grd <= 92){
letter = "A-";
    } else {
    if(grd >= 87 && grd <= 89)
    letter = "B+";
} if(grd >= 83 && grd <= 86){
    letter = "B";
} else{
    if(grd <= 82 && grd >= 80){
        letter = "B-";
    } 
} if(grd <= 79 && grd >= 77){
    letter = "C+";
} else{
    if(grd >= 73 && grd <= 76){
    letter = "C";
}
}if(grd >=70 && grd <= 72){
    letter = "C-";
} else{
    if(grd >= 67 && grd <= 69){
        letter = "D+";
    }
} if(grd >= 63 && grd <= 66){
    letter = "D";
} else{
    if(grd >= 60 && grd <= 62){
        letter = "D-";
    }
} if(grd >= 0 && grd <= 60){
    letter = "F";
}

switch (letter) {
    case "A+":
        console.log("Your grade is " + grd + " which coressponds to A +. You passed!" );
        break;
    case "A":
        console.log("Your grade is " + grd + " which coressponds to A . You passed!" );
         break;
    case "A-":
        console.log("Your grade is " + grd + " which coressponds to A -. You passed!" );
        break;
    case "B+":
        console.log("Your grade is " + grd + " which coressponds to B + . You passed!" );
        break;
    case "B":
        console.log("Your grade is " + grd + " which coressponds to B . You passed!" );
        break;
    case "B-":
        console.log("Your grade is " + grd + " which coressponds to B -. You passed!" );
        break;
    case "C+":
        console.log("Your grade is " + grd + " which coressponds to C + . You passed!" );
        break;
    case "C":
        console.log("Your grade is " + grd + " which coressponds to C . You passed!" );
        break;
    case "C-":
 console.log("Your grade is " + grd + " which coressponds to C - . You passed!" ); 
break;
case "F":
    console.log("Your grade is " + grd + " which coressponds to F . You failed!");
    break;
}

