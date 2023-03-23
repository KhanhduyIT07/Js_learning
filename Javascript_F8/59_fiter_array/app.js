


//filter 
// tra ve tat ca element thoa mang dk ve moy mang moi
Array.prototype.filter2 =function(callback){
    var output=[]
    for(var index in this){
        if(this.hasOwnProperty(index)){
        var result = callback(this[index],index,this);
           if(result){
            output.push(this[index]);
           }
    }
    }
    return output;
}
var courses = [
    {
        name:'java',
        coin:509
    },
    {
        name:'javascript',
        coin:50
    },
    {
        name:'php',
            coin:5900
    }

];
var filterCourses = courses.filter2(function(course,index,array){
 return course.coin>200;

})
console.log(filterCourses);