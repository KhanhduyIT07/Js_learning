

/**
 * Toán tử Logic
 * 1. && - and
 * 2. || - Or
 * 3. ! - Not (phủ định)
 */
// var a = 1;
// var b = 2;
// var c = 3;

// if( a>0 && b >0 && c>0){
//     alert("Điều kiện đúng")
// }
// // nếu 1 rtrong 3 điều kiện sai sẽ khong ra kết quă
// //* Or
// if( a>0 || b >0 || c>0){
//     alert("Điều kiện đúng")
// }
// // nếu  1 trong các vế đúng thì sẽ đúng
// //* ! đúng thành sai sai thành đúng
// if(!(a < 0)){
//     alert("dk đúng nhưng sai")
// }
// let date = 411;
//  if ( date === 2)  {
//     alert('Hôm nay là thứ hai')
//  }
//  else if( date === 4){
//     alert('Hôm nay là thư tư')
//  }
//  else if(date === 5){
//     alert('Hôm nya là thứ 5')
//  }
// //  nếu nằm ngoài thì 
//   else{
//     alert('Không biết')
//   }
//! câu lệnh rẻ nhánh swtch
// var date = 19  ;
// switch(date){
//     case 2 :
//         alert('thứ hai')
//         break;
//     case 3 :
//         alert('thứ ba')
//         break;
//     case 4 :
//         alert('thứ tư')
//         break;
//     case 5 :
//         alert('thứ 5')
//         break;

//         default:
//             alert('đéo biết ok')
// }
function run(fruits) {
    var result;

  switch (fruits) {
       case "Banana":
            result = "This is a Banana";
            break;
       case "Apple":
            result = "This is an Apple";
            break;
    }

    return result;
}