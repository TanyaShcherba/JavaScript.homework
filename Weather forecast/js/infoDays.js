export class WheatherFiveDaysWidget {

    getDaysDialog(){
        const dialog = document.querySelector('dialog');
        document.querySelector('div.info').onclick = () => dialog.showModal();
        document.querySelector('i.closer').onclick = () => dialog.close();
        return this;
    }
    
    getDaysWeather(){
        const getPromise = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=53.90&lon=27.56&exclude=current,minutely,hourly&units=metric&appid=aef4347506d170357d185ad73c78f00d&lang=ru')
        function weatherPromise() {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(getPromise), 2500);
            });
        }
        weatherPromise()
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            console.log(data);
            document.querySelector('span.img1').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.daily[0].weather[0]['icon']}@2x.png">`;
            document.querySelector('span.degree1').textContent =  Math.round(data.daily[0].temp['day']) + '°';
            document.querySelector('span.disclaimer1').textContent = data.daily[0].weather[0]['description'];
            document.querySelector('span.feature1').textContent = 'Ветер: ' + data.daily[0].wind_speed + ' км/ч';

            document.querySelector('span.img2').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.daily[1].weather[0]['icon']}@2x.png">`;
            document.querySelector('span.degree2').textContent =  Math.round(data.daily[1].temp['day']) + '°';
            document.querySelector('span.disclaimer2').textContent = data.daily[1].weather[0]['description'];
            document.querySelector('span.feature2').textContent = 'Ветер: ' + data.daily[1].wind_speed + ' км/ч';

            document.querySelector('span.img3').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.daily[2].weather[0]['icon']}@2x.png">`;
            document.querySelector('span.degree3').textContent =  Math.round(data.daily[2].temp['day']) + '°';
            document.querySelector('span.disclaimer3').textContent = data.daily[2].weather[0]['description'];
            document.querySelector('span.feature3').textContent = 'Ветер: ' + data.daily[2].wind_speed + ' км/ч'; 
        })
        .catch(function() { });
        return this;
    }
}