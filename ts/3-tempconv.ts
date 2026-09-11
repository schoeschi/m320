function convertTemperature(temperature: number, fromUnit: string) {
    let convertedTemperature;
    if (fromUnit === "F") {
        convertedTemperature = temperature * (9/5) + 32 + '°C';
    } else if (fromUnit === "C") {
        convertedTemperature = (temperature - 32) * (5/9) + '°F';
    }
    return convertedTemperature;
}

const temp = prompt("Please enter a temperature: ");
const unit = prompt("Please enter a unit (F or C): ");
console.log(`${temp}°${unit} = ${convertTemperature(Number.parseInt(temp!), unit!)}`);