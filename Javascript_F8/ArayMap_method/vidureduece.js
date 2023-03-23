Array.prototype.reduce2 = function(callback, Result){
      let i = 0
      if(arguments.length<2){ 
        i = 1
        Result = this [0]
      }
  for (;i <this.length;i++){

    // if (arguments.length<2){
    //          Result = this[0]
    // }
        Result = callback(Result, this [i],i,this)
  }
  return Result
}
const numbers = [1,2,3,4,5]
const Result = numbers.reduce2((total,number,index,aray) =>{
   console.log(total,number,index,aray);
    return total + number
})
console.log(Result);
// total == call back == gọi lại
const numberaa =[1,2,3,4,5 ]
function suss(index,valua) {
  console.log(index,valua);
}