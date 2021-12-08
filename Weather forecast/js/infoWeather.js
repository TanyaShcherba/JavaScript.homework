export class WheatherWidget {

    getClose() {
        const close = document.querySelectorAll('div.weatherContainer');
        for(let closer of close) {
            closer.insertAdjacentHTML("afterbegin", '<i class="fas fa-times close"></i>');
            closer.firstChild.onclick = () => closer.remove();
        }
        return this;
    }
    getWeather() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&appid=5cc098a2c6c4c4aac4d4e52bb6bbed42')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            console.log(data);
            document.querySelector('span.city').textContent = data.name;
            document.querySelector('span.image').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('span.degree').textContent = Math.round(data.main.temp - 273) + '°';
            document.querySelector('span.disclaimer').textContent = data.weather[0]['description'];
            document.querySelector('span.feature').textContent = 'Ветер: ' + data.wind.speed + ' км/ч';
        })
        .catch(function() { }); 

        return this;
    }
}