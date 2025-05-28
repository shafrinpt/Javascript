//Closures
//A closure gives you access to an outer function’s variables from an inner function, even after the outer function has returned.
function Count(){
    let Counts = 0;
    function innerValue(){
        Counts++;
        console.log(Counts);
    }
    return innerValue

}
const newCount = Count()
newCount()
newCount()
//example 2
function myName(){
    let name = "Fathima Shafrin pt";
    function newName(){
        console.log(name);
    }
 return(newName)
}
const closureFun = myName();
closureFun()