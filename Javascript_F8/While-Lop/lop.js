
// ! While - lop

// var i = 1; // BIẾN
// while(i<=1000){ // ĐIỀU KIỆN
//     console.log(i);
//     i++ // I TĂNG DẦN LÊN
// }

// // lạP QUA 1 ARAAY
// var Myaray = [
//     'khánh duy',
//     'JAVA'

// ];
// var i = 0; 
// while(i <Myaray.length){ 
//     console.log(Myaray[i]);
//     i++ 
// }
        //! DO WHLIE LOP
        //  var i = 0;
        //  do{
        //       i++;
        //       console.log(i) // thực hiện dòng lện trước
        //  }while(i<100);// lần thứ hai mới tới lần này
        //  //? ví dụ
        //  var i = 0;
        //  var isSuccess = false;

         
        //  do{
        //       i++;
        //       console.log(" nap tien lan " + i)
        //        // thực hiện dòng lện trước
        //        if (false){
        //         isSuccess= true;
        //        }
        //  }while(!isSuccess && i<=3);// lần thứ hai mới tới lần nàyi
        //! BREAK CUONTENIU
             //?Break  
            //  for( var i = 0;i<10;i++){
            //     console.log(i)
            //     if(i >= 5){
            //         break;
            //     }
            //  }
             // counttniu
            //  for( var i = 0;i<10;i++){
                
            //     if(i%2  !== 0){ // neu i la so le thi khong dc in ra 
            //         continue;
            //     }
            //     console.log(i)
            //  }
        // ! vòng lạp lồng nau Nested Loop
        // var myArr =[
        //     [1,2],
        //     [3,4], // theem 3 manng con
        //     [5,6]
        // ];
        // for (var i = 0;i <myArr.length;i++){
        //     for(var j =0;j<myArr[i].length;j++){
        //         console.log(myArr[i][j])
        //     }

        // }
        //!LOOP for
        // chạy ngược
        // for(var i = 100; i > 0;i--){
        //     console.log(i)
        // }
        //
        // tăng lên 5 gia trị 1 lần
        // for( var i = 0; i <= 100; i+=5){
        //     console.log(i)
        // }
        // let count = 3 ;
        // while(count ){
        //     console.log("Khanh duy" , count)
        //     count --;
        // }
      // for(let a = 1 ; a <=10 ; a++){
      //   console.log(a)
      //   }
      //! kết thúc [break]
      // for (let number = 15; ; number++) { // bỏ qua phần điều kiện nên vong lặp luôn luôn được thực hiện
      //    if (number % 7 === 0) {
      //     console.log(number);
      //     break;
      //   }
      // }
      
    //  for (let a = 5;;a++){//số nhỏ nhất chia hết cho hai bắt đầu từ 5
    //     if (a%2===0){
    //       console.log(a)
    //       break;
    //     }
    //  }
    // for ( let a = 3; ; a++){
    //     if(a % 2 ===0){
    //       console.log(a)
    //       break;
    //     }
    // }
    // !lAY THONG TIN TU NGUOI NHAO
//  while(true){
//   const input = prompt('moi ban nhap so vao')
//   const number = Number(input);
//   if(isNaN(number)){
//     alert('ban phai nhap so')
//   }else if(number < 10){
//     alert('so ban nhap hoi bi nho')
//   }else{
//     alert('nhap thanh cong')
//     console.log('so dc nhap la', Number(input))
//     break
//   }
//  }
    let number;
    while(true){
      number=Number(prompt('Nhaap vao so nguyen duong'))
    if(!isNaN(number)&& number > 0) break;
  }