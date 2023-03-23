let a = 1;
let b = 2;

a > b; // so sánh lớn hơn
a < b; // so sánh lớn hơn
a >= b; // so sánh lớn hơn hoặc bằng
a <= b; // so sánh nhỏ hơn hoặc bằng
a == b; // so sánh bằng không nghiêm ngặt
a === b; // so sánh bằng nghiêm ngặt
a != b; // so sánh khác không nghiêm ngặt
a !== b; // so sánh khác nghiêm ngặt
/**
 Kết quả của phép so sánh
Kết quả của phép so sánh luôn là một giá trị kiểu boolean.
true: đúng, chính xác
false: sai, không chính xác
 */
console.log(15 > 9); // (1)
console.log("no" <= "none"); // (2)
console.log("3" >= "24"); // (3)
console.log("3" > 24); // (4)
console.log(null < undefined); // (5)
console.log(undefined == null); // (6)
console.log(undefined === null); // (7)
console.log(null == "\n0\n"); // (8)
console.log(null === +"\n0\n"); // (9)
console.log(null > -1); // (10)