let mainp = document.createElement("p")
listofmsgs = [`Initializing hack program...`,
    `Hacking Vidushi's Username...`,
    `Username found Vidushi...`,
    `Connecting to the computer and hacking Google id and password...`,
    `Vidushi's google account: vidushisharma@gmail.com, password: 24ndj18jsa`,
    `Saving changes...`,
    `Vidushi's Computer and google account hacked successfully!`
]
document.body.append(mainp)
const sleep = async (seconds) => {
    let s1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })


    return s1

}
const set = async (msg) => {

    await sleep(2)
    mainp.insertAdjacentHTML("beforeend", `
    ${msg}<br>
    `)


}



const main = async () => {
    for (let i of listofmsgs) {
        await set(i)
    }


    mainp.insertAdjacentHTML("beforeend", `
    <h1>
    Success!
    </h1>
    `)

}
main()