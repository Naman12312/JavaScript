let loadscript = new Promise((resolve, reject)=>{
	let script = document.createElement("script");
	let src = "https://cdn.jsdelidfsvr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
    script.src = src;
	document.body.appendChild(script)
	script.onload=()=>resolve("Script Loaded!")
	script.onerror=()=>reject("loading script failed!")})
	





loadscript.then((value)=>{
	console.log(value)
}, (error)=>{
	console.log(error)
})