const mainDiv = document.querySelector('main')

function createDiv(parents){
    const newDiv = document.createElement("div");
    newDiv.style.display = 'flex'    
    newDiv.style.justifyContent = 'center'
    newDiv.style.alignItems = 'center'
    newDiv.style.minHeight = '75px'
    newDiv.style.minWidth = '35px'
    newDiv.style.backgroundColor='yellow'
    newDiv.style.borderWidth='2px'
    newDiv.style.borderColor='black'
    newDiv.style.borderRadius = '15px'
    newDiv.style.fontSize= '50px'
    newDiv.innerHTML= `<p>💻</p>`
    newDiv.style.padding='10px'

    document.querySelector('main').addEventListener('click',()=>{
        parents.append(newDiv)
    })

    
}

document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === 'complete'){
        console.log("readyState: complete");
        // document.querySelector('main').style.backgroundColor='blue'
        // document.querySelector('header').style.backgroundColor='red'

        // createDiv(document.querySelector('main'))
        for(let i = 0; i<=12; i++){createDiv(document.querySelector('main'))}
    }
})
document.querySelector('nav h2').addEventListener("click", (event)=>{
    
    event.target.textContent='Event Listener Works'
}, false)
document.querySelector('nav').addEventListener("click", (event)=>{
    
    event.target.style.color='green'
}, false)
document.querySelector('header').addEventListener("mouseover", (event)=>{
    let newText = document.querySelector("h1")
    newText.textContent==='Header'? (newText.textContent='This is the company name', newText.fontSize='100px'):newText.textContent='Header'
    event.target.style.backgroundColor='blue'
}, false)
