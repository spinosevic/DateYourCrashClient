let CLOUDINARY_URL="https://api.cloudinary.com/v1_1/dpymfekpd/upload"
let CLOUDINARY_UPLOAD_PRESET="xendv6ht"
let parameters= ["beard", "mustache", "arched eyebrows", "big lips", "big nose", "black hair","blond hair","bushy eyebrows", "chubby","pale skin", "straight hair", "wavy hair", "heavy makeup","high cheekbones","narrow eyes","pointy nose","receding hairline","rosy cheeks", "race", "white","indian","hispanic","asian","black"]
let par2=parameters.map(x=> x.split(" ").join("_")).filter(y=>y!=="race")
let user
const card = document.createElement("div")
const card2 = document.createElement("div")
let url
let interest
let values
card.className = "card"
card2.classsName="card-2"
card2.appendChild(card)
card.innerHTML = `
<img src="https://res.cloudinary.com/dpymfekpd/image/upload/v1551473499/pin_photo62522.jpg" id="img-preview" />
<label class="file-upload-container" for="file-upload">
  <input id="file-upload" type="file" style="display:none;">
  Select an Image
</label>
`
const newUser = () =>{
bodyEl.innerHTML=`
<div class="page-header">

<div class="title">
  <h2> Create your profile </h2>
</div>
</div>

<div class="Jumbotron">
  <h3> Choose a username and upload a headshote picture. Make sure there is just your face in the picture you are going to upload. Our magic AI will find the best match for you!</h3>
</div>
<div class="content-2">
<div class="form-2">
<form id="add-user-form">
  <input id="username-input" class="form" type="text" placeholder="Enter your username">
  <br>
  <input id="password-input" class="form" type="password" placeholder="Enter your password">
  <br>
  <input id="name-input" class="form" type="test" placeholder="Enter your name">
  <br>
  I am a:<br>
  <input type="radio" name="gender"  class="form gender-choice" value="male"> Man <i class="fas fa-mars"></i>
  <input type="radio" name="gender" class="form gender-choice" value="female"> Woman <i class="fas fa-venus"></i><br>
  Interested into: <br>
  <input type="radio" name="gender2" class="gender-interest" value="male"> Men <i class="fas fa-mars"></i>
  <input type="radio" name="gender2" class="gender-interest" value="female">Women <i class="fas fa-venus"></i><br>
  <input type="radio" name="gender2" class="gender-interest" value="both"> Both<br>
<input type="submit" name="submit" class="btn btn-primary btn-lg" value="Create New User" id="submit-btn"><br>

</form>
</div>
`
document.querySelector(".content-2").appendChild(card)
let usernameEl = document.querySelector("#username-input")
let passwordEl = document.querySelector("#password-input")
let nameEl = document.querySelector("#username-input")
let formEl = document.querySelector("#add-user-form")
let imgPreview = document.getElementById('img-preview')
let fileUpload = document.getElementById('file-upload')
let formData= new FormData()

fileUpload.addEventListener('change',function(event) {
  file = event.target.files[0]
  console.log(file)

formData.append('file',file)
formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
axios({
  url: CLOUDINARY_URL,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: formData
})
.then(res=> {
  imgPreview.src=res.data.secure_url
  url=res.data.secure_url
})
.catch(err=> console.log(err))
})

formEl.addEventListener("submit", event => {
  event.preventDefault()

  document.querySelectorAll(".gender-choice").forEach(g=>{if(g.checked){gender= g.value}})
  document.querySelectorAll(".gender-interest").forEach(g=>{if(g.checked){interest=g.value}})
  if(gender=='' || interest==''|| usernameEl.value=='' || passwordEl.value=='' || nameEl.value==''|| url==undefined ){
    bodyEl.innerHTML+=`
    <h3 style="color: red; font-weight: bold ">Complete all the fields</h3>
    `
  }else{
    user = {
      username: usernameEl.value,
      password: passwordEl.value,
      name:     nameEl.value,
      gender: gender,
      interest: interest,
      url: url
    }
    fetch('https://www.betafaceapi.com/api/v2/media', {
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({"api_key": "d45fd466-51e2-4701-8da8-04351c872236",
     "file_uri": url,
     "detection_flags": "basicpoints,propoints,classifiers,content",
     "recognize_targets": [
       "all@mynamespace"
     ],
     "original_filename": "sample.png"})
   }).then(resp => resp.json())
   .then(json=>{
     console.log(json)

     return json.media.media_uuid})
   .then(media_uuid=>{
    return fetch(`https://www.betafaceapi.com/api/v2/media?api_key=d45fd466-51e2-4701-8da8-04351c872236&media_uuid=${media_uuid}`,{
       method: 'GET',
       headers: {'Content-Type': 'application/json'}})
       .then(resp=>resp.json())
       .then(json=>json.faces[0].tags)
       .then(tags=>tags.filter(tag=>parameters.includes(tag.name)))
      .then(filteredtags=>{
        console.log(filteredtags)
        let miniarray=[]
        if(filteredtags.find(x=>x.name=="race").value=="white"){
          miniarray.push({name: "white", value: "yes"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "no"})
        }else if(filteredtags.find(x=>x.name=="race").value=="asian"){
          miniarray.push({name: "white", value: "no"},{name: "asian", value: "yes"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "no"})
        }else if(filteredtags.find(x=>x.name=="race").value=="hispanic"){
          miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "yes"},{name: "black", value: "no"},{name: "indian", value: "no"})
        }else if(filteredtags.find(x=>x.name=="race").value=="black"){
          miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "yes"},{name: "indian", value: "no"})
        }else if(filteredtags.find(x=>x.name=="race").value=="indian"){
          miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "yes"})
        }
        return filteredtags.filter(x=>x.name!=="race").concat(miniarray)
      })
      .then(x=>{
        let obj={}
        let newArray=[]
        x.forEach(parse=>{
        let val=(parse.value=="yes"?1:0)
        let key = parse.name.split(" ").join("_");
        obj[key] = val;
        })

        return obj
      })
      .then(data=>{
        return user = {
          username: usernameEl.value,
          password: passwordEl.value,
          name:     nameEl.value,
          gender: gender,
          interest: interest,
          url: url,
          data
        }
      })
      .then(user=>postNewUserToServer(user))
      .then(resp=>{
        user.id= resp
        selectCelebsYouLike()
})
       })

}})
}




// //Post new user to server
const postNewUserToServer = (user) => {
fetch("https://dateyourcrashapi.herokuapp.com/signup", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(user)
})
.then(response => response.json())
.then(json => {
  userId = json})
.catch(err => alert(err))
}
