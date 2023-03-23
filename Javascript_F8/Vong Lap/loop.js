


/**
 * vongf laapj 
 * 1. forr - lap voi dieu kien dung
 * 2.for in - Lap qua key cua doi tuong
 * 3.for of - lap qua valua cua doi tuong
 * 4.wwhile - lap khi dieu kien dungs
 * 5.do wwhle - lap it nhat 1 lan - sau do lap khia dieu kien dung
 * 
 */
// FOR  (i = 1= bat dau tu 1; dieu kien ;i++(tang leen 1 gias trij))
// for (var i = 1; i <=10;i++ ){
//     console.log("anh yeeu em");
// }
// // ! Làm bài
// var array = [];
// function getRandNumbers(min, max, length) {
//     for(var i = 0; i < length; i += 1) {
//         array[i] = (Math.random() * (max - min) + min)
//     }
//     return array;
// }


// Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.

    /**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */
                                        //! for phần 2
                                        // function getTotal(numbers) {
                                        //     let sum = 0;
                                        //     for(let i = 0; i < numbers.length; i++){
                                        //         sum += numbers[i];
                                        //     }
                                        //     return sum;
                                    //     // }
                                    // hàm tính tổng
                                    function tinhTong(number){
                                        var sum = 0;
                                        for(var i = 0; i < number;i ++){
                                            sum += number[i]
                                        }
                                        return sum;
                                    }
                                        // ! for phần 3
                                    //     var myArr=[
                                    //         'js',
                                    //         'java',
                                    //         'css',
                                    //         'html ', 
                                    //         'python'
            
                                    //     ];
                                    //   var arraylengh = myArr.length;
                                    //   for(var i = 0; i < arraylengh;i++){
                                    //     console.log(myArr[i])
                                    //   }
                                    //   var orders = [
                                    //     {
                                    //         name: 'Khóa học HTML - CSS Pro',
                                    //         price: 3000000
                                    //     },
                                    //     {
                                    //         name: 'Khóa học Javascript Pro',
                                    //         price: 2500000
                                    //     },
                                    //     {
                                    //         name: 'Khóa học React Pro',
                                    //         price: 3200000
                                    //     }
                                    // ]
                                    // function getTotal(sum){
                                    //     var a = sum.length;
                                    //     var results = 0;
                                    //     for (var i = 0; i < a ; i++){
                                    //         results += sum[i].price;
                                    //     }
                                    //     return results;
                                    // }
                                    
                                        //! FOR in
                                        // var myInfor = {
                                        //     name: 'Khanh duy',
                                        //     age : 19,
                                        //     addres: 'Quang Ngai'

                                        // };
                                        // for ( var key in myInfo){
                                        //     // code
                                        //     console.log(myInfo[key])
                                        // }
                                        // var language =[
                                        //     'ls',
                                        //     'ngữ văn',
                                        //     'toán',
                                        //     'âm nhạc'

                                        // ];
                                        // for ( var key in languages){
                                        //     console.log(languages[key])
                                        // }
                                        // xuất ra key để in ra số thứ tự
                                        // xuất ra value thì truyền key vào languages[]
                                //         function run(object) {
                                //             var arr = [];
                                //             for (var key in object) {
                                //                 arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
                                //             }
                                //             return arr;
                                //         }
                                //         // push() thêm vào cuối một mảng
                                    
                
                                   
                                //    // Expected results:
                                //    console.log(run({ name: 'Nguyen Van A', age: 16 }));
                                //! for of
                                // var language =
                                //     'javascript';
                                //    // nếu 1 chuỗi thì sẽ tách ra từng chữ cái
                                //    // nếu là 1 object sẽ không duyệt được
                               
                                // for(var value of language){
                                //     console.log(value)
                                // }