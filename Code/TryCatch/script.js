async function main1() {
	let p1 = new Promise((resolve, reject) => {

		setTimeout(() => {
			try {
				console.log("setTimeout 1 start")
				resolve(Hello1)
			}
			catch (e) {
				// console.log(e)
				// console.log("Hello")
				resolve("alert")
				console.log("setTimeout 1 end")
			}
		}, 3000)
	})

	let a = await p1;
	console.log(p1)
	return a;
}

async function main2() {

	let p1 = new Promise((resolve, reject) => {

		setTimeout(() => {
			try {
				console.log("setTimeout 2 start")

				resolve(Hello1)
			}
			catch (e) {
				resolve("alert")
				console.log("setTimeout 2 end")

			}
		}, 3000)
	})
	return await p1;

}

async function main3() {

	let p1 = new Promise((resolve, reject) => {

		setTimeout(() => {

			try {
				console.log("setTimeout 3 start")

				resolve(Hello1)
			}
			catch (e) {
				resolve("alert")
				console.log("setTimeout 3 end")
			}
		}, 3000)

	})

	return await p1;

}


async function main() {

	return await main1()


}

// function io() {

// 	console.log(main()) // console.log() will not wait for main to finish.
// }

async function io() {
	console.log(await main())
}
io()