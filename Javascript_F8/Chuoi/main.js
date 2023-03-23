/* 1. Tao chuoi
      Cach tao chuoi
      var fullName = 'KHANH DUY';
    alert(fullName); 
         
*/ 
//*2. mot so case su dung backslash(\)
// var fullName =  "KHANH DUY LA \"SIEU NHAN\"";
// console.log(fullName);  
//*3 XEM DO DAI CHUOI (LENGHT)
// var fullName =  "KHANH DUY";
// console.log(fullName.length); 
//* chu y ve do dai khi viet vcode
// su dung toan tu noi chuoi (+)
//* template string Es6
// var firstName  = 'khanh'
// var lastName  = 'duy'
// console.log(`toi la :${firstName} ${lastName}`)
// !-------------------------LAM VIEC VOI CHUOI
var myChuoi = 'Hoc js cung js khanh duy '
// 1. length
console.log(myChuoi.length)
// 2. find index (tim vi tri cua 1 ki tu trong 1 chuoi)
// console.log(myChuoi.indexOf('khanh',23))
//* tim chu o cuoi cung trronf chuoi // lastIndexof()

// 3. cut string
//    *console.log(myChuoi.slice(-9 , -5))
// 4. repace
// *console.log(myChuoi.replace(/js/g , 'css'))
// */js/g  dung de thay doi nhieu chu giong ngau
// 5. Covert to upper case
// *console.log(myChuoi.toLocaleUpperCase())
// 6. convert to lower case
//* console.log(myChuoi.toLocaleLowerCase())
// 7. trim'
//[[ loai bo ki tu thua ]]
//* console.log(myChuoi.trim())
// 8. split [ dua vao diem chung de cat array]
// var languages = 'javascript' 
// console.log(languages.split(''))
// ? 9. Get a character by index
// const myChuoi2 =' khanh duy';
// console.log(myChuoi2.charAt(9))
// console.log(myChuoi2[10])
// function getUpperCaseName(name){
//     return name.toUpperCase();
// }

     

// // Expected results:
// console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
// console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"