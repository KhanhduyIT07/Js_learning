
//  chu y xac dinh diem dung
// logic handle => Taoj ra diem dung      
// đệ quy là hàm gọi lại chính nó
// function deQuy() {

// } deQuy();
function coutDown(num){
    if(num >0){
        console.log(num);
        return coutDown(num -1)
    }
    return num
}
coutDown(3)