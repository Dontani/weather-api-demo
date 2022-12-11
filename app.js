const weatherButton = document.querySelector('#weather-checker');

weatherButton.addEventListener('click', () => {
    // console.log('success');
    const lat = 25;
    const lon = -88;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}2&longitude=${lon}&hourly=temperature_2m&temperature_unit=fahrenheit`;

    fetch(url)
        .then(res => res.json())  // parse response as JSON
        .then(data => {
            console.log(data.hourly.temperature_2m[0])
            const tempResult = document.querySelector('#robot-chipmunk');
            tempResult.innerText = `Fahrenheit ${data.hourly.temperature_2m[0]}º`
        })
        .catch(err => {
            console.log(`Error ${err}`)
        })
});
