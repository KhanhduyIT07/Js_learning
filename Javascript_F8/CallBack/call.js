


            //! Call back
            // là hàm (Funtion) được truyền qua đối số 
            // ki gọi hàm khác

            // 1. là hàm
            //2. được truyền qua đôi số
            // 3 Được gọi lại trong hàm nhận đối số
        // function MyFunction(params) {
        //     if(typeof params ==="function"){
        //      params("chơi game");    
        // }    
           
        // }

        // function Mycallback(value) {
        //     console.log("value :",value);
        // }
        // MyFunction(Mycallback)
        // // Mycallback(123)
        // function demo(value){
        //     var i = "Javascript"
        //     for( var i = 1; i < 10;i++){
        //       console.log(i ,"Iloveryou");
        //     } 
        // }
        // demo()
        //! PHAN 2
        // tự định nghĩa cho map2
        // phương thức la function
        Array.prototype.map2 = function(callback){ 
            var Arraylength = this.length;
            // làm như trên vì vòng lập lặp nhiều lần
            // đưa array ra ngoaig
            for (let i = 0; i <Arraylength ;++i) {
             callback(this[i],i);
             // this là courses
                
            }
        }
        var courses =[
            'java',
            'html',
            'css'
        ];
        var html =courses.map2(function(courses,index) {
            return `<h2>${courses}</h2>`
        });
        // var html = courses.map(function(courses){
        //        return   `<h2>${courses}</h2>`
        // });
        //! map là lập qua các phần tử của Array
        // console.log(html.join(" "));
        var array = []; 
    var arrayLength = this.length;
    for(var i = 0; i < arrayLength; i++){
        var result = cb(this[i], i);
        array.push(result);
    }
    return array;]
    