// Cleaned up version of the taylorcast.js code that uses an object map in lieu of the case statements.
function taylorCaster(wind, pressure, trend) {
    var forecastMap = {
        '0': {
            'N': ['Cloudy, Rain Probable, Warmer', 'Rain and Colder', 'Severe gale, Heavy Rain, in Winter Cold Wave', 'Unsettled, Probably Cloudy', 'Unsettled, Probably Cloudy', 'Unsettled'],
            'NE': ['Rain, Increasing Winds', 'Increasing Wind, Rain', 'Severe gale, Heavy Rain, in Winter Cold Wave', 'Summer: Light Winds; Winter: Rain', 'Rain', 'Rain, Cooler'],
            'E': ['Rain, Increasing Winds', 'Increasing Winds, Rain', 'Severe Storm, Rain', 'Summer: Unsettled; Winter: Rain', 'Rain','Rain'],
            'SE': ['Cloudy and Rain', 'Increasing Wind, Rain- Warmer', 'Severe Storm Imminent', 'Cloudy and Warmer', 'Rain and Warmer', 'Rain'],
            'S': ['Rain', 'Increasing Wind, Rain', 'Stormy; In Winter, Colder', 'Increasing Cloudiness', 'Rain and Warmer', 'Rain'],
            'SW': ['Cloudy and Warmer', 'Rain and Colder', 'Rain', 'Fair and Warmer', 'Unsettled- Warmer', 'Unsettled- Cloudy'],
            'W': ['Increasing Cloudiness', 'Rain', 'Rain', 'Rising Temperature, And Fair', 'Fair and Warmer', 'Unsettled'],
            'NW': ['Unsettled, Rain if Winds Continue', 'Increasing Cloudiness', 'Unsettled', 'Rising Temperature, And Fair', 'Unsettled', 'Unsettled']
        },
        '1': {
            'N': ['Fair and Cooler', 'Fair and Cooler', 'Fair and Cooler', 'No Change', 'No Change', 'No Change'],
            'NE': ['Fair', 'Fair', 'Fair and Cooler', 'No Change', 'No Change', 'No Change'],
            'E': ['Fair and Cooler', 'Fair, Colder in Winter', 'Fair', 'No Change', 'No Change', 'No Change'],
            'SE': ['Fair', 'Fair and Warmer', 'Fair', 'No Change', 'No Change', 'No Change'],
            'S': ['Fair', 'Fair', 'Fair', 'No Change', 'No Change', 'No Change'],
            'SW': ['Fair', 'Fair', 'Fair', 'No Change', 'No Change', 'No Change'],
            'W': ['Fair', 'Fair and Cooler', 'Fair and Colder', 'No Change', 'Fair', 'No Change'],
            'NW': ['Fair, Much Colder', 'Fair and Cooler', 'Fair and Colder', 'No Change', 'Fair', 'No Change']
        }
    };

    return forecastMap[trend.toString()][wind][pressure];
}
