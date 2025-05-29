
//Creation Using Object Literal
let student={
    fistName : "fathima",
    secondName:"shafrin",
    age:26,
    place:"tirur",

   }
   console.log(student)
   console.log(student.age)
   //Creation Usi
   // ng new Object() Constructor
   let Obj = new Object()
   Obj.fistName ="hyzin";
   Obj.age=22
   Obj.place="kochi"
   console.log(Obj);
   //Basic Operations on JavaScript Objects
   console.log(student.fistName);
   console.log(student["age"]);
   //modify
   student.mark = 22;
   student.age=27
   
   delete student.age
   //delete
   console.log(student)
   //check property is exist
   console.log("mark" in student)
   //for..in
   for(let key in student){
    console.log(key + ":" + student[key])
   }
   //Sets
   let num = [1,2,3,4,5,6,3,66];
   let arr1 = new Set(num);
   arr1.add(25)
   console.log(arr1)

   //map
   let myMap = new Map();
let anotherMap = new Map([
    ['name', 'GFG'],
    ['age', 30],
    ['city', 'Noida']
]);
console.log(anotherMap);