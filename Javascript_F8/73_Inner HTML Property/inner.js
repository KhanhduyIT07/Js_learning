
// innerHTMl outerHtML

// thên element vào 1 element
let boxElement = document.querySelector('.Box');
// Thêm được html bằng innnerHTML
// boxElement.innerHTML = '<h1 title="Heading" >New </h1>';
// console.log(document.querySelector('h1').innerText);
boxElement.outerHTML = "<span>test</span>"
// Getter 
console.log(boxElement.innerHTML);