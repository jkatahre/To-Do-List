document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is ready");

    let item = document.querySelector("#input");
    let To_Do = document.querySelector("#li");

    item.addEventListener("keyup", (e) => {
        //document.querySelector(".store").innerHTML = "<div> Radhe Radhe </div>"
        // console.log(e.key)
        if (e.key == "Enter") {
            addItem(item.value)
            item.value = "";
        }
    })
    let addItem = (item) => {
        let new_item = document.createElement("li");

        new_item.innerHTML = `${item} <button class="btn"><img class="img" src="assets/png/cancel.png" alt="cancle"></button>`
        To_Do.appendChild(new_item);

        // let li = document.querySelectorAll(".span").forEach(e => {
        //     e.addEventListener("click", () => {
        //         // new_item.style.textDecoration = "line-through";
        //     });
        //  });
        new_item.addEventListener("click", () => {
                    // new_item.style.textDecoration = "line-through";
                    new_item.classList.toggle("done")
        });

        
        let btn = document.querySelectorAll(".btn").forEach(e => {
            e.addEventListener("click", () => {   
                new_item.addEventListener("click", ()=> {
                    new_item.remove()
                })
            })
        });

    
    }

});
