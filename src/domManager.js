import { getWeatherData } from './weatherApi.js';

export default function Weather() {
    const searchForm = document.getElementById('search-form');
    const locationInput = document.getElementById('location-input');
    
    const displayLocation = document.getElementById('display-location');
    const displayTemp = document.getElementById('display-temp');
    const displayConditions = document.getElementById('display-conditions');
    const displayHumidity = document.getElementById('display-humidity');
    const displayIcon = document.getElementById('display-icon');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const data = await getWeatherData(locationInput.value);
        
        if (data) {
            displayLocation.textContent = data.address;
            displayTemp.textContent = data.currentTemp;
            displayConditions.textContent = data.conditions;
            displayHumidity.textContent = data.humidity;
        }

        try {
                const iconModule = await import(`./icons/${data.iconName}.svg`);
                
                displayIcon.src = iconModule.default;
                displayIcon.style.display = 'block';
                
            } catch (err) {
                console.log(`${err}: Could not find an image file named ${data.iconName}.png`);
            }

    });
}