


                // ForEach , find , fiuter , some , every , reduce
                // var courses =[
                //     "jsvasccript",
                //     "html",
                //     "css"
                // ];
                // courses.length = 10
                // console.log(courses);
                // // emty X 7 không có cái gì ở đây cả
                // for ( var i in courses){
                //     console.log(courses[i]);
                // }
                    //! Myforeach
        Array.prototype.forEach2 = function(CallBack){
            for(var index in this){
                console.log("index :", index);
            }
        }
                var courses =[
                    "jsvasccript",
                    "html",
                    "css"
                ];
                courses.length =100;
                courses.forEach(function(courses,index,array){
                  console.log(courses,index,array);
                })
                // Foreach không return