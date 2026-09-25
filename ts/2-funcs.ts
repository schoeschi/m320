/**
 * Pretty-prints a given price.
 * @param price The price in the later given currency
 * @param granularity The granularity of the desired output
 * @param currency The currency of the price
 * @returns The formatted price
 */
export function displayPretty(price: number, granularity: number, currency: string): string {
    const rounded: number = Math.round(price / granularity) / (1.0 / granularity);
    return `${currency} ${rounded}`;
}

/**
 * Formats a time from seconds to hours, minutes and seconds.
 * @param seconds The duration to be formatted in seconds
 * @returns The given duration in the format HH:MM:SS
 */
export function formatTime(seconds: number): string {
    let remainder: number = seconds;
    const hours: number = remainder / 3600; // Seconds in hours
    remainder %= 3600;
    const minutes: number = remainder / 60; // Remaining time in minutes
    remainder %= 60;
    let text: string;
    text = `${hours.toFixed(0)}:`;
    text += `${minutes.toFixed(0)}'`;
    text += `${remainder}"`; // Remaining seconds
    return text;
}