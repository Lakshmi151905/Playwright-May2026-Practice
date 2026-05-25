//Learn if-else and switch case -Practice

/*Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 
 
Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript*/

let browser = "Mozilla Firefox"
let testType = "regression"

function launchBrowser(browser){
    if(browser=="chrome"){
        console.log("Chrome browser launched")
    }
    else{
        console.log("Other browser launched")
    }
}

function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("Smoke test executed")
            break;
        case "sanity":
            console.log("Sanity test executed")
            break;
        case "regression":
            console.log("Regression test executed")
            break;
        default:
            console.log("Smoke test executed")
            break;
    }
}

launchBrowser(browser)  
runTests(testType)
