const setNote = ()=>{
    // console.log("Helo")
    let note = document.getElementById("notes")
    let nameofnote = document.getElementById("namefornote")
    localStorage.setItem(nameofnote.value, note.value)
    
}    

const getNote = ()=>{
        let note = localStorage.getItem(document.getElementById("namefornote").value)
        console.log(note)

    }
txtarea = document.getElementById("btn")
txtarea.addEventListener("click", ()=>{
    setNote()
    getNote()
})
console.log("Hello")






const delNote = ()=>{
    let nameofnote = document.getElementById("namefornote").value;
    localStorage.removeItem(nameofnote)
}