const myPromise = new Promise((resolve, reject)=> {
    const error = confirm('Answer a Question');
    console.log(error)
    if(error===false){
        resolve("yes! the promise was resolved")
    }
    else{
        reject("no! the promise was rejected")
    }

});

myPromise.then(value=>{
    console.log(value)
    return value;
})

.then(newValue=>{    
    return newValue+" -2nd time";
})

.then(latestValue=>{
    console.log(latestValue)
})

.catch(err=>{
    console.error(err);
})



// const todos = fetch("https://jsonplaceholder.typicode.com/todos")

// console.log(todos)

// const todo = fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response=>{
//         return response.json();
//     })
//     .then(data=>{data.forEach(todo=>{
//         console.log(todo)
//     })
//         console.log(data);
//     })


//using async/await
const myList = {
   newArray : []
}

const todoList = async()=>{
    const newTodo = await fetch("https://jsonplaceholder.typicode.com/todos")
    
    const newResponse = await newTodo.json()

    // return newResponse
    displayList(newResponse)
    // sessionStorage.setItem("newEmailStore", JSON.stringify(newResponse))
}

const displayList=(data)=>{
    console.log(data)
}
todoList()


// -- if display(newResponse) wasnt called in async function --

// const displayTodoList = async ()=>{
//     const data =  await todoList()

//     const newDataArray = data.map(user=>{
//         // console.log(user)
//         for(i in user){
//             console.log(user.title)
//         }
//         return user.id
//     })


//     console.log(newDataArray)

//     // console.log(newEmailArray)
// }

// displayTodoList()


const getDadJoke = async()=>{
    const response = await fetch("https://icanhazdadjoke.com/",{method:"GET", headers:{Accept: "application/json"}});
    const jsonJokeData = await response.json();
    return jsonJokeData;
}

const DisplayDadJoke= async()=>{
    const displayJoke = await getDadJoke()
    document.querySelector('html').textContent=displayJoke.joke
    console.log(displayJoke.joke)}
    
DisplayDadJoke()