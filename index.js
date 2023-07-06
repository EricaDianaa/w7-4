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
let photo= document.getElementById("img")


dati.photos.forEach(img => {
buttonLoad1.addEventListener("click", function(){
    let newImg = document.createElement('img')
    newImg.setAttribute('src', img.src.medium)
photo.appendChild(newImg)
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
        let newImg2 = document.createElement('img')
    newImg2.setAttribute('src', img.src.medium)
   
    photo.appendChild(newImg2)
    })

    
})
let deletebutton= document.querySelectorAll("#hide")
deletebutton.forEach((element)=>{
    element.addEventListener("click",function(){
       element.parentElement.parentElement.parentElement.remove() 
    })


})


})
.catch((err)=>{
    console.log( "Errore", err)
})
}

createdati1()



    

    