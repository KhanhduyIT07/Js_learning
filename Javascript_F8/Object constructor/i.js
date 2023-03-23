

// OBJECT CONSTRUCTOR
function User  (firstName , lastName, avatar) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.avatar = avatar;
   this.getName =  function(){
    return `${this.firstName} ${this.lastName}`
   }
}
var author = new User('Khanh Duy' , 'Phan' ,'img') 
                         
var user = new User('Khanh Duy' , 'Nguyen' ,'img')
author.title = 'Anh em sieu nha'  ; 
user.coment = 'hay qua anh oi';                      
console.log(author.getName())  
console.log(user)       