
export async function getWeatherData(location) {
    console.log(`Fetching weather data for: ${location}`);
    try {
        const apiKey = "QCAFBJ6C4Y882NFGC4YR3SF2L";
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`);
        
        if (!response.ok) throw new Error(`HTTP error! status code: ${response.status}`);

        const rawData = await response.json();
        console.log(rawData);

        const cleanedData = {
            address: rawData.resolvedAddress,
            currentTemp: rawData.currentConditions.temp,
            conditions: rawData.currentConditions.conditions,
            humidity: rawData.currentConditions.humidity,
            iconName: rawData.currentConditions.icon
        };
        console.log(cleanedData);
        return cleanedData;

    }
    catch(err) {
        console.log(err);
    }

}

