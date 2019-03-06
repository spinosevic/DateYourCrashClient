// const seedCeleb = (array)=> {
//   let gender
//   let name
//   array.forEach(x=>{
//     name=x.name
//     fetch('https://www.betafaceapi.com/api/v2/media', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({"api_key": "d45fd466-51e2-4701-8da8-04351c872236",
//      "file_uri": x.url,
//      "detection_flags": "basicpoints,propoints,classifiers,content",
//      "recognize_targets": [
//        "all@mynamespace"
//      ],
//      "original_filename": "sample.png"})
//    }).then(resp => resp.json())
//    .then(json=>json.media.media_uuid)
//    .then(media_uuid=>{
//     return fetch(`https://www.betafaceapi.com/api/v2/media?api_key=d45fd466-51e2-4701-8da8-04351c872236&media_uuid=${media_uuid}`,{
//        method: 'GET',
//        headers: {'Content-Type': 'application/json'}})
//        .then(resp=>resp.json())
//        .then(json=>json.faces[0].tags)
//        .then(face=>{
//          console.log(face)
//          filteredtags=face.filter(tag=>parameters.includes(tag.name))
//          let miniarray=[]
//          if(filteredtags.find(x=>x.name=="race").value=="white"){
//            miniarray.push({name: "white", value: "yes"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "no"})
//          }else if(filteredtags.find(x=>x.name=="race").value=="asian"){
//            miniarray.push({name: "white", value: "no"},{name: "asian", value: "yes"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "no"})
//          }else if(filteredtags.find(x=>x.name=="race").value=="hispanic"){
//            miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "yes"},{name: "black", value: "no"},{name: "indian", value: "no"})
//          }else if(filteredtags.find(x=>x.name=="race").value=="black"){
//            miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "yes"},{name: "indian", value: "no"})
//          }else if(filteredtags.find(x=>x.name=="race").value=="indian"){
//            miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "yes"})
//          }
//          filteredtags=filteredtags.filter(x=>x.name!=="race").concat(miniarray)
//          let obj={}
//          let newArray=[]
//          filteredtags.forEach(parse=>{
//          let val=(parse.value=="yes"?1:0)
//          let key = parse.name.split(" ").join("_");
//          obj[key] = val;
//          })
//          gender=face.find(y=>y.name==="gender").value
//          fetch("http://localhost:3000/celebs", {
//            method: "POST",
//            headers: {"Content-Type": "application/json"},
//            body: JSON.stringify([gender, obj, name, x.url])
//          })
//        })
//   })
// })}
//
//
// celebToSeed=[{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359795/zoe_kravitz.jpg", name:"Zoe Kravitz"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359794/zazie_beetz.jpg", name:"Zazie Beetz"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359763/zach_galifianakis.jpg", name:"Zach Galifianakis"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359779/will_smith.jpg", name:"Will Smith"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359762/vincent_cassel.jpg", name:"Vincent Cassel"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359774/vin_diesel.jpg", name:"Vin Diesel"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359794/tyra_banks.jpg", name:"Tyra Banks"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359769/tom_holland.jpg", name:"Tom Holland"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359773/tom_hardy.jpg", name:"Tom Hardy"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359767/tom_cruise.jpg", name:"Tom Cruise"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359794/thandie_newton.jpg", name:"Thandie Newton"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359786/taylor_swift.jpg", name:"Taylor Swift"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359770/taylor_lautner.jpg", name:"Taylor Lautner"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359774/steve_buscemi.jpg", name:"Steve Buscemi"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359778/sophie_turner.jpg", name:"Sophie Turner"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359778/sofia_vergara.jpg", name:"Sofia Vergara"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359766/shia_lebouf.jpg", name:"Shia Lebouf"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359763/shawn_pyfrom.jpg", name:"Shawn Pyfrom"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359765/seth_rogen.jpg", name:"Seth Rogen"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359778/scarlett_johansson.jpg", name:"Scarlett Johansson"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359779/sandra_bullock.jpg", name:"Sandra Bullock"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359766/ryan_gosling.jpg", name:"Ryan Gosling"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359778/rosario_dawson.jpg", name:"Rosario Dawson"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359774/ron_swanson.jpg", name:"Ron Swanson"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359766/robert_downey.jpg", name:"Robert Downey Jr"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359767/roger_federer.jpg", name:"Roger Federer"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359778/rhianna.jpg", name:"Rhianns"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359778/oprah.jpg", name:"Oprah"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359777/nicole_kidman.jpg", name:"Nicole Kidman"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359777/nathialie_emannuel.jpg", name:"Nathalie Emannuel"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359776/naomi_campbell.jpg", name:"Naomi Campbell"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359773/michael_ealy.jpg", name:"Michael Ealy"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359776/mia_khalifa.jpg", name:"Mia Khalifa"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359776/meryl_streep.jpg", name:"Meryl Streep"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359777/melania_trump.jpg", name:"Melania Trump"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359776/megan-fox-t.jpg", name:"Megan Fox"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359775/mariagrazia_cucinotta.jpg", name:"Mariagrazia Cucinotta"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359769/mamoudou_athie.jpg", name:"MamouDou Athie"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359774/lucyliu.jpg", name:"Lucy Liu"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359768/louis_ck.jpg", name:"Louis CK"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359767/lewis_hamilton.jpg", name:"Lewis Hamilton"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359768/leonardo_di_caprio.jpg", name:"Leonardo di Caprio"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359773/lebron_james.jpg", name:"Lebron James"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359768/krysten_ritter.webp", name:"Krysten Ritter"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359769/kit_harrington.jpg", name:"Kit Harrington"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359768/kim_kardashian.jpg", name:"Kim Kardashian"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359767/katy_perry.jpg", name:"Katy Perry"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359769/kanye_west.jpg", name:"Kanye West"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359762/justin_bieber.jpg", name:"Justin Bieber"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359767/julia_roberts.jpg", name:"Julia Roberts"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359773/joseph_gordon_lewith.jpg", name:"Joseph Gordon Lewith"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359767/jonah_hill.jpg", name:"Jonah Hill"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359767/joan_chen.jpg", name:"Joan Chen"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359766/jessica_biel.jpg", name:"Jessica Biel"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359766/jennifer_lopez.jpg", name:"Jennifer Lopez"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359766/jennifer_lawrence.jpg", name:"Jennifer Lawrence"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359765/jennifer_aniston.jpg", name:"Jennifer Aniston"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359771/jayden_smith.jpg", name:"Jayden Smith"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359774/jay_z.jpg", name:"Jay Z"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359772/jason_momoa.jpg", name:"Jason Momoa"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359771/jamie_foxx.jpg", name:"Jamie Foxx"},{url:"Jhttps://res.cloudinary.com/dpymfekpd/image/upload/v1551359771/james_franco.jpg", name:"James Franco"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359773/jake_gyllenhall.jpg", name:"Jake Gyllenhall"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359766/halle_barry.jpg", name:"Halle Barry"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359765/gerard_butler.jpg", name:"Gerard Butler"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359769/george_clooney.jpg", name:"George Clooney"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359775/floyd_mayweather.jpg", name:"Floyd Mayweather"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359766/federica_nargi.jpg", name:"Federica Nargi"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359765/emma_watson.jpg", name:"Emma Watson"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359765/emma_stone.jpg", name:"Emma Stone"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359765/emily_clarke.jpg", name:"Emily Clarke"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359763/ellen_degeneres.jpg", name:"Ellen Degeneris"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359769/eddie_redmayne.jpg", name:"Eddie Redmayne"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359764/drew_barrymore.jpg", name:"Drew Barrymore"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359775/drake.jpg", name:"Drake"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359768/donald_trump.jpg", name:"Donald Trump"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359773/donald_glover.jpg", name:"Donald Glover"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359763/dewanda_wise.jpg", name:"Dewanda Wise"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359767/denzel_washington.jpg", name:"Denzel Washington"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359772/cristiano_ronaldo.jpg", name:"Cristiano Ronaldo"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359763/charlize_theron.jpg", name:"Charlize Theron"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359770/cardi_b.jpg", name:"Cardi B"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359763/cara_delevigne.jpg", name:"Cara Delevigne"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359762/brenda_song.jpg", name:"Brenda Song"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359772/bradley_cooper.jpg", name:"Bradley Cooper"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359762/beyonce.jpg", name:"Beyonce"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359769/benedit_cumberbatch.jpg", name:"Benedict Cumberbatch"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359764/barack_obama.jpg", name:"Barack Obama"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359765/aubrey_plaza.jpg", name:"Aubrey Plaza"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359762/angelina_jolie.jpg", name:"Angelina Jolie"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359762/america_ferrera.jpg", name:"America Ferrera"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359762/adele.jpg", name:"Adele"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359764/adam_brody.jpg", name:"Adam Brody"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359772/action_bronson.jpg", name:"Action Bronson"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359772/aaron_paul.jpg", name:"Aaron Paul"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359768/MCGREGOR_CONOR.png", name:"Conor McGregor"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359773/31-johnny-depp.w710.h473.2x.jpg", name:"Johnny Depp"},{url:"https://res.cloudinary.com/dpymfekpd/image/upload/v1551359772/0114-aziz-ansari-getty-4.jpg", name:"Aziz Ansair"}]
// seedCeleb(celebToSeed)


// 
//
//
//
//
//
// const seedUsers= (users)=>{
//   users.forEach(x=>seedUser(x))
// }
//
// const seedUser = (x) => {
//
//   fetch('https://www.betafaceapi.com/api/v2/media', {
//  method: 'POST',
//  headers: {'Content-Type': 'application/json'},
//  body: JSON.stringify({"api_key": "d45fd466-51e2-4701-8da8-04351c872236",
//    "file_uri": x.url,
//    "detection_flags": "basicpoints,propoints,classifiers,content",
//    "recognize_targets": [
//      "all@mynamespace"
//    ],
//    "original_filename": "sample.png"})
//  }).then(resp => resp.json())
//  .then(json=>{
//    console.log(json)
//
//    return json.media.media_uuid})
//  .then(media_uuid=>{
//   return fetch(`https://www.betafaceapi.com/api/v2/media?api_key=d45fd466-51e2-4701-8da8-04351c872236&media_uuid=${media_uuid}`,{
//      method: 'GET',
//      headers: {'Content-Type': 'application/json'}})
//      .then(resp=>resp.json())
//      .then(json=>json.faces[0].tags)
//      .then(tags=>tags.filter(tag=>parameters.includes(tag.name)))
//     .then(filteredtags=>{
//       console.log(filteredtags)
//       let miniarray=[]
//       if(filteredtags.find(x=>x.name=="race").value=="white"){
//         miniarray.push({name: "white", value: "yes"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "no"})
//       }else if(filteredtags.find(x=>x.name=="race").value=="asian"){
//         miniarray.push({name: "white", value: "no"},{name: "asian", value: "yes"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "no"})
//       }else if(filteredtags.find(x=>x.name=="race").value=="hispanic"){
//         miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "yes"},{name: "black", value: "no"},{name: "indian", value: "no"})
//       }else if(filteredtags.find(x=>x.name=="race").value=="black"){
//         miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "yes"},{name: "indian", value: "no"})
//       }else if(filteredtags.find(x=>x.name=="race").value=="indian"){
//         miniarray.push({name: "white", value: "no"},{name: "asian", value: "no"},{name: "hispanic", value: "no"},{name: "black", value: "no"},{name: "indian", value: "yes"})
//       }
//       return filteredtags.filter(x=>x.name!=="race").concat(miniarray)
//     })
//     .then(x=>{
//       let obj={}
//       let newArray=[]
//       x.forEach(parse=>{
//       let val=(parse.value=="yes"?1:0)
//       let key = parse.name.split(" ").join("_");
//       obj[key] = val;
//       })
//
//       return obj
//     })
//     .then(data=>{
//       return user = {
//         username: x.username,
//         password: x.password,
//         name:     x.name,
//         gender: x.gender,
//         interest: x.interest,
//         url: x.url,
//         data
//       }
//     })
//     .then(user=>postNewUserToServer(user))
//
//      })
//
// }
//
// let maleName= ["Normand",  
// "Riley",  
// "Lorenzo",  
// "Felton",  
// "Foster",  
// "Elliot",  
// "Eldridge",  
// "Toby",  
// "Rocky",  
// "Shawn",  
// "Conrad",  
// "Luciano",  
// "Efrain",  
// "Mitchel",  
// "Harvey",  
// "Milo",  
// "Miguel",  
// "William",  
// "Len",  
// "Karl"]
// let femaleName= [
//   "Tijuana",
// "Dorothea",
// "Britteny",
// "Carlotta",
// "Shanelle",
// "Jill",
// "Etta",
// "Celinda",
// "Tierra",
// "Cathryn",
// "Victorina",
// "Dottie",
// "Ayesha",
// "Claretta",
// "Zenaida",
// "Amber",
// "Tammie",
// "Flo",
// "Berta",
// "Albina"
// ]
// let password="password"
//
// let malepics=[
//   "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788425/adult-beard-boy-903661.jpg",
//   "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788425/adult-asian-belt-936593.jpg",
//   "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788422/blue-casual-eyeglasses-939817.jpg",
//   "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788421/pexels-photo-1222271.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788420/pexels-photo-1004109.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788421/pexels-photo-1300402.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788420/pexels-photo-1043474.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788420/pexels-photo-1139743.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788419/face-facial-hair-fine-looking-614810.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788416/business-businessman-contemporary-532220.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788416/pexels-photo-220453.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788416/pexels-photo-325682.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788417/pexels-photo-450214.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788417/pexels-photo-374044.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788418/pexels-photo-594610.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788417/pexels-photo-713520.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788418/pexels-photo-775358.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788419/pexels-photo-936043.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551788418/pexels-photo-936229.jpg"
// ]
//
// let femalepics=[
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789142/attractive-bag-blurred-background-936313.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789137/attractive-background-beautiful-756453.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789136/adult-asia-attractive-937483.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789134/adult-beautiful-brunette-1181686.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789134/afro-close-up-daylight-818819.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789131/curly-curly-hair-eyes-718978.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789130/adult-beautiful-close-up-38554.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789126/adult-attractive-beautiful-1367270.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789125/beautiful-cute-daylight-1468379.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789121/beautiful-daylight-dress-1666073.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789117/adult-afro-blur-1181519.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789116/adult-arms-business-1413655.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789114/beautiful-brunette-cute-774909.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789111/adolescent-attractive-beautiful-709802.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789109/attractive-beautiful-beauty-415829.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789107/attractive-beautiful-beautiful-eyes-1580270.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789103/beautiful-beauty-blouse-1036623.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789103/basket-beautiful-beauty-1386604.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789103/adolescent-attractive-beautiful-638700.jpg",
// "https://res.cloudinary.com/dpymfekpd/image/upload/v1551789102/attractive-beautiful-beauty-460237.jpg"]
//
// const create_objects= (maleName,femaleName,malepics,femalepics,password)=>{
//   limit = maleName.length;
//   let array=[]
//   for(let i=0; i<limit; i++) {
//     let obj1={
//         username: maleName[i],
//         password: password,
//         name:     maleName[i],
//         gender: "male",
//         interest: "both",
//         url: malepics[i]
//       }
//       let obj2={
//           username: femaleName[i],
//           password: password,
//           name:     femaleName[i],
//           gender: "female",
//           interest: "both",
//           url: femalepics[i]
//         }
//       array.push(obj1)
//       array.push(obj2)
//     }
//
//       return array
//   }
//
// let arrayObject= create_objects(maleName,femaleName,malepics,femalepics,password)
// seedUsers(arrayObject)
