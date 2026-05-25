// Determine whether the number is Positive or Negative or Zero 
let num = -0.559896
let numberformat
isPositiveOrNegative(num)


function isPositiveOrNegative(num){
    if(num>0){
       numberformat = "P"
    }
    else if(num<0){
         numberformat = "N"
    }
    else{
         numberformat = "Z"
    }
}

switch(numberformat){
    case "P":
        console.log(num+": is a Positive Number")
        break;
        case "N":
            console.log(num+ ":  is a Negative Number")
            break;
            case "Z":
                console.log(num+ ": is Zero")
                break;
                default:
                    console.log("Invalid Number")
            break;
}