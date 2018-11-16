//Getting the ip address location and using it to showcase the weather

// $.get('https://ipapi.co/json/', function(data){
//     const locationCity = data.city
    
//         const locationRegion = data.region

//             $("#location").html("Your location is " + locationCity + ", " + locationRegion )

            $.get('https://www.census.gov/data/developers/data-sets.html', function(data){
                // const locationCity = data.city
                    console.log(data)
                //     const locationRegion = data.region
            
                //         $("#location").html("Your location is " + locationCity + ", " + locationRegion )

// const showWeather = (data) => {
//     console.log(data)
//     const condition = data.current.condition.text
    
//         const conditionPic = "http:" + data.current.condition.icon
    
//             const temp = data.current.temp_f

//         console.log(condition)
//             $("#weather").html(condition)
//         $("#conditionPicture").attr('src', conditionPic)
//             $("#temp").html("The current temperature is " + temp + " degrees farenheit")
// }
//         const city = locationCity

//             const apiKey = "505eb63b691b40d9b5f150200181311"

//                 const weatherURL = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=" + city

// console.log(weatherURL)



$.ajax({
    url:weatherURL,
    success: showWeather
}) 
})