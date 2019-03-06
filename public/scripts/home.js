const bodyEl = document.querySelector("#body")
let userId
let userMatches

bodyEl.innerHTML=`
<div class="page-header">
  <div class="title">
    <h1>Date your Crash!</h1>
  </div>
  <div class="button_1">
    <button id="login" class="btn btn-primary btn-lg">Login <i class="far fa-user"></i></button>
  </div>
  <div class="button_2">
    <button id="register" class="btn btn-primary btn-lg">Register <i class="fas fa-pen"></i></button>
  </div>
</div>
<div class="content">
<div class="Jumbotron">
  <p>
  Choose among the pictures of the celebrities that you like , and do not like!
  Our Machine Learning algorithm will be trained on your taste to find you the perfect match among our users, and find the best fit for you!
  When you will register with your picture, your face parameters will also be analysed and compared to other users training, so they will be able to find you!

  </p>
  </div>
</div>


`
const showForm = () => {
  bodyEl.innerHTML=`
  <div class="page-header">
    <div class="title">
      <h1>Date your Crash!</h1>
    </div>
    <div class="button_2">
      <button id="register" class="btn btn-primary btn-lg">Register <i class="fas fa-pen"></i></button>
    </div>
  </div>
  <div class="content">
  <form id="login-form">
    <input id="username-input" class="form" type="text" placeholder="Enter your username">
    <br>
    <input id="password-input" type="password" class="form" placeholder="Enter your password">
    <br>
    <input type="submit" class="btn btn-primary btn-lg" class="form" name="submit" value="Login" id="submit-btn"><br>
  </form>
  </div>
  `
  let loginForm=document.querySelector('#login-form')
  loginForm.addEventListener('submit',event=>{
    event.preventDefault()
    let usernameEl = document.querySelector("#username-input")
    let passwordEl = document.querySelector("#password-input")
    let user={user: usernameEl.value, password: passwordEl.value}
    loginFunction(user)
  })
  const register=document.querySelector('#register')
  register.addEventListener('click',()=>{newUser()})
}

const login=document.querySelector('#login')
const register=document.querySelector('#register')
register.addEventListener('click',()=>{newUser()})
login.addEventListener('click',()=>{showForm()})

const loginFunction = (user)=>{
  fetch("https://dateyourcrashapi.herokuapp.com/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  })
    .then(resp=>resp.json())
    .then(json =>{
      if (json.status!==500){
        console.log(json)
        userId=json.user
        console.log(json.user)
        appendAllMatchesOntoPage(json.matches)
        userMatches=json.matches
      }else{
        bodyEl.innerHTML+=`Wrong username/password combination`
      }

    })
}
