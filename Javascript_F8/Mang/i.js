//! MANG
/* 1. Tạo mảng
   - Cách tạo
   - Sử dụng cach nao
   - Kiểm tra data Typeof
   2. Truy xuất mảng
   - Độ dài mảng
   - Lấy phần tử theo index
*/
// cách tạo mảng
  // var languages = [
  //   'KHANH DUY',
  //   'JS',
  //   'GHIM',
  //   'hehe'
  // ] ;
  // console.log(languages)
//   * số thứ tự đuọc đánh tự động

//* Kiểm tra data Typeof
// console.log(Array.isArray(languages))
// ! độ dài mảng
//  console.log(languages.length)
// ! lấy phần tử theo index/key
// console.log(languages[3])
// ! LÀM VIỆC VỚI MẢNG ( JAVASCRIPT ARRAY METHOD)\

/*
 1. to string
 2. join
 3. pop
 4. puh
 5. Shift
 6. Unshift
 7. Concat
 8. Slicing
*/
var languages = [
    'js',
    'java',
    'css',
    'html'
]
// console.log((languages.join()))
// *POP [xoá phần tử cuối mảng]
console.log(languages.pop())
console.log(languages)
// *Push  [thêm phần tử vào mảng]
// console.log(languages.push('Duyy haha' , 'hello'))
console.log(languages)
// *Shift  [xoá phần tử đầu tiên mảng]
console.log(languages.shift())

console.log(languages)
// *Ushift  [them nhieui phan tu vao dau mang]
console.log(languages.unshift('Darr'))
console.log(languages)
// * Sliccing [ thêm xoá cắt]
languages.splice(4, 2,'duy')
console.log(languages)
// * Concat [ nối array]
var languages2 = [
  ' chay ngay di'
]

// console.log(languages2.concat(languages))
// slice
// console.log(languages.slice(-2))
// function getFirstElement(animal){
//     return animal.slice(0,3)
// }



// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getFirstElement(animals);

// console.log(result); // Expected: "Monkey"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

