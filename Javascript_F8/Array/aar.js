var courses = [
{
    id:1,
    jod:'Fontend',
    coin:03
},
{
    id:2,
    jod:'Backend',
    coin:0
},
{
    id:3,
    jod:'Javadev',
    coin:03
},
{
    id:4,
    jod:'Design',
    coin:0
},
{
    id:5,
    jod:'Hacker',
    coin:1000
},
{
    id:6,
    jod:'testter',
    coin:200
}

];
// ! foreach Duyệt qua từng phần tử của mảng
// courses.forEach(function(course , index){
// console.log(index,course)
// })
// ! every Duyệt qua tất cả phần tử của mảng
//  var isFree = courses.every(function(course){
// return course.coin==0;
// })
// ! nếu 1 phần sai thì dừng lại và không làm nữa
// console.log(isFree)
// ! SOME đi ngược lại với every trả lại index
//  var isFree = courses.some(function(course){
// return course.coin === 0;
// })
// console.log(isFree)
// ! 1 cái trong mang đúng thì ngừng
// FIND()
//  var isFree = courses.find(function(course){
// return course.jod=='Javafullstack';
// })
// console.log(isFree)
// nếu không có thì trả về undefind
//! trả về tất cả phần tử trong mang:
 var listSearch = courses.filter(function(course){
return course.coin === 0;
})
console.log(listSearch)
