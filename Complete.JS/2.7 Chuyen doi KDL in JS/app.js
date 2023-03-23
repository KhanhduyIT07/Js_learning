/*Chuyển đổi kiểu dữ liệu sang string
Để chuyển đổi bất kỳ kiểu dữ liệu nào sang string, bạn có thể dùng hàm String(value).

Một số ví dụ:

console.log(String(1)); // "1"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
Bạn có thấy rằng, chuyển đổi kiểu dữ liệu sang string khá đơn giản về dễ hiểu phải không?

Chỉ cần thêm cặp dấu nháy kép "" là xong. Còn về hình thức thì mọi thứ vẫn giữ nguyên.

Chuyển đổi kiểu dữ liệu sang number
Khi thực hiện tính toán, JavaScript sẽ chuyển đổi các kiểu dữ liệu về kiểu dữ liệu number.

Ví dụ phép chia giữa hai string:

console.log("10" / "2"); // 5
Bởi vì string "10" và "2" được chuyển đổi về kiểu number thành số 10 và số 2. Nên kết quả thu được là 5.

Để chuyển đổi bất kỳ kiểu dữ liệu nào thành number, bạn có thể dùng hàm Number(value), ví dụ:

console.log(Number("")); // 0
console.log(Number("Hello")); // NaN
console.log(Number("10")); // 10
console.log(Number(" ")); // 0
console.log(Number(" 99 ")); // 99
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
Bạn để ý một số quy luật khi chuyển đổi kiểu dữ liệu về number như sau:

null chuyển về number thành 0.
undefined chuyển về number thành NaN.
true chuyển về number thành 1.
false chuyển về number thành 0.
Một giá trị string sau khi bỏ đi dấu cách ("whitespace") ở đầu và cuối string, nếu thành phần còn lại mà là:
String rỗng "" thì chuyển về thành số 0.
String khác rỗng và có thể chuyển về number thì sẽ biến thành số tương ứng.
String khác rỗng và không thể chuyển về number thì trở thành NaN.
Chuyển đổi kiểu dữ liệu sang boolean
Để chuyển đổi kiểu dữ liệu sang boolean, bạn có thể dùng hàm Boolean(value).

Quy luật chuyển đổi sang boolean như sau:

Những giá trị "empty" như: số 0, string rỗng "", null, undefined và NaN sẽ trở thành false.
Những giá trị còn lại sẽ trở thành true.
Ví dụ:

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(10n)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("  ")); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
Trên đây là một số kiến thức cơ bản cần nhớ về chuyển đổi kiểu dữ liệu trong 
JavaScript. Hy vọng bạn nắm được những kiến thức cơ bản. Vì đến những bài viết sau,
mình sẽ gặp vấn đề chuyển đổi kiểu dữ liệu này khá nhiều. */