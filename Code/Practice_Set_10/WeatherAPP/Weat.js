console.log("Practice Set 10")
apikey = "418fdb38c7d5134fca63dc6304cf2efc"
city = "Delhi"
url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
const getData  = async (url) =>{
    let response = await fetch(url) // type: ignore

    

    let vjsondata = await response.json()
    
    console.log(vjsondata)

    temp = (vjsondata.main.temp)-273.15
    pressure = (vjsondata.main.pressure)
    feelslike = (vjsondata.main.feels_like)-273.15
    weathermain = (vjsondata.weather[0].main)
    weatherdescription = (vjsondata.weather[0].description)
    cardContainer = document.getElementById('cardContainer')
    cardContainer.innerHTML+=`
    <h1>
    City: ${city}
    <br>
    Temperature: ${temp}
    <br>
    pressure: ${pressure}
    <br>
    feelslike: ${feelslike}
    <br>
    Weather: ${weathermain}
    <br>
    Weather Description: ${weatherdescription}
    <br>
    </h1>
    `
}


getData(url)