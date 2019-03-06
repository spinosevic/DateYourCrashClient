let training=[]
let selected=[]
let name
let sentence="Pick the celebrities who you find attractive"
const selectCelebsYouLike = () => {
  fetch("https://dateyourcrashapi.herokuapp.com/celebrities")
    .then(response => response.json())
    .then(celebrities =>filterCelebrities(celebrities))
      .then(celebrities=>appendAllCelebritiesOntoPage(celebrities))
    // .then(y=>fetchNewCel())
}
// const fetchNewCel = () =>{
//   fetch("https://dateyourcrashapi.herokuapp.com/celebsLong")
//     .then(response => response.json())
//     .then(data=> filterCelebrities(data.json).forEach(x=>addCelbToForm(x)))
// }
const appendAllCelebritiesOntoPage= (celebrities)=> {

bodyEl.innerHTML = `
  <h1>${sentence}</h1> <br>
  <form id='add-celebrity-form'>
  </form>
  <br>
  `
  celebrities.forEach(celebrity => appendCelebrityOntoPage(celebrity))
  celebForm=document.querySelector("#add-celebrity-form")
  let newDiv=document.createElement('div')
  newDiv.classList.add("divButton")
  newDiv.innerHTML=`<br><br><br><input class='button' type='submit' name='submit' value='Submit your choices' id='submit-celeb-btn'> <br>
`
  celebForm.appendChild(newDiv)
  celebForm.addEventListener('submit', event=>{
    event.preventDefault()
    let object
    const allCheckboxes=document.querySelectorAll(".celeb_checkbox")
    allCheckboxes.forEach(checkbox =>{
      if(checkbox.checked){
        selected.push(checkbox.name)
        object={input: checkbox.celebrity.map(x=>Number(x)), output: [sentence=="Pick the celebrities who you find attractive"?1:0]}
        training.push(object)
      }
    })
    if(sentence==="Pick the celebrities who you find attractive"){
      sentence="Now pick up the celebrities you DO NOT find attractive at all!"
      scroll(0,0)
      console.log(celebrities)
      celebrities=celebrities.filter(x=>!selected.includes(x.name.split(" ").join("_")))
      console.log(celebrities)
      appendAllCelebritiesOntoPage(celebrities)
    }else{
      if (userId==undefined){
        let div=document.createElement('div')
        div.innerHTML=`Wait for the analysis of your face parameters to be done, try again in 5 seconds (sometimes the API)`
        bodyEl.appendChild(div)
      }else{
      fetchMatch()
    }

  }})
  // function create_Array(celeb) {
  //   let newArray=[]
  //   for(characteristic in celeb) {
  //     console.log(characteristic)
  //   newArray.push(celeb[characteristic])
  //   }
  // return newArray
  // }
}

const appendCelebrityOntoPage = (celebrity) => {

  const div=document.createElement('div')
  div.classList.add('card')
  div.innerHTML=`
  <h2>${celebrity.name}</h2>
  <div class="img_wrapper">
    <img class='friend-thumbnail' src='${celebrity.url}'>
  </div>
  `
  div.className="celebrity-card"
  const input = document.createElement('input')
  input.classList = 'celeb_checkbox'
  input.classList.add(celebrity.name.split(" ").join("_"))
  input.type = 'checkbox'
  input.name = celebrity.name.split(" ").join("_")
  input.id = celebrity.name
  input.celebrity=celebrity.parameters
  div.appendChild(input)

  celebForm=document.querySelector("#add-celebrity-form")
  celebForm.appendChild(div)
  const celebImgEl = div.querySelector('.img_wrapper')
  celebImgEl.addEventListener('click', event => {
    input.checked=!input.checked
    if(input.checked){
      celebImgEl.style.border= '5px'
      celebImgEl.style.borderStyle ='solid'
      celebImgEl.style.borderColor ='red'
    }else{
      celebImgEl.style.border= ''
      celebImgEl.style.borderStyle =''
      celebImgEl.style.borderColor =''}
  })

}

const addCelbToForm = (celebrity)=>{
  name=celebrity.name.split(" ").join("_")
  document.querySelector(`.${name}`).celebrity=celebrity.descriptions[0]
}

const filterCelebrities =(celebrities)=>{
  if(interest==="male"|| interest==="female"){
  return  celebrities=celebrities.filter(y=>y.gender==interest)
}else{
  return celebrities
}
}
