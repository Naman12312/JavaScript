async function harry() {
        console.time("run")
        let delhiWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("27 Deg")
                }, 2000)
        })

        let bangaloreWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("21 Deg")
                }, 5000)
        })

        // delhiWeather.then(alert)
        // bangaloreWeather.then(alert)
        // console.log("Fetching Delhi Weather Please wait ...")
        let delhiW = await delhiWeather
        // console.log("Fetched Delhi Weather: " + delhiW)
        // console.log("Fetching Bangalore Weather Please wait ...")
        let bangaloreW = await bangaloreWeather
        // console.log("Fetched Bangalore Weather: " + bangaloreW)
        console.log([delhiW, bangaloreW])
        console.timeEnd("run")
}
harry()
// const cherry = async () => {
//         console.log("Hey I am cherry and I am waiting ")
// }

// const main1 = async () => {
//         console.log("Welcome to weather control room")
//         // let a = await harry()
//         // let b = await cherry()
// 		return await harry();

// }
// console.log(main1())


// console.log(func())
// func()



// const loadScript = async (src)=>{
// 	let p1 = new Promise((resolve, reject)=>{
		
// 	let script = document.createElement("script")
// 	script.src=src
// 	document.body.append(script)
// 	script.onload=resolve("Script loaded!")
// 	script.onerror=reject("Loading script failed!")
// 	})



// 	return await p1;
// }


// loadScript("https://cdn.tailwindcss.com").then((v)=>{
// 	console.log(v)
// })