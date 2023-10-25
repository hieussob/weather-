var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortdesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content= document.querySelector('.content')
var body= document.querySelector('body')

 
async function changeWeatherUI(capitalSearch){
     
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=25528040210d7ea8abf18e5d216560f8`
    
    let data = await fetch(apiUrl).then(res=>res.json())
    if(data.cod ==200){
        content.classList.remove('hide')
        console.log(data);
        city.innerText = data.name;
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp= Math.round ((data.main.temp - 273.15)) 
        value.innerText = temp
        shortdesc.innerText= data.weather[0] ? data.weather[0].main : ''
        time.innerText= new Date().toLocaleString('vi')

        // body.style.class = 'warm'
        if(temp <= 50)
        body.setAttribute('class','hot')
        if(temp <= 26)
        body.setAttribute('class','warm')
        if(temp <= 22)
        body.setAttribute('class','cool')
        if(temp <= 10)
        body.setAttribute('class','cold')
    }else{
        content.classList.add('hide')
    }
    
}

search.addEventListener('keypress', function(e){
    if(e.code ==='Enter'){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})

changeWeatherUI('thai binh')