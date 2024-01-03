let p = fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=418fdb38c7d5134fca63dc6304cf2efc")
p.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return (response.json())
}).then((response) => {
        console.log(response)
})

