const todoBtn = document.querySelector("#todo-btn")

let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    let obj = {
        id:1,
        name: "najot ta'lim",
        time: time,
    }
    let list = [obj]
    localStorage.setItem("list",JSON.stringify(list))

    todoBtn.addEventListener("click", () =>{
        alert("Add new todo");
        let objInLs = JSON.parse(localStorage.getItem("list"))
        let name = prompt("Enter todo name");
        let newObj = {
            id: 1,
            name: name,
            time: time
        }
      
    
      objInLs.push(newObj)
      console.log(objInLs)

    //  localStorage.setItem(JSON.stringify(objInLs))

    })



// let objTodo = {
//     name: "Najot ta'lim",
//     time: time
// }
// let list = [objTodo]
// localStorage.setItem("list", JSON.stringify(list))

// todoBtn.addEventListener("click",() => {
//     let todo = prompt("TODO kiriting");
//    let  newObjTodo = {
//         name: todo,
//         time: time
//     }
// })

// let newTodo = JSON.parse(localStorage.getItem(list))
// list.push(newObjTodo)
// localStorage.setItem(JSON.stringify("list", newTodo))