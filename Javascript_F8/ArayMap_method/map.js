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
        coin:3
    },
    {
        id:4,
        jod:'Design',
        coin:6
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

   // dùng reduce 
   //! Biến lưu trữ


   //! Thực hiện việc lưu trữ


   //? accumulator : Biến lưu trữ
   //? cureenValue : Giá trị hiện tại
   //? cureenIndex : Chỉ mục
   //? originArray : Giá  trị araay gốc
  

   // 0 là giá trị khổi tạo biến lưu trữ đc gán cho accumulator
//    var totalcoin = courses.reduce(function coinHalay(accumulator,cureenvalue){
//        return accumulator + cureenvalue .coin },0);
// console.log(totalcoin);



// function getTotalGold(sports){
//     return sports.reduce(function(a,b){
//         return a+ b.gold;
//     },0)
// }





    // function courseHandler(course , index ,originArray){
    //     return {
    //         id: course.id,
    //         jod: `Cong viec : ${course.jod}`,
    //         coin: course.coin,
    //         coinText:   `Gia :${course.coin}`,
    //         index : index,
    //         originArray : originArray,
    //     }
    // }
    // var newCourses = courses.map(courseHandler);
    // phai co mot doi so truyen vao
    // thuc hien 1 vong lap qua tung phan tu v
    // mooi khi lap qua 1 phan tu s call lai 1 function
    // console.log(newCourses)
                            //! REDUCE
             // su dung khi muon tra ve 1 gia tri duy nhat
            //  ! su dung vong lap for
            //  var totalcoin = 0;
            //  for (var course of courses){
            //     totalcoin+= course.coin;
            //  }
            //  console.log(totalcoin)
            // ! su dung reduce()
            // bien luu tru
    // 
         // 0 la gia tri khoi tao
            //reduce se nhan hai doi so trruyen vaof

            
            // var totalcoin = courses.reduce(function(total,course){
            //           return total + course.coin;
            // },0)
            
            // console.log(totalcoin);
            const number = [1,2,3,4,5]
            const result = number.reduce((total,number)=>{
               return total + number 
             })
             console.log(result)