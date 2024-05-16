
    const addBtn = document.querySelector(("#add-btn"));
    const showBtn = document.querySelector(("#show-btn"));
    const todoWrap = document.querySelector(("#todoWrap"));
    const delBtn = document.querySelector(("#delete-btn"))
    
    
    // ADD TODO FUNCTION 
    const RESULT_ADD_TODO = JSON.parse(localStorage.getItem("todoResult")) || [];

    function NewTodo(todoName, hour, minut, second) {
        this.id = String(RESULT_ADD_TODO.length + 1).padStart(5,"0")
        this.name = todoName;
        this.hour = hour.toString().padStart(2,"0");
        this.minut = minut.toString().padStart(2,"0");
        this.second = second.toString().padStart(2,"0");
    }
    
   function addTodo() {
        let todoName = prompt("Enter a todoName");
        if (todoName !== "") {
            let hour = new Date().getHours();
        let minut = new Date().getMinutes();
        let second = new Date().getSeconds();

       
        let resNewTodo = new NewTodo(todoName, hour, minut, second);
        RESULT_ADD_TODO.push(resNewTodo)
        console.log(RESULT_ADD_TODO)
        localStorage.setItem("todoResult" , JSON.stringify(RESULT_ADD_TODO));

        }
        else{
            alert("Enter todoName")
        }
        
   }

   //  ........ showTodo function .........
    const showTodo = function () {
        todoWrap.innerHTML=""
       RESULT_ADD_TODO.forEach(n => {
        todoWrap.innerHTML += `
       <div class="todo-list" >
            <h2>${n.id}</h2>
            <h2>${n.name}</h2>
          
            <span>${n.hour} : ${n.minut} : ${n.second}</span>
       </div>
        `
       });
    }

    const delTodo = function(){
        let delName = prompt("Enter a delete todoname")
       
        if (delName) {
            let delElement = RESULT_ADD_TODO.filter(element => element.id !== delName);
            
            localStorage.setItem("todoResult", JSON.stringify(delElement))
        }
      
    }


    // ADD TODO EVENT
    addBtn.addEventListener("click", addTodo);
    showBtn.addEventListener("click", showTodo);
    delBtn.addEventListener("click", delTodo )
