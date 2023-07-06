// AUTORIZZAZIONE= sAfcB5KP15RQIqDpw4Y2BKLrMU4twKBh7PxyLpkPqW11Xis39fr7cSyH



const createdati= function(){
    fetch("https://api.pexels.com/v1/search?query=dog",{
      headers: {
      Authorization: "sAfcB5KP15RQIqDpw4Y2BKLrMU4twKBh7PxyLpkPqW11Xis39fr7cSyH"
    }})
.then((res)=>{
    if(res.ok){
        return res.json()
    }
    else{
        throw new Error("Errore")
    }
})
.then((dati)=>{
    console.log(dati)
    
    //RIFERIMENTI BOTTONI LOAD
let buttonLoad1= document.getElementById("button1")
let buttonLoad2= document.getElementById("button2")
// let photo= document.getElementById("img")


 dati.photos.forEach(img => {
buttonLoad1.addEventListener("click", function(){
let col= document.createElement("div")
   col.classList.add("col", "col-sm-6", "col-md-6","col-lg-3" )
   col.innerHTML=  `
             <div class="card mb-4 shadow-sm">
          <img src= "${img.src.medium}" class="card-img-top alt="">
                <div class="card-body">
                  <h5 class="card-title">Dog</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        id="hide"
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        hide
                      </button>
                    </div>
                    <small class="text-muted">${img.id}</small>
                  </div>
                </div>
              </div> 

              `
              row.appendChild(col)
})
})



    
})
.catch((err)=>{
    console.log( "Errore", err)
})


}

createdati()



const createdati1= function(){
    fetch("https://api.pexels.com/v1/search?query=kitten",{
      headers: {
      Authorization: "sAfcB5KP15RQIqDpw4Y2BKLrMU4twKBh7PxyLpkPqW11Xis39fr7cSyH"
    }})
.then((res)=>{
    if(res.ok){
        return res.json()
    }
    else{
        throw new Error("Errore")
    }
})
.then((dati)=>{
    console.log(dati)
    
    //RIFERIMENTI BOTTONI LOAD
let buttonLoad1= document.getElementById("button1")
let buttonLoad2= document.getElementById("button2")
let photo= document.getElementById("img")


dati.photos.forEach(img => {
    buttonLoad2.addEventListener("click", function(){
        let col= document.createElement("div")
        col.classList.add("col", "col-sm-6", "col-md-6","col-lg-3" )
        col.innerHTML=  `
                  <div class="card mb-4 shadow-sm "">
               <img src= "${img.src.medium}" class="card-img-top alt="">
                     <div class="card-body">
                       <h5 class="card-title">kitten</h5>
                       <p class="card-text">
                         This is a wider card with supporting text below as a natural
                         lead-in to additional content. This content is a little bit
                         longer.
                       </p>
                       <div
                         class="d-flex justify-content-between align-items-center"
                       >
                         <div class="btn-group">
                           <button
                             type="button"
                             class="btn btn-sm btn-outline-secondary"
                           >
                             View
                           </button>
                           <button id="hide"
                            
                             type="button"
                             class="btn btn-sm btn-outline-secondary"
                           >
                             hide
                           </button>
                         </div>
                         <small class="text-muted">${img.id}</small>
                       </div>
                     </div>
                   </div> 
     
                   `
                   row.appendChild(col)
   
    })

    let deletebutton= document.querySelectorAll("#hide")
deletebutton.forEach((element)=>{
    element.addEventListener("click",function(){
      console.log("ciao")
})


    })


})


})
.catch((err)=>{
    console.log( "Errore", err)
})
}

createdati1()



    

    