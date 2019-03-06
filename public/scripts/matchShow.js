let matchIds=[]
let matchSorted
let subbutton
const fetchMatch = () => {
  return fetch("https://dateyourcrashapi.herokuapp.com/usersmatch", {
    method: 'GET',
    headers: {
      'interest': interest,
      'gender': gender,
      'id': userId
    },
  })
  .then(resp => resp.json())
  .then(json =>{
    let matches=[]
    const network = new brain.NeuralNetwork()
    network.train(training)
    json.forEach(singleMatch=>{
      params=singleMatch.parameters.map(x=>Number(x))
      let output=network.run(params)
      console.log({name: singleMatch.name,output: output})
      singleMatch.index=output
      matches.push(singleMatch)
    })
    console.log(matches)
    matchSorted= matches.sort(function(a, b) {
  return b.index - a.index;
})
console.log(matchSorted)
fetchAsMatch(matchSorted.slice(0,2))
.then(resp=>resp.json())
.then(json=>{
  console.log(json)
  appendAllMatchesOntoPage(json)})
  })
}
const fetchAsMatch = (match) =>{
  return fetch("https://dateyourcrashapi.herokuapp.com/match", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({userId: userId, array: match})
  })
}
const appendAllMatchesOntoPage = (matches) =>{
  bodyEl.innerHTML=`<h1>Your matches are: </h1> <br>
    <div class="container" >
    <div class="row" id='matches-form'>

    </div>
    </div>
    <br>`
    matchForm=document.querySelector("#matches-form")
    matches.forEach(match=>{
        const div=document.createElement('div')
        div.className="col-lg-6"
        div.innerHTML=`

        <div class="thumbnail">
          <img class='match-thumbnail' src='${match.url}'>
          <div class="caption">
            <h2>${match.name}</h2>
            <p> Send your match a message!</p>
            <div class="message">
            <form class="form" id="add-user-form${match.id}">
              <input id="message-input${match.id}" class="form" type="text" placeholder="Enter your message">
              <br>
            <input type="submit" class="btn btn-primary btn-md" class="form" name="submit" value="Send Message" id="submit-btn"><br>
            </form>

            </div>
            <div class=Dashboard${match.id}>
              <h3>Your conversation with ${match.name}</h3>

            </div>
          </div>
        </div>

        `
        matchForm.appendChild(div)
        let subbutton=document.querySelector(`#add-user-form${match.id}`)
        subbutton.addEventListener("submit", event=>submitHandler(event,match.id,match.name))
        let x={name: match.name, id:match.id}
        matchIds.push(x)
    })
    console.log(matchIds)
    matchIds.forEach(match=>fetchMessages(userId,match))

}
 const fetchMessages = (userid, match)=>{
   console.log(match)
   return fetch("https://dateyourcrashapi.herokuapp.com/messages", {
     method: 'GET',
     headers: {
       'userId': userid,
       'matchId': match.id,
     },
   })
   .then(resp=>resp.json())
   .then(json=>{
     json.forEach(singleMessage=>{
       let sender
       let receiver
       if(singleMessage.sender_id==userId){
         sender="You"
         receiver=match.name
       }else{
         sender=match.name
         receiver="You"
       }
       let dash=document.querySelector(`.Dashboard${match.id}`)
       let mess=singleMessage.content
       let messagediv=document.createElement('div')
       messagediv.innerHTML=`From: ${sender}, To: ${receiver} at ${singleMessage.created_at} <br><h3>${mess}</h3><br>`
       dash.appendChild(messagediv)
     })
   })
 }

 const submitHandler= (event,matchid,matchname)=>{
   event.preventDefault()
   let content=document.querySelector(`#message-input${matchid}`)
   let message={content: content.value, sender_id:userId, receiver_id: matchid}
   fetch("https://dateyourcrashapi.herokuapp.com/message", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify({message})
   }).then(resp=>resp.json())
   .then(json=>{console.log(json)
     let dash=document.querySelector(`.Dashboard${matchid}`)
     let mess=json.content
     let messagediv=document.createElement('div')
     messagediv.innerHTML=`From: You, To: ${matchname} at ${json.created_at} <br><h3>${mess}</h3><br>`
     dash.appendChild(messagediv)
   })

 }
