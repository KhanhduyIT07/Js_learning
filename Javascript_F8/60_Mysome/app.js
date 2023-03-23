

Array.prototype.mySome = function(cb) {
    var endResult = false
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var results = cb(this[index],index,this)
            if (results) {
                endResult =true
            }
        }
    }
    return endResult
}
var courses = [
    {
        name:'java',
        coin:509,
        isFInish: true
    },
    {
        name:'javascript',
        coin:50,
        isFInish: false
    },
    {
        name:'php',
            coin:5900,
            isFInish: true
    }]
    var result = courses.some(function(course,index,array){
        return course.isFInish;
    })
    console.log(result);