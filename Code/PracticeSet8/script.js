// let btn1 = document.getElementsByClassName("btn")[0]
// let btn2 = document.getElementsByClassName("btn")[1]
// let btn3 = document.getElementsByClassName("btn")[2]
// let btn4 = document.getElementsByClassName("btn")[3]




// btn1.onclick = () => {
// 	alert("hello i am btn1")
// }
// btn2.onclick = () => {
// 	alert("hello i am btn2")
// }
// btn3.onclick = () => {
// 	alert("hello i am btn3")
// }
// btn4.onclick = () => {
// 	alert("hello i am btn4")
// }


// const redirect = (url)=>{
// 	// console.log(url)
// 	location.href = url
// }
// let google = document.getElementById("google")
// let chatgpt = document.getElementById("chatgpt")

// let g = google.addEventListener('click', ()=>{
// 	redirect("https://google.com")
// })

// let cg = chatgpt.addEventListener('click', ()=>{
// 	redirect("https://chat.openai.com")
// })


bulb = document.getElementsByClassName("red")[0]	

setInterval(()=>{
	bulb.classList.toggle("red green blue")
	// bulb.classList.toggle("green")
	// bulb.classList.toggle("blue")
}, 300)