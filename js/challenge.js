document.addEventListener("DOMContentLoaded", function () {
    const timer = document.querySelector("h1#counter")
    let isPaused = false

    const intervalID = setInterval(function(){
        if (!isPaused) {
            timer.textContent++
        }   
    }, 1000)

    const minusButton = document.querySelector("button#minus")

    
    minusButton.addEventListener("click", function(e) {
        timer.textContent--
    })
    
    const plusButton = document.querySelector("button#plus")

    plusButton.addEventListener("click", function(e) {
        timer.textContent++
    })

    const heartButton = document.querySelector("button#heart")
    const likesContainer = document.querySelector("ul.likes")

    heartButton.addEventListener("click", function(e) {
        const li = document.querySelector(`li[data-num='${timer.textContent}']`)
        let count;
        if (li) {
            li.querySelector("span").textContent++
        } else {
            const newLi = document.createElement("li")
            newLi.setAttribute("data-num", timer.textContent)
            newLi.innerHTML = `${timer.textContent} has been liked <span>1</span> time`
            likesContainer.append(newLi)
        }
        
    })

    const pauseButton = document.querySelector("button#pause")

    
    pauseButton.addEventListener("click", function(e) {
        if (pauseButton.textContent == " pause ") {
            console.log("asfnaskfn")
            isPaused = true
            pauseButton.textContent = " resume "
            minusButton.disabled = true
            plusButton.disabled = true
            heartButton.disabled = true
        } else {
            isPaused = false
            pauseButton.textContent = " pause "
            timer.textContent = 0
            minusButton.disabled = false
            plusButton.disabled = false
            heartButton.disabled = false
        }

        
    })

    const submitButton = document.querySelector("button#submit")
    const commentList = document.querySelector("div#list")

    submitButton.addEventListener("click", function(e) {
            const p = document.createElement("p")
            // commentLi.textContent = `${document.querySelector("input#comment-input").value}`
            p.textContent = "hi"
            commentList.append(p)
    })
    

    
    
})