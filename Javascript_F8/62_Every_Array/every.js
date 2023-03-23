

Array.prototype.every2 = function(cb){
    var output = true;;
    for(var index in this){
        if(this.hasOwnProperty(index)){
             var result = cb(this[index]);
             if(!result){
                output = false
                 break;
             }
            
        }
    }
    return output
}
// tất cả đều đúng = true 
var courses = [
    {
        name:'java',
        coin:509,
        isFInish: true
    },
    {
        name:'javascript',
        coin:50,
        isFInish:  true
    },
    {
        name:'php',
            coin:5900,
            isFInish:  true
    }]
    var result = courses.every(function(course,index,array){
        return course.coin > 70;
    })
    console.log(result);