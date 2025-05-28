//Arrays- add and Remove Top of the Array
//pop&push
let arr = ["fathima","shafrin","sanub"];
arr.push("hyzin");
// console.log(arr)

arr.pop();
// console.log(arr)

//shift&unshift
arr.unshift("ravi");//add in top of the array
// console.log(arr)

arr.shift();
// console.log(arr);
//looping an Array
let arr2 = [1,2,3,5,6,7,88];
for(let i=0;i<=arr.length;i++){
    console.log(arr[i])
}
let i = 0;
while(i<=arr.length){
    console.log(arr[i]);
    i++;
}
//inbuild loop methord
//map
const MapValue = arr2.map((item)=>{
    return item +1
});
console.log(MapValue)

//filter
const filterMethord = arr2.filter((val)=>{
    return val >3;

})
console.log(filterMethord);
//reduce
const reduceValue = arr2.reduce((val,item)=>{
    return val + item
},0);
console.log(reduceValue);
//some&every(t/f)
const someMethord = arr2.some((item)=>{
    return item >3
})
console.log(someMethord);

//every

const everyMethord = arr2.every((item)=>{
    return item < 5
})
console.log(everyMethord)
//find
const findMethord = arr2.find((item)=>{
    return item >10 ;
})
console.log(filterMethord)

const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(num => num > 10);

console.log(found); 

//spread and rest Operaters(imp)

//More Array Methords
//concat
//slice
//Splice
//fill
//findIndex(callback)
//Falt
//reverse
//sort


