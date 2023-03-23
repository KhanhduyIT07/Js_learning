


// CÁC PHÉP SO SÁNH TOÁN TỬ
// let a = 1;
// let b = 2;

// a > b; // so sánh lớn hơn
// a < b; // so sánh lớn hơn
// a >= b; // so sánh lớn hơn hoặc bằng
// a <= b; // so sánh nhỏ hơn hoặc bằng
// a == b; // so sánh bằng không nghiêm ngặt
// a === b; // so sánh bằng nghiêm ngặt
// a != b; // so sánh khác không nghiêm ngặt
// a !== b; // so sánh khác nghiêm ngặt\
//* KẾT QUẢ TRẢ VỀ  KIỂU BOOLEAN
                // Ví Dụ
                // let a = 1;
                // let b = 10;
                // console.log(a <= b)\
                // * gán giá trị cho 1 biến
                // let soSanh = 10 < 100;
                // console.log(soSanh)
//* So sánh String

//* So sánh khác kiểu dữ liệu
        // console.log("5" > 4); // true, vì "5" chuyển thành 5
        // console.log("01" == 1); // true, vì "01" chuyển thành 1
        // console.log("11" == 1); // false, vì "11" chuyển thành 11
        // //! TRUE == 1  FALSE =0
        // console.log(true == 1); // true
        // console.log(false == 0); // false
        const fullName = "";
        const nickName = "duy dev";
        
        const displayName = fullName || nickName || "Người dùng ẩn danh";
        console.log(displayName); // jsDev