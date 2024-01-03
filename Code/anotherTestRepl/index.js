let p1 = new Promise((res, rej) => {
	let eo = prompt("Hello")
	let n = 2;
	const main = (a)=>{
		return a
	}
	res(main(n))
})
let p2 = new Promise((res, rej) => {
	let eo = prompt("Hello")
	res("Helo")
})



p1.then((value) => {
	console.log(value)
})
p2.then((value) => {
	console.log(value)
})