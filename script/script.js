document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is ready");

    let item = document.querySelector("#input");
    let To_Do = document.querySelector("#li");
    let complite_Work = document.querySelector("#li2");
    // let running_work = document.querySelector("#running")
    let running_work = document.querySelector(".running_container")
    let pending_work = document.querySelector("#pending")

    let itemsList = [] 


    // let item = {
    //     id:1,
    //     todo:"",
    //     date:"",
    //     isCompleted:false
    // }

    class Task {
        id = 1
        taskName = ""
        Date = null
        isCompleted = false
        constructor(id, taskName) {
            this.id = id
            this.taskName = taskName
        }
    }

    let savedList = localStorage.getItem("task")
    if (savedList) {
        itemsList = JSON.parse(savedList)
        for (const currItem of itemsList) {
            generateUI(currItem)

        }
    }

    item.addEventListener("keyup", (e) => {
        //document.querySelector(".store").innerHTML = "<div> Radhe Radhe </div>"
        // console.log(e.key)
        if (e.key == "Enter" && item.value != "") {
            addItem(item.value)
            item.value = "";
        }

    })
    let addItem = (item) => {


        //Class based
        let newItem = new Task(1, item)


        //Object key 
        let currTask = {
            id: parseInt(Math.random() * 100 + 1),
            taskName: item,
            date: "",
            isCompleted: false,
            status: "pending"
        }

        itemsList.push(currTask)

        console.log(itemsList)
        generateUI(currTask)



        // let li = document.querySelectorAll(".span").forEach(e => {
        //     e.addEventListener("click", () => {
        //         // new_item.style.textDecoration = "line-through";
        //     });
        //  });
    }

    function generateUI(currItem) {
        let date = new Date();
        let time = date.toLocaleString()
        // for (let i=0; i < itemsList.length; i++) {
        // let currItem = itemsList[i]
        // let new_item = document.createElement("li");
        let new_item = document.createElement("div");
        new_item.className = "newItems"
        new_item.setAttribute('draggabke', 'true');
        // new_item.innerHTML = `${currItem.taskName} <p class="time" >${time}</p> <button class="btn2"><img style="height: 22px; margin: 1px 5px;" src="assets/png/yes.png" alt="yes"></button><button class="btn"><img class="img" src="assets/png/cancel.png" alt="cancle"></button>`
        new_item.innerHTML = `<div class="task_container" draggable="true">${currItem.taskName} <p class="time" >${time}</p> <button class="btn2"><img style="height: 22px; margin: 1px 5px;" src="assets/png/yes.png" alt="yes"></button><button class="btn"><img class="img" src="assets/png/cancel.png" alt="cancle"></button></div>`
        // To_Do.appendChild(new_item)
        running_work.appendChild(new_item)



        new_item.addEventListener("click", () => {
            // new_item.style.textDecoration = "line-through";
            // new_item.classList.toggle("done")
            pending_work.appendChild(new_item)
        });


        let btn = document.querySelectorAll(".btn").forEach(e => {
            e.addEventListener("click", () => {
                new_item.addEventListener("click", () => {
                    new_item.remove()
                    itemsList = itemsList.filter(item => item.id != currItem.id)
                    localStorage.setItem("task", JSON.stringify(itemsList))

                    // itemsList.(currItem)
                    console.log(itemsList)
                })
            })
        });
        document.querySelectorAll(".btn2").forEach(e => {
            e.addEventListener("click", () => {
                new_item.addEventListener("click", () => {

                    complite_Work.appendChild(new_item)
                })
            })
        })

        console.log(itemsList)
        localStorage.setItem("task", JSON.stringify(itemsList))
        // }
    }

    let runningItem = document.querySelector(".running_container");
    let pandingItem = document.querySelector(".panding_container");
    let completeItem = document.querySelector(".complete_container");


    let newItems = document.querySelectorAll(".newItems")
    for(lists of newItems){
        lists.addEventListener("dragstart", (e)=>{
            let select = e.target
            console.log(select)
            runningItem.addEventListener("dragover", (e)=>{
                e.preventDefault();

            })
            runningItem.addEventListener("drop", (e)=>{
                runningItem.appendChild(select)
                select = "";
            })

            pandingItem.addEventListener("dragover", (e)=>{
                e.preventDefault();
            })
            pandingItem.addEventListener("drop", (e)=>{
                pandingItem.appendChild(select)
                select="";
               
            })
            completeItem.addEventListener("dragover", (e)=>{
                e.preventDefault();

            })
            completeItem.addEventListener("drop", (e)=>{
                completeItem.appendChild(select)
                select = "";
            })
          

        })

    }


})
