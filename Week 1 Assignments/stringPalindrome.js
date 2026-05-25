//To verify whether the given string is Palindrome or not
/*
Write a function to reverse the string. 
1. Convert the input into characters 
2. Loop them in reverse direction 
3. Concatenate the string 
4. Print the new string 
Write a function to check the given string is a palindrome 
[If the given string and reverse string are the same, it is a palindrome] 
1. Check if the reverse string and original string are the same 
 2. Return true if same, else the false.*/


let str = "Tamil"

function isPalindrome(str){
    let reverse= str.split("")
    let newstr=""
for(let i=reverse.length-1;i>=0;i--){
    newstr=newstr+reverse[i]


}
if(str==newstr){
    console.log(str+": is a Palindrome")
}
else{
    console.log(str+": is not a Palindrome")
}
}
isPalindrome(str)
