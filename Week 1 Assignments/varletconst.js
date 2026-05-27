//Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave  differently when printed. 
const browserName = "Chrome"

getBrowserNameTestLet()
getBrowserNameTestVar()

function getBrowserNameTestLet(){
    if(true){
        let browserName = "firefox"
        console.log(browserName +": from getBrowserNameTestLet function - inside if block");
      
        
    }
     console.log(browserName +": from getBrowserNameTestlet function - Outside If Block");

}

function getBrowserNameTestVar (){
    if(true){
        var browserName = "Safari"
         console.log(browserName +": from getBrowserNameTestVar function - inside if block");
    
    }
     console.log(browserName +": from getBrowserNameTestVar function - Outside if block");
   

}



