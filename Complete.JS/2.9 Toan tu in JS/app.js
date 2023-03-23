// Toán tử số học
            /*
            Toán tử cộng (+)
            Toán tử trừ (-)
            Toán tử nhân (*)
            Toán tử chia (/)
            Toán tử chia lấy dư (%)
            Toán tử lũy thừa (**)
            */
//*Toán tử ghép string (+)
            // console.log("hello" + " javascript"); // hello javascript
            // console.log(1 + "2"); // 12
            // console.log("1" + true); // 1true

//*Toán tử chuyển đổi kiểu dữ liệu thành number (+)

        // Không ảnh hưởng đến số
        // console.log(+1); // 1

        // Chuyển đổi các kiểu dữ liệu khác thành số
        // console.log(+true); // 1
        // console.log(+false); // 0
        // console.log(+"abc"); // NaN
        // console.log(+""); // 0
        // console.log(+undefined); // NaN
        // console.log(+null); // 0
        // console.log(+{ x: 1 }); // NaN
//* Toán tử gán
        //Toán tử gán dùng để gán giá trị cho một biến (hoặc hằng).
        //    let x = 1; // gán giá trị cho biến
        //   const message = "Hello"; // gán giá trị cho hằng 
//*Toán tử tăng 1 đơn vị (++) và giảm 1 đơn vị (--)
                /*
                  Toán tử ++ và -- có hai dạng:
                  Đặt trước biến ++a, --a
                  Đặt sau biến a++, a--
                */
           
// let a = 2;
// let b = 3;
// let c = a++ + ++b; // b ++ la so copy cua b
// console.log(c)
// console.log(a)
// console.log(b)
//*Toán tử bitwise
                    /*
                    Các toán tử bitwise bao gồm:
                    Toán tử AND (&)
                    Toán tử OR (|)
                    Toán tử NOT (~)
                    Toán tử XOR (^)
                    Toán tử dịch trái (<<)
                    Toán tử dịch phải (>>)
                    Toán tử dịch phải (chèn thêm số 0 ở đầu) (>>>) 
                    */
//* Toán tử dấu phẩy
     //Toán tử dấu phẩy cho phép thực hiện một vài biểu thức (cách nhau bằng dấu phẩy), n
     //hưng kết quả thì chỉ lấy ở biểu thức cuối cùng.
// let a = 1;
// let x = ((a =a + ), a + 4);

// console.log(a); // 2
// console.log(x); // 6
var a = 6;
var x = ((a = ++a)+1,a+10 );

console.log(a)
console.log(x)