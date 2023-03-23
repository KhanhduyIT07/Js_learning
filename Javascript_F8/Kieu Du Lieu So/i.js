//* cach khai bao
// var milion = 100000;
// alert(milion)
//* ngoai ra con co the khai bao nhu sau
// var milion = 1e9;
// alert(milion) 
// ! Đối tượng Number
// Number.isFinite(2 / 0); // false
// Number.isFinite(20 / 5); // true
// Number.isFinite(0 / 0); // false
// ! xac dinh co phai la so huu han hay khong [(phan so) so nguyen khong am]

// Number.isInteger(999999999); // true
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false
// ! Xác định xem giá trị đã cho có phải là số nguyên hay không

// Number.parseFloat('10') // 10
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18
// ! Chuyển đổi chuỗi đã cho thành một số dấu phẩy động

// Number.parseInt('10') // 10
// Number.parseInt('10.00') // 10
// Number.parseInt('238,21') // 238
// Number.parseInt('237.22') // 237
// Number.parseInt('34 56 78') // 34
// Number.parseInt(' 37 ') // 37
// Number.parseInt('18 is my age') // 18

//  !Chuyển đổi chuỗi đã cho thành một số nguyên
// var numberObject = 1234.56789;

// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'
// ! Chuyển đổi và trả về chuỗi đại diện cho số đã cho
// ! toFixed(1) lay phan nguyen lad du lai 1 so thap phan (sau dau.)

// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'
// ! Chuyển đổi và trả về chuỗi đại diện cho số đã cho

// * LAM VIEC VOI NUMBER 
//    var age = 19;
//    var Pi  = 3.14;

//    var atherNumber = new Number(9)
//  [ nhu nay se tao a typeof la : object]
//? toString de chuyen doi kieu number thanh kieu string
//? toFixed de lam trong so
// console.log(typeof Pi.toFixed())
function isNumber(value){
    // var a;
    // a = typeof(value);
    // if(a == "number"){
    // return true;
    // }
    // else{
    // return false
    // }
    return typeof value == 'number'
    }
    
    
    
    // Expected results:
    console.log(isNumber('khaduy')); // true
    console.log(isNumber('abc')); // false
    console.log(isNumber(56)); // false
