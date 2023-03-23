// var myInfo = {
//     name: 'Khanh Duy',
//     age :  18,
//     address: 'Quang Ngai '
// };
// thêm 1 key vào object tu biến []
// myInfo.email = 'khanhduy@gmail.com' 
//  console.log(myInfo)
// var myKey = 'address'

// console.log(myInfo[myKey])
// * xoá key trong object
// delete myInfo.age;
// console.log(myInfo)
// ! function  --> phương thức [mrthod]
// ! lại gọi là thuộc tính [propety]
// var myInfo = {
//         name: 'Khanh Duy',
//         age :  18,
//         address: 'Quang Ngai ',
//         getName : function() {
//             return this.name
//         }  
//     };
//     console.log(myInfo.getName())
  
// ở đây Name : là thuốc tính
//còn Khánh duy là đối tượng tương ứng với thuốc tính
/**
 * object rỗng
 let myComputer = {};
 */
// 2 cách để lấy ra giá trị của một thuộc tính trong object
//! Sử dụng toán tử chấm . theo sau là tên thuộc tính.
//! Sử dụng toán tử ngoặc vuông [], bên trong là tên thuộc tính.
let myComputer = {
    type: "laptop",
    brand: "Sony",
    os: "Windows 7",
    graphicCard: "NVIDIA",
  };

  // Lây thuộc tính
  // thêm
  myComputer.them="ngủ"
  // xoá
  delete myComputer.brand
  console.log(myComputer.type)
  console.log(myComputer["type"]);
  console.log(myComputer)