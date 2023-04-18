let age=prompt("Enter your age:")
if(age<18)
{
    console.log("You are not old enough to drive.")
}
else{
    console.log("You can drive.")
}


let yourage=prompt("Enter your age:")
var myage=18
var dif1=myage-yourage
var dif2=yourage-myage
if(myage<yourage)
{
    console.log(`your are ${dif2} year older than me` )
}
else
{
     console.log(`your are ${dif1} year younger than me` )
   
}


let num=prompt("Enter the number:")
if(num%2==0)
{
    console.log(`${num} is an even number.`)
}
else
{
    console.log(`${num} is an odd number.`)
}