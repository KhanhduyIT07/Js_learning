
//!----------- Object prototye
// Prototypr là nguyên mẫu để  tạo nên 1 đối tượng
function User  (firstName , lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName =  function(){
     return `${this.firstName} ${this.lastName}`
    }
}
         User.prototype.className = 'KHANH DUY' ;
        
         //* thêm môtj thuộc tinhd ngoài hàm tạo    
         //
         
 var user = new User('Khanh Duy' , 'Nguyen' ,'img')  
 
 
 console.log(user.className)       