

/*
         JavaScript có 8 kiểu dữ liệu cơ bản, trong đó, 
         có 7 kiểu dữ liệu nguyên thủy
        (boolean, null, undefined, number, BigInt, string, symbol)
        và 1 kiểu dữ liệu dạng tham chiếu (object).
        --- Kiểu dữ liệu nguyên thủy: là kiễu dữ liệu không thể thay đổi đc
        --- Kiểu dữ liệu tham chiếu (object):  là tập hợp của các thuộc tính (key)
                                                và giá trị (value). Mà số 
                                                lượng các key có thể thay đổi,
*/
//* Kiểu dữ liệu boolean (kiểu logic)
        // Boolean là kiểu dữ liệu logic chỉ bao gồm hai giá trị là true
        // (đúng, chính xác) và false (sai, không chính xác)
           // let isWebLoaded = true; // => Trang web đã được tải xong
           //    console.log(isWebLoaded); // true

           // let isProgramRunning = false; // Chương trình đang không chạy
           //    console.log(isProgramRunning); // false
//* Kiểu dữ liệu null
        // Kiểu dữ liệu null là một kiểu dữ liệu đặc biệt
        // chỉ bao gồm một giá trị là null, ví dụ:
            // let language = null;
            // console.log(language); // null 
        //Trong ví dụ trên, biến language được hiểu là không biết giá trị hoặc không có giá trị.
//* Kiểu dữ liệu undefined 
        // tương tự như Null
          //    let language2 = undefined;
          //    console.log(language2); // undefined
    //Kiểu dữ liệu undefined có nghĩa là giá trị chưa được gán.
//*Kiểu dữ liệu number
    //JavaScript có hai loại số là: số nguyên và số thực..
                    // let n1 = 66; // số nguyên dương
                    // let n2 = -66; // số nguyên âm
                    // let n3 = 3.14; // số thực dương
                    // let n4 = -3.14; // số thực âm
                    // let n5 = 2e3; // => 2*10^3 = 2000
                    // let n6 = 2e-3; // => 2*10^(-3) = 0.002
                    // let n7 = 0xff; // số dạng hexa (hệ cơ số 16): 15*16 + 15 = 255
                    // let n8 = 067; // số dạng octa (hệ cơ số 8): 6*8 + 7 = 55
                    // let n9 = 0b11; // số dạng nhị phân (hệ cơ số 2): 1*2 + 1 = 3
//*     NaN: là viết tắt của Not a Number, được sử dụng để đại diện cho
//      những trường hợp tính toán sai hoặc kết quả của một phép tính không xác định.
//* Kiểu dữ liệu BigInt     
        //Để biểu diễn số nguyên với kiểu BigInt, bạn chỉ cần thêm chữ cái n ở phía sau  
            // const reallyBigNumber = 12345678987654321012345678984533333333333333333333333337654321n;
            // console.log(reallyBigNumber); // 12345678987654321012345678987654321n        
//* Kiểu dữ liệu string
                    /*
                    Dùng dấu nháy đơn (')
                    Dùng dấu nháy kép (")
                    Dùng dấu "backtick" (`)
                    */
                   // Truyền biến vào trong dấu "backtick"
                                let name = "Lam";
                                console.log(`My name is ${name}`); // My name is Lam

                         // Truyền hằng vào trong dấu "backtick"
                                const language = "JavaScript";
                                console.log(`You are learning ${language}`); // You are learning JavaScript
 
                         // Truyền vào biểu thức
                               console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

//* Kiểu dữ liệu object 
                            /*
                            Object là kiểu dữ liệu tham chiếu. Có thể hiểu object là một
                            tập hợp gồm các cặp key - value (khóa - giá trị).

                            Trong đó, kiểu dữ liệu của key có thể là string hoặc symbol.
                            Và value ứng với key có thể là bất kỳ kiểu dữ liệu nào. */
//* Cách xác định kiểu dữ liệu của biến
                    /*
                    Dạng toán tử typeof x.
                    Dạng hàm typeof(x)
                    */
                                            
                            console.log(Number(undefined)); // NaN
                            console.log(Number(true)); // 1
                            console.log(Number(false)); // 0