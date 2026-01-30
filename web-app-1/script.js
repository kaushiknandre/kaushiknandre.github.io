const users = [];
function dispMessage(){
    
    //alert("Hello")
//    const user = {
//         name:"john",
//         email:"john@gmail.com",
//         password:"1234"
// }


// const arr=["Maths","Science"]
// arr.push("social")
//     console.log(arr);
    // alert(document.getElementById("txtEmail").value)
   // lblMessage.innerHTML=document.getElementById("txtEmail").value + document.getElementById("txtpass").value
   let email = document.getElementById("txtEmail").value 
   let password = document.getElementById("txtpass").value 
   let found= users.find((e)=> e.email===email && e.password===password)
  if (found){
     lblMessage.innerHTML = "Welcome"
   }
    else{
  lblMessage.innerHTML = "Access Denied"
   }
}

function showLoginForm(){
    let str = `<h3>Login Form</h3>
        <p><label id="lblMessage"></label></p>
       <p><input type="text" id="txtEmail" placeholder="Email Address"/></p>
       <p><input type="password" id="txtpass" placeholder="Password"></p>
       <P><button class="login-btn" onclick="dispMessage()">login</button></P>
       <hr>
       
       <p><button class="register-btn" onclick="showRegistrationForm()">Register</button></p>`

     form.innerHTML = str
}

function showRegistrationForm(){
    let str = `
       <p><input type="text" id="name" placeholder="Enter Name"/></p>
       <p><input type="text" id="txtEmail" placeholder="Email Address"/></p>
       <p><input type="password" id="txtpass" placeholder="Password"></p>
       <P><button class="login-btn" onclick="addUser()">login</button></P>
       <hr>
    <p>already a member <a href ="index.html">login</a></p>
    `


    form.innerHTML = str
    

}
function addUser(){
    

    let name= document.getElementById("name").value
    let email = document.getElementById("txtEmail").value 
  let password = document.getElementById("txtpass").value 
    let user={
        name:name,
        email:email,
        password:password

    }
    users.push(user);
    showLoginForm();
    console.log(users);
}