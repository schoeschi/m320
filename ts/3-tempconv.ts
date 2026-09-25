/**
 * Converts the temperature between °C and °F, depending on the input.
 * @param temperature The temperature to be converted in degrees
 * @param fromUnit The unit the initial temperature is in
 * @returns The temperature in the opposite unit
 */
export function convertTemperature(temperature: number, fromUnit: string) {
    let convertedTemperature;
    if (fromUnit === "F") {
        convertedTemperature = temperature * (9/5) + 32 + '°C'; // Formula from Fahrenheit to Celsius
    } else if (fromUnit === "C") {
        convertedTemperature = (temperature - 32) * (5/9) + '°F'; // Formula from Celsius to Fahrenheit
    }
    return convertedTemperature;
}
