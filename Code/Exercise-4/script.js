container = document.getElementsByClassName("container")[0]
setInterval(()=>{

    const clock = new Date()

    let hour = clock.getHours()
    let min = clock.getMinutes()
    let sec = clock.getSeconds()
    // console.log(sec)
    let date = clock.getDate()
    let month = clock.getMonth()
    let year = clock.getFullYear()
    // let time = document.createElement()
    container.innerHTML =  `
    <p id="date1">${date}-${month}-${year} </p>
    <div class="time">
    <h1>${hour} : ${min} : ${sec}</h1>
    <p id="min">Min</p>
    <p id="hour">Hour</p>
    <p id="sec">Sec</p>
    </div>
    <p id="date">Date</p>
    `
}, 1000)



// clearInterval(main)







 
    // container.insertAdjacentElement("beforeend", time)



    // console.log()

