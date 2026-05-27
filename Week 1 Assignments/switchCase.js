//Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement to assess score ranges. 

let studentScore = 75
gradeCalculation(studentScore)
function gradeCalculation(studentScore){

    switch (true){
        case (studentScore >=90):
            console.log("Grade A");
            break;
        case(studentScore >=80 && studentScore <90):
            console.log("Grade B");
            break;
        case(studentScore >=70 && studentScore <80):
            console.log("Grade C");
            break;
        case(studentScore >=60 && studentScore <70):
            console.log("Grade D");
            break;
        case(studentScore >=50 && studentScore <60):
            console.log("Grade E");
            break;
        case(studentScore <50):
            console.log("Grade F");
            break;
        default:
            console.log("Invalid Score");
            break;
    }
}
