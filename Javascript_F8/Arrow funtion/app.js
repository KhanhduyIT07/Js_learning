/*
Arrow function trong JavaScript là
 hàm sử dụng kí hiệu =>
 để định nghĩa, với cú pháp cơ bản như sau:
*/
// let sum = a => a+a;

// console.log(sum(5))
// ! nếu không có tham số nào thì bạn nên truyền vào cặp dấu ()
//                      SỬ DỤNG ARROW FUNCTION
// var isCheck = confirm("ok nha anh");
// var min = isCheck
//     ? () => console.log(" đại ca duy")
//     : () => console.log("diuiuiuuuiuiu")
// min()
// function ask(question, handleYes, handleNo) {
//     const answer = confirm(question);
//     if (answer) {
//       handleYes();
//     } else {
//       handleNo();
//     }
//   }
  
//   ask(
//     "Bạn muốn tiếp tục thực hiện chương trình không?",
//     () => console.log("You chose Yes!"),
//     () => console.log("You chose No!")
//   );
//   a
//   console.log(" 🚀~ file: app.js ~ line 31 ~ a", a)
// let hoi = confirm('ban la duy')
// let noi = hoi
//    ? () => console.log('xin chaof chur nhaan') // in ra nếu đúng
//    : () => console.log(" chao ban") // in ra nếu sai
// noi()

// function sum(hoi,co,khong){
//   const ans = confirm(hoi);

//   if(ans){
//   co();
//   }else{
//   khong();
// }
// }
// sum(
//   " bạn check đi",
//   () => console.log("you chon co"),
//   () => console.log("you chon khjong")
// );
//! function ask(question, handleYes, handleNo) {
//   const answer = confirm(question);
//   if (answer) {
//     handleYes();
//   } else {
//     handleNo();
//   }
// }

// function handleYes() {
//   console.log("You chose Yes!");
// }

// function handleNo() {
//   console.log("You chose No!");
// }

// ask("Bạn muốn tiếp tục thực hiện chương trình không?", handleYes, handleNo);
let sum = (a,b) => a + b;
console.log(sum(2,4))
// Hàm sum nhận hai giá trị của tham số
// sau đó tính tổng rồi trả vềgias trị đó